import {createUseStyles} from 'react-jss';
import color from 'color';

const theme = {
    primary: `#222`,
    secondary: `#444`,
    tPrimary: `#FFF`,
    tSecondary: `#777`,
}

export default createUseStyles({
      wrapper: {
          paddingTop: 30,
          position: `relative`,
          zIndex: 0 }
    , title: { 
        color: theme.tPrimary,
        fontSize: `1.3em`,
        paddingBottom: 15 }
    , box: { 
        padding: [[20, 20]],
        background: color(theme.primary)
                    .lighten(0.4)
                    .hex(),
        color: theme.tPrimary,
        marginBottom: 10,
        ['& > h3']: {
            color: theme.tPrimary,
            fontSize: `1.15em`,
            marginBottom: 15
        },
        ['& > span']: {
            color: theme.tSecondary,
            display: `block`,
            width: `100%`,
            textAlign: `justify`,
            ['&.code,&.link']: {
                fontSize: `0.8em`,
            },
            ['&.link']: {
                display: `block`,
                color: theme.tPrimary,
                padding: 15,
                marginTop: 15,
                background: `linear-gradient(to right, #00C853, #B2FF59)`,
 
                ['& a']:{
                    color: color(theme.tPrimary).hex(),
                    padding: [[0, 20]]
                },

                '&.disabled': {
                    background: `gray`,

                    ['& a']:{
                        color: color(theme.tPrimary).hex(),
                        padding: [[0, 20]],
                        textDecoration: 'none',
                        cursor: `default`
                    },
                },
               
            },
        }}
    , btn: {
        border: `none`,
        padding: [[10]],
        background: color(`green`)
                    .lighten(0.4)
                    .saturate(-0.5)
                    .hex(),
        color: `#FFF`,
        ['&.block']: {
            display: `block`,
            width: `100%`
        }
    }
})