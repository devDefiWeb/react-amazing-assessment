import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BlockUi from 'react-block-ui';
import { useNavigate } from 'react-router-dom'
import { clearFieldSetData } from "../redux/actions/form.action";
import { IAppState } from "../redux/reducers";
import { Field } from "../model";
import Card, { CardBody, CardHeader } from "./card";
import { Item, StyledLabel, StyledInput, Row, Title, SubmitButton } from "./form";

const FormResult: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, data: fieldSetData } = useSelector((store: IAppState) => store.form);

    const handleClickReturnButton = () => {
        dispatch(clearFieldSetData());
        navigate('/submit');
    }

    const getComponentFromFieldData = (fieldData: Field) => {
        switch (fieldData.type) {
            case "text":
                return (
                    <Item key={fieldData.id}>
                        <StyledLabel>
                            {fieldData.id} :
                        </StyledLabel>
                        <StyledInput
                            value={fieldData.value}
                            readOnly
                        />
                    </Item>
                );

            case "select":
                return (
                    <Item key={fieldData.id}>
                        <StyledLabel>
                            {fieldData.id} :
                        </StyledLabel>
                        <StyledInput
                            value={fieldData.value}
                            readOnly
                        />
                    </Item>
                );

            case "textarea":
                return (
                    <Item key={fieldData.id}>
                        <StyledLabel>
                            {fieldData.id} :
                        </StyledLabel>
                        <StyledInput
                            value={fieldData.value}
                            readOnly
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
                        Thank you!
                    </Title>
                </CardHeader>
                <CardBody>
                    {fieldList}
                    <Row>
                        <Item>
                            <SubmitButton onClick={() => handleClickReturnButton()}>
                                Return
                            </SubmitButton>
                        </Item>
                    </Row>
                </CardBody>
            </Card>
        </BlockUi>
    );
}

export default FormResult;
