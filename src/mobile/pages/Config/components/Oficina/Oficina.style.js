import styled from 'styled-components';

export const Oficina = styled.div`
    margin: 0 10px;
    color: #FFF;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    background: #222;
    padding: 20px 10px;

    border-radius: 12px;

    & div.block{
        width: 50px;
        height: 50px;
        background: ${props => props.color};
        margin-bottom: 15px;
        border-radius: 8px;
    }

    & span.oficina-item-text{
        font-size: 0.75em;
    }
`;