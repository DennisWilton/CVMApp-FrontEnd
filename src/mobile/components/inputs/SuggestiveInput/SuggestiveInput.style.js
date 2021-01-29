import styled from 'styled-components';
import {TextField} from '@material-ui/core';

export const Wrapper = styled.div`
    width: 100%;
    position: relative;

    & > input {
        width: 100%;
    }
`;

export const SuggestionsField = styled.div`
  background: #161616;
  position: absolute;
  width: 100%;
  top: 2px;
  border-radius: 3px;
  box-shadow: 0px 3px 3px #0006;
  border: 3px solid #111;
  padding: 2px;
`;

export const Suggestion = styled.div`
    padding: 10px;
    font-size: 0.7em;
    background: #222;
    border-radius: 2px;
`
