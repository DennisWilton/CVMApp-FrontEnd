import styled from 'styled-components';
let size = 50;

export const Wrapper = styled.div`
    // background: #000;
    width: ${size}px;
    position: relative;

    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr;
    cursor: pointer;

    
    & > span {
        margin-top: 10px;
        text-align: center;
        font-size: 0.65em;
    }
    `;
    
    export const Square = styled.div`
    display: block;
    width: ${size}px;
    height: ${size}px;
    background: ${props => props.color || '#222'};
    border-radius: 8px;
    margin: 0 auto;
    box-shadow: 0px 3px 3px #0005;
`;