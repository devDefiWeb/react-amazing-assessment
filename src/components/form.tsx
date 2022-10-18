import styled from "styled-components";

export const Title = styled.div`
    font-size: 40px;
    text-align: center;
    font-weight: center;
`

export const Row = styled.div`
    display: flex;
    align-items: stretch;
    width: 100%;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    margin: 5px;
    text-align: center;
    line-height: 40px;
    font-size: 30px;
    width: 100%;
`

export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
`

export const StyledLabel = styled.label`
    float: left;
    font-size: 18px;
    margin-bottom: -10px;
    font-weight: 500;
`

export const StyledSelect = styled.select`
    padding: 10px;
    margin: auto;
    height: 40px;
    width: 100%;
    margin-top: 10px;
`

export const StyledTextarea = styled.textarea`
    margin-top: 10px;
    width: 100%;
    height: 100px;
    resize: vertical;
    box-sizing: border-box;
    padding: 10px;
`

export const SubmitButton = styled.button`
    width: 150px;
    height: 40px;
    background-color: #006BA8;
    color: white;
    border-width: 0px;
    float: right;
    margin-top: 10px;

    :hover {
        background-color: #065b8b;
        cursor: pointer;
    }
`

export const StyledSpan = styled.span`
    color: #ed8888;
`
