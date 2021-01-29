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
    
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
    padding-bottom: 50px;

    & > span.title {
        text-align: justify;
        color: #fff;
        font-weight: bold;
        font-size: 1.1em;
        margin-bottom: 5px;
    }
    
    & > span.description {
        text-align: justify;
        color: #bbb;
        font-weight: 200;
        font-size: 0.8em;
        margin-bottom: 5px;
    }
    

`
