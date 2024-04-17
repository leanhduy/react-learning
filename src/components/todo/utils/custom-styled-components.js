import { Field } from 'formik'
import styled from 'styled-components'

export const TodoInput = styled(Field)`
    color: #969696;
    background-color: #f1ece6;
    border-radius: 25px 0px 0px 25px;
    border: 0px;
    padding-left: 25px;
    width: 80%;
    height: 50px;
`

export const TodoInputBtn = styled.button`
    background-color: #76b7cd;
    color: #f3f3f3;
    border-radius: 0px 25px 25px 0px;
    height: 50px;
    width: 20%;
    font-weight: bold;
    &:hover {
        color: #f3f3f3;
        background-color: #76b7cd;
        filter: brightness(70%);
    }
`

export const CircleCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width: 24px;
    height: 24px;
    margin-right: 10px;
    outline: 1px solid #d98326;
    &:focus {
        box-shadow: none;
        outline: 1px solid #d98326;
    }
    &:checked {
        background-color: #d98326;
    }
`

export const CircleRadio = styled.input.attrs({
    type: 'radio',
})`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    outline: 1px solid #d98326;
    /* background-color: #d98326; */
    padding: 0px;
    &:focus {
        background-image: none;
        outline: 0px;
    }
    &:checked {
        background-image: none;
        box-shadow: none;

        background-color: #d98326;
        outline: 0px;
    }
`

export const TodoListItem = styled.li.attrs({ className: 'list-group-item' })`
    background-color: #f1ece6;
`
