import styled from 'styled-components';

export const Wrapper = styled.div`
  & > div.refresh {
    color: #FFF;
    margin-top: -45px;
    text-align: center;
    transform: scale(0.6) translateY(0px);
    background: #222;
    padding: 10px 20px;
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

export const StatusBadgeWithRefreshBtn = styled(StatusBadge)`
display: grid;
padding: 0;
grid-template-rows: 1fr;
grid-template-columns: auto 1fr;
overflow: hidden;
cursor: pointer;

& > div {
  padding: 10px 10px;
}

& > div:nth-child(1){
  background: #0001;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

& > div:nth-child(2){
  padding-left: 10px;
  white-space: nowrap;
}
`