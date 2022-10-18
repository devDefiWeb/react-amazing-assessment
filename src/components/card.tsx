import styled from "styled-components";

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
    width: 35%;
    margin: auto;
    background-color: #F1F5F8;
    margin-top: 100px;
    margin-bototm: 100px;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export default Card;

export const CardBody = styled.div`
    padding: 30px;
`

export const CardHeader = styled.div`
    border-bottom: solid 1px #cfcfcf;
    padding: 20px;
`
