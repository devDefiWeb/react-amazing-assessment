import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDynamicRefs from 'use-dynamic-refs';
import BlockUi from 'react-block-ui';
import { useNavigate } from 'react-router-dom'
import { getFieldSetData as getFieldSetData, updateFieldSetData } from "../redux/actions/form.action";
import { IAppState } from "../redux/reducers";
import { Field, FieldSetData } from "../model";
import Card, { CardBody, CardHeader } from "./card";
import { Item, StyledLabel, StyledInput, StyledSelect, StyledTextarea, Row, Title, SubmitButton, StyledSpan } from "./form";
import { isValidEmailString, isValidPhoneString } from "../util";

const FormSubmit: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getRef, setRef] = useDynamicRefs();

    // state from redux store
    const { isLoading, data } = useSelector((store: IAppState) => store.form);

    // component state
    const [fieldSetData, setFieldSetData] = useState<FieldSetData>([]);

    // fetch fieldSetData
    useEffect(() => {
        dispatch(getFieldSetData());
    }, []);

    // store fieldSetData to component state 
    useEffect(() => {
        setFieldSetData(data);
    }, [data]);

    const updateData = (key: string, value: string) => {
        let _fieldSetData = fieldSetData.slice();

        _fieldSetData.map(item => {
            if (Array.isArray(item)) {
                item.map(field => {
                    if (field.id === key) {
                        field.value = value;
                    }
                });
            } else {
                if (item.id === key) {
                    item.value = value;
                }
            }
        });

        setFieldSetData(_fieldSetData);
    }

    const focusField = (fieldId: string) => {
        let ref = getRef(fieldId);
        if (ref !== undefined) {
            (ref.current as any).focus();
        }
    }

    const isValidateForm = (): boolean => {
        let fieldSetList: Field[] = fieldSetData.reduce((res: Field[], item: Field | Field[]) => (
            Array.isArray(item) ? [...res, ...item] : [...res, item]
        ), []);

        for (let i = 0; i < fieldSetList.length; i++) {
            let fieldData = fieldSetList[i];
            const fieldId = fieldData.id.toLowerCase();
            if (fieldId.indexOf("email") >= 0) {
                if (fieldData.value === "" && fieldData.required) {
                    alert(`Field ${fieldData.id} is required!`);
                    focusField(fieldData.id);
                    return false;
                }
                else if (fieldData.value !== undefined && fieldData.value !== "" && !isValidEmailString(fieldData.value)) {
                    alert(`Invalid Field ${fieldData.id}!`);
                    focusField(fieldData.id);
                    return false;
                }
            }
            if (fieldId.indexOf("phone") >= 0) {
                if (fieldData.value === "" && fieldData.required) {
                    alert(`Field ${fieldData.id} is required!`);
                    focusField(fieldData.id);
                    return false;
                }
                else if (fieldData.value !== undefined && fieldData.value !== "" && !isValidPhoneString(fieldData.value)) {
                    alert(`Invalid Field ${fieldData.id}!`);
                    focusField(fieldData.id);
                    return false;
                }
            }
            if (fieldData.required && (fieldData.value === "" || fieldData.value === undefined)) {
                alert(`Field ${fieldData.id} is required!`);
                focusField(fieldData.id);
                return false;
            }
        }

        return true;
    }

    const handleClickSubmitButton = () => {
        if (isValidateForm()) {
            dispatch(updateFieldSetData(fieldSetData));
            navigate('/result');
        }
    }

    const getComponentFromFieldData = (fieldData: Field) => {
        switch (fieldData.type) {
            case "text":
                return (
                    <Item key={fieldData.id}>
                        <StyledLabel>
                            {(fieldData.required) ? (
                                <StyledSpan>
                                    *&nbsp;
                                </StyledSpan>
                            ) : null}
                            {fieldData.id} :
                        </StyledLabel>
                        <StyledInput
                            required={fieldData.required}
                            name={fieldData.id}
                            placeholder={fieldData.placeholder}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateData(fieldData.id, e.target.value)}
                            ref={setRef(fieldData.id) as React.RefObject<HTMLInputElement>}
                        />
                    </Item>
                );

            case "select":
                return (
                    <Item key={fieldData.id}>
                        <StyledLabel>
                            {fieldData.id} :
                        </StyledLabel>
                        <StyledSelect
                            defaultValue=""
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateData(fieldData.id, e.target.value)}
                            ref={setRef(fieldData.id) as React.RefObject<HTMLSelectElement>}
                        >
                            <option value=""></option>
                            {fieldData.options?.map((optionName, index) =>
                                <option value={optionName} key={index}>{optionName}</option>
                            )}
                        </StyledSelect>
                    </Item>
                );

            case "textarea":
                return (
                    <Item key={fieldData.id}>
                        <StyledLabel>
                            {fieldData.id} :
                        </StyledLabel>
                        <StyledTextarea
                            placeholder={fieldData.placeholder}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateData(fieldData.id, e.target.value)}
                            ref={setRef(fieldData.id) as React.RefObject<HTMLTextAreaElement>}
                        />
                    </Item>
                )
        }
    }

    const fieldList = fieldSetData.map(item => {
        if (Array.isArray(item)) {
            return (
                <Row key={item[0].id}>
                    {item.map(dataField => getComponentFromFieldData(dataField))}
                </Row>
            );
        } else {
            return (
                <Row key={item.id}>
                    {getComponentFromFieldData(item)}
                </Row>
            );
        }
    });

    return (
        <BlockUi blocking={isLoading}>
            <Card>
                <CardHeader>
                    <Title>
                        Application Form
                    </Title>
                </CardHeader>
                <CardBody>
                    {fieldList}
                    <Row>
                        <Item>
                            <SubmitButton onClick={() => handleClickSubmitButton()}>
                                Submit
                            </SubmitButton>
                        </Item>
                    </Row>
                </CardBody>
            </Card>
        </BlockUi>
    );
}

export default FormSubmit;
