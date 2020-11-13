import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    max-width: 420px;
    min-height: ${props => props.minHeight}px;
    max-height: 900px;
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-template-rows: 75% 100%;
    align-items: center;
    justify-items: center;
    overflow: hidden;

    & #brand {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        // max-width: 150px;
        // height: 200%;
    }
    & #brand > img {
        max-width: 240px;
        width: 100%;
        height: auto;
    }
`;

export const App = styled.div`
`;

export const AppContent = styled.div`
  background: #353535;
  border-radius: 14px;
  padding: 20px;
  position: relative;
  margin: 20px;
  overflow: hidden;
`;

export const Loading = styled.div`
  background: #252525;
  color: #FFF;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
/*

export const AppContent = styled.div`
    flex: 1;  
    background: #353535;
    display: grid;
    border-radius: 14px;
    padding: 20px;
    margin: 2px;

    @media (max-height: 600px){
        max-height: 560px;
    }
`*/