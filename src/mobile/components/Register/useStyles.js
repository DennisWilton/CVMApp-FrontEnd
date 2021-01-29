import { createUseStyles } from 'react-jss';

const theme = {
    bg: {
        primary: `#222`,
        secondary: `#333`
    },
    text: {
        primary: `#fff`,
        secondary: `#999`
    },
}

const useStyles = createUseStyles({
    form: {
        height: `100%`,
        paddingBottom: 100,
        overflowY: `scroll`,
        [`&::-webkit-scrollbar`]: {
            display: `none`
        }
    },

    title: {
        color: theme.text.primary
    },
    subtitle: {
        color: theme.text.secondary,
        padding: [[10, 2]],
        textAlign: `justify`
    },
    defaultInput: (props)  => ({
        color: theme.text.primary,
        background: theme.bg.primary,
        border: `none`,
        borderRadius: 2,
        display: `block`,
        padding: [[10, 20]],
        margin: [[5, 0]],
        fontSize: `1em`,
        ['&:disabled']: {
            background: `#2a2a2a`,
        },
        ['&.invalid']: {
            background: `#422`,
        }
    }),
    fullwidth: { 
        width: `100%`
    },
    submit: { 
        background: `#692`,
        border: `none`,
        padding: [[10,10]],
        marginTop: 20,
        color: `#FFF`
    },
    loading: {
        background: `#0009`,
        position: `absolute`,
        top: 0, left: 0,
        width: `100%`, height: `100%`, 
        display: `flex`, flexFlow: `column`,
        alignItems: `center`, justifyContent: `center`,
        zIndex: 1,
        color: `#FFF`,
        backdropFilter: `blur(2px)`,

        ['&>span']: {
            padding: 5
        }

    }
});


export default useStyles;