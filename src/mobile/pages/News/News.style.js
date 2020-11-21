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