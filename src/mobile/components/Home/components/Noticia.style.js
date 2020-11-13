import ss,{} from 'styled-components';

export const Wrapper = ss.div`
    display: block;
    min-height: 60px;
    // max-height: 175px;
    background: #222 ${props => `url("${props.image}")`};
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    // margin-bottom: -35px;

    box-shadow: 1px 5px 5px #0002;
`
