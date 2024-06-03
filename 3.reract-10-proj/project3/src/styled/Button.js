import styled from "styled-components"
export const Button = styled.button`
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
    min-width: 220px;
    border: 1px solid transparent;
    transition: 0.6s backgroundColor ease-in-out;
    &:hover{
        background-color:white;
        color:black;
        font-size: 19px;
        border: 1px solid black;
        transition: 0.5s;
        }
`

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover{
        background-color:black;
        color:white;
        font-size: 19px;
        border: 1px solid transparent;
        transition: 0.5s;
        }
`