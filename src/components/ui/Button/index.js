import styled, { css } from 'styled-components';

const Button = styled.button`
    // padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #0F172A;
    cursor: pointer;

    background-color: ${function (props){
        if(props.variant){
            return props.theme.colors[props.variant];
        } else{
            return props.theme.colors['primary'];
        }
    }};

    padding: ${function (props){
        if(props.size){
            return props.theme.size[props.size].padding;
        }else{
            return props.theme.size['md'].padding;
        }
    }};

    font-size: ${function (props){
        if(props.size){
            return props.theme.size[props.size].fontsize;
        }else{
            return props.theme.size['md'].fontsize;
        }
    }};

    ${function (props){
        return props.full && css`
        display: block;
        width: 100%;
        `
    }}
`;

export default Button;