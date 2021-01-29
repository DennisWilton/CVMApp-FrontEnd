import styled from 'styled-components';

export const StyledInput = styled.input`
  background: #222;
  color: #aaa;
  border: none;
  border-radius: 3px;
  padding: 5px;
  font-size: 1em;
  margin: 2px 1px;
  ${props => props.fullWidth && `width: 100%;`}
`;