import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 2px;
    color: #aaa;
`

export const ErrorViewer = styled.div`
    padding: 20px;
    background: #222;
    border-radius: 5px;
    margin-bottom: 20px;
    color: #aaa;
    box-shadow: 0px 3px 3px #00000020;
`

export const Step = styled.div`
padding: 2px;
display: ${props => props.showStep ? 'block' : 'none'};
margin-bottom: 5px;
`