import styled from 'styled-components';


export const Modal = styled.div`
  width: 90%;
  height: 400px;
  color: #222;
  background: #E6E7E8;
  position: absolute;
  margin: 0 auto;
  top: 100px;
  padding: 10px;

  border-radius: 5px;

  box-shadow: 0px 5px 10px 5px #0006;



  button.close {
      background: #d43;
      color: #FFF;
      border: none;
      height: 35px;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      margin-bottom: 15px;
      margin-left: calc(100% - 120px - 5px) ;
  }
`;


export const Row = styled.div`
    display: flex;

    input {
        width: 100%;
        border: none;
        padding: 10px;
        margin: 5px;
        text-align: center;
    }
`;