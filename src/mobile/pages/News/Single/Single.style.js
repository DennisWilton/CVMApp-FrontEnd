import styled from 'styled-components';

export const Wrapper = styled.div`
  
`;

export const Author = styled.h3`
  color: #fff9;
  font-size: 0.8em;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

export const Image = styled.div`
  background: red;
  height: 350px;
  margin: 20px 0;
  border-radius: 4px;
  background: #222 url(${props => props.href});
  background-size: cover;
  background-position: center;
`;

export const Title = styled.h1`
  color: #FFF;
  text-align: center;
  font-size: 1.1em;
  padding: 20px 40px;
`;

export const Content = styled.p`
  color: red;
  text-align: justify;
  color: #FFF;
`;