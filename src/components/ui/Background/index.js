import styled, { css } from 'styled-components';

const Background = styled.div`
    padding: 1rem;
    color: #fff;

    background-color:${function (props){
        if(props.bg){
            return props.theme.bg[props.bg];
        }else{
            return props.theme.bg['primary'];
        }
    }};

    ${function (props){
        return props.center && css`
            text-align: center;
        `
    }}
`;

export default Background;