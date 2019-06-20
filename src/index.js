import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import configureStore from './config/configureStore'
import AppRouter from './config/AppRouter'

import { fetchBeacons } from './actions/beacons'
import './styles/styles.scss'

const store = configureStore()

const theme = createMuiTheme({
    typography: {
        "fontFamily": "\"Gochi Hand\", cursive"
    }
})

const jsx = (
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <AppRouter />
        </MuiThemeProvider>
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('index'))

store.dispatch(fetchBeacons()).then(() => ReactDOM.render(jsx, document.getElementById('index')))