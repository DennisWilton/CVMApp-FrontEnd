import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  color: yellow;
`;

export const Title = styled.h1`
  color: #ddd;
  font-size: 0.8em;
  text-align: center;
  padding: 40px 0;
`;

export const Item = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 10px 20px;

  & span.title{
    font-size: 0.8em;
    color: #666;
    font-weight: bold;
    margin-bottom: 5px;
  }

  & span.value{
    font-size: 0.9em;
    color: #FFF;
  }
`;


export const WhiteBox = styled.div`
  height: 100%;
  padding: 40px 40px;
  margin: 10px -20px; 
  background: #FFF;
  margin-top: 40px;
`;

export const Product = styled.div`
  color: #999;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
`;

export const Buttons = styled.div`
// padding: 20px 0px;
display: grid;
margin-top: 20px;

grid-template-rows: auto;
grid-template-columns: 45% 10% 45%;
`;


export const Button = styled.button`
  padding: 10px;
  border: none;
  background: ${props => props.color || '#222'};
  color: ${props => props.textColor || '#FFF'};
  border-radius: 5px;
`;