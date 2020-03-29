import styled from 'styled-components'

const TYPES = {
    ADD: '#6dff66',
    EDIT: '#ffa535',
    DELETE: '#ff4455'
}

export default {
    Wrapper:  styled.div `
        width: 200px;
        height: 150px;
        display: flex;
        flex-direction: column;
        background-color: #baff8c;
        padding: 20px;
        margin-top: 10px;
    `, 
    Name: styled.div `
        color: #6d6d6d;
        font-weight: 600;
        margin-bottom: 5px;
    `,
   Age: styled.div `
        color: #6d6d6d;
        font-weight: 350;
        font-size: 15px;
    `,
    Button: styled.button `
        height: 40px;
        width: 100%;
        margin-top: 10px;
        border: none;
        outline: none;
        opacity: 0.7;
        background-color: ${((props) => {
            return props.type && TYPES[props.type] ? TYPES[props.type] : TYPES.ADD
        })};
        &:hover {
            opacity: 1;
        }
    `,
    NameInput: styled.input `
    width: 100px;
    heigth: 20px;
    padding: 5px;
    display: block;
    &.focus {
        outline: none!important;
    }
    `,
    AgeInput: styled.input `
    width: 40px;
    heigth: 20px;
    padding: 5px;
    margin-top: 5px;
    display: block;
    &.focus {
        outline: none!important;
    }
    `,
    Label: styled.div `
    font-size: 12px;
    color: #999;
    font-weight: 400;
    margin: 3px 0;
    `
}