import {createTheme} from "@material-ui/core";

const Theme = createTheme({
    overrides: {
        MuiPaper: {
            rounded: {
                borderRadius: 8
            }
        }
    },
    palette: {
        common: { black: '#000', white: '#fff' },
        type: 'light',
        default: {
            main: '#38383a',
            light: '#38383a',
            dark: '#38383a',
            contrastText: '#fff'
        },
        primary: {
            main: '#ff6600',
            light: '#ff6600',
            dark: '#ff6600',
            contrastText: '#fff'
        },
        secondary: {
            "main": "#fafafa",
            "light": "#fff",
            "dark": "#bdbdbd",
            "contrastText": "#fff"
        }
    }
})

export default Theme