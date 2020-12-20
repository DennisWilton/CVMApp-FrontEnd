import styled from 'styled-components';

export const Title = styled.h3`
  color: #888;
  padding: 10px;
  text-align: center;
  font-size: 0.8em;
  font-weight: 200;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;

export const ScrollableNews = styled.div`
  display: block;
  max-height: 100%;
  overflow-y: scroll;
  padding-bottom: 70px;

  &::-webkit-scrollbar{
     display: none;
  }
`;

export const CloseButton = styled.div`
  background: #c308;
  color: #FFF;
  position: absolute;
  right: 20px;
  top: 25px;
  width: 50px;
  font-size: 1.5em;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;

  &:hover{
    background: #c30;
  }
`;
