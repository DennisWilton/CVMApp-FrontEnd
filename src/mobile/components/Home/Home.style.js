import styled from 'styled-components';

export const Wrapper = styled.div`
display: grid;
grid-template-rows: 0fr 0.6fr auto auto auto auto auto auto;
height: 100%;
`;

export const Title = styled.span`
color: #A8A8A8;
// background: yellow;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;
`

export const LinhaHorizontal = styled.div`
    width: 90%;
    height: 1px;
    display: block;
    border-color: #FFF1;
    background: #FFF1;
    margin: 0 auto;
`

// export const Input = styled.input`
// padding: 5px;
// border-radius: 12px;
// width: 100%;
// height: 100%;
// border: none;
// `

export const InputGroup = styled.div`
    display: flex; 
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    gap: 15px;

    & .myInput {
        padding: 5px;
        border-radius: 12px;
        width: 100%;
        height: 100%;
        border: none;
        text-align: center;

    }
`;


export const AccountControl = styled.span`
color: #A8A8A8;
text-align: center;
font-size: 0.8em;

& > a {
    padding: 5px 10px;
    cursor: pointer;
    &:hover{
        background: #FFF1;
    }
}
`


export const Button = styled.button`
    background: #E16363;
    border: none;
    padding: 15px 0;
    color: #FFF;
    font-weight: bold;
    width: 65%;
    border-radius: 6px;
    margin: 0 auto;
    position: relative;
    cursor: pointer;
    max-height: 50px;

    box-shadow: 0px 5px 2px #0001;
    
    &:hover{
        background: #D15353;
    }
`


export const Popup = styled.div`
  width: 80%;
  padding: 20px;
  min-height: 50px;
  background: #FFF;
  border-radius: 5px;
  box-shadow: 0px 5px 5px #0002;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
  overflow: hidden;
  z-index: 9999999;


  & > #progressbar {
      width: 100%;
      height: 7.5px;
      background: #E16363;
      position: absolute;
      bottom: 0px;
      left: 0;
  }
`;