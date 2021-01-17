import styled from 'styled-components';

export const Wrapper = styled.button`
  padding: ${props => props.p};
  width: ${props => props.block ? `100%` : 'auto'};
  border-radius: 4px;
  border: none;
  background: ${props => props.bg};
  color: ${props => props.color};
`;