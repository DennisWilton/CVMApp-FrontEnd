import styled from 'styled-components';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const Title = styled.h1`
  color: #FFF;
  text-shadow: 0px 2.5px 5px #0005;
  letter-spacing: 0.5px;
  font-size: 1.1em;
`;

export const Button = styled.button`
  background: ${props => props.color};
  color: ${props => props.textColor};
  border: none;
  padding: 10px;
  border-radius: 5px;

  font-size: 0.75em;
`;


export const User = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;

  & span.user-name{
      color: #FFF;
      font-weight: bold;
      letter-spacing: 1px;
      display: block;
  }

  & span.user-email{
      color: #8b8b8b;
      display: block;
  }
`;

export const Oficina = styled.div`
width: 100%;
  span.label {
      color: #8b8b8b;
      font-weight: bold;
  }

  div.oficina-carousel {
      margin: 10px 0;
      border: 1px solid #4a4a4a;
      border-radius: 8px;
      padding: 20px;
      display: flex;
      align-items: flex-start;
      text-align: center;
      overflow-x: scroll;
      max-width: 100%;

      &::-webkit-scrollbar{
        display: none;
     }

     & > .oficina-item{
         margin: 0 20px;
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
             background: ${props => `#${getRandomInt(100,999)}`};
             margin-bottom: 15px;
             border-radius: 8px;
         }

         & span.oficina-item-text{
             font-size: 0.75em;
         }
     }
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;

  & span.status-label {
    color: #8b8b8b;
    font-weight: bolder;
    font-size: 0.9em;
  }
`;

export const StatusBadge = styled.div`
  background: ${props=>props.color};
  padding: 10px 20px;
  color: ${props=>props.textColor || "#FFF"};
  text-align: center;
  border-radius: 8px;
  cursor: default;
  font-size: 0.8em;
  border 1px solid transparent;

  &:hover{
    background: transparent;
    border: 1px solid ${props=>props.color || "#FFF"};
    color: ${props => props.color || "#FFF"};
  }
`;

export const Help = styled.div`

     span.problem {
       color: #FFF4;
       display: block;
       text-align: justify;
     }

     button.suggest {
       margin-top: 30px;
       width: 100%;
       border-radius: 8px;
       color: #FFF;
       background: #444;
       border: none;
       padding: 15px 20px;
     }
  
`;