import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #eee url(${props => props.picture});
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 6px;
  box-shadow: 0 2px 4px #2225;
  position: relative;
  padding: 10px;
  margin-bottom: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;

  &::after{
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, #000F 10%, #0004 60%);
      border-radius: 6px;
      content: "";
      z-index: 0;
  }
`;

export const Title = styled.h1`
  font-size: 1em;
  z-index: 1;
  color: #FFF;
  margin: 5px 10px;
  `;
  
  export const Content = styled.p`
  z-index: 1;
  font-size: 0.85em;
  color: #FFF;
  margin: 5px 10px;
`;

export const Author = styled.p`
  z-index: 1;
  margin: 10px 10px;
  color: #ccc;
  font-size: 0.7em;
`;