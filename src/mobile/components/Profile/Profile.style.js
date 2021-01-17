import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #FFF;
  display: grid;
  grid-template-rows: repeat(4, auto) 100%;
  height: 100%;
`;

export const UserName = styled.h1`
  color: #FFF;
  font-size: 1em;
  text-shadow: 0px 2px 2px #0007;
`;

export const Row = styled.div.attrs({className: `row`})`
  // background: red;
  padding: 10px 20px;
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: space-between;
`;

export const Versiculo = styled.div`
  min-height: 100px;
  width: 100%;
  background: #efefef;
  color: #222;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 0px 5px 5px #0003;
`;

export const Opcao = styled.div`
  
`;