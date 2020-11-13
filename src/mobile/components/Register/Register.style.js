import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #FFF;
  & > h1 {
      margin: 25px 0px;
  }
  & > p {
      margin: 25px 0px;
  }
`;

export const InputGroup = styled.div`
  background: transparent;

  & > .row {
      padding: 2.5px 0px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:first-child{
          padding-top: 0;
      }

      &:last-child{
          padding-bottom: 0;
      }
  }

  & input, & .input {
      color: #FFF;
      background: #2c2c2c;
      border: none;
      padding: 10px;
      flex: 1;
      height: 100%;
      border-radius: 4px;

      &.invalid{
          background: #911;
          outline: red 1px solid;
      }

      &[type=button]{
          transition: background 0.5s ease-in-out;
          background: ${props => props.canContinue ? '#159' : 'transparent'};
      }
  }
`;

export const Row = styled.div`
padding: 2.5px 0px;
display: flex;
align-items: center;
justify-content: center;
text-align: justify;

color: ${props => props.textColor || 'inherit'};

margin-top: ${props => props.marginTop};

&:first-child{
    padding-top: 0;
}

&:last-child{
    padding-bottom: 0;
}
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;  
    background: ${props => props.color};
    color: ${props => props.textColor};
    transition: background 0.75s ease-in-out;
    cursor: pointer;
    border-radius: 4px;
`;

export const Cancel = styled.span`
  padding: 15px 20px;
  color: #FFF8;
  font-size: 0.8em;
  cursor: pointer;

  &:hover{
      background: #FFF1;
  }
`;