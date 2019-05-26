import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import BeerAnimation from './BeerAnimation'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        position: 'relative',
        backgroundColor: '#2196f3',
    },
    appBarText: {
        marginLeft: '130px',
        marginTop: '15px',
        display: 'block',
    },
})

const Banner = (props) => {
    const { classes } = props

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <BeerAnimation />
                    <Typography variant='h2' color='inherit' classes={{root: classes.appBarText}} gutterBottom>
                        Larry's Homebrew
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default withStyles(styles)(Banner)