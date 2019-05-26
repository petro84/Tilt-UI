import React, { Component } from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    card: {
        maxWidth: 350
    },
    cardHeader: {
        backgroundColor: "#2196f3"
    },
    cardText: {
        color: '#FFFFFF'
    }
})

class DetailedCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props

        return (
            <Card className={classes.card}>
                <CardHeader title={this.props.title} className={classes.cardHeader} classes={{title: classes.cardText}}/>
                <CardContent>
                    <div>
                        <Typography variant='h6'>
                            {this.props.data}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(DetailedCard)