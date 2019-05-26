import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import numeral from 'numeral'

import selectBeacons from '../selectors/beacons'
import DetailedCard from './DetailedCard'

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey[100],
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: '0 400px',
        paddingBottom: 25,
        paddingTop: 25,
    },
    grid: {
        width: 1200,
        margin: `0 ${theme.spacing(2)}px`,
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 20px)'
        },
    },
})

class Details extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {classes} = this.props
        
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <Grid container justify='flex-end'>
                        <Grid spacing={8} alignItems='center' justify='center' container className={classes.grid}>
                            <Grid item xs={12} sm={6}>
                                <DetailedCard title='Current Gravity (CG)' data={this.props.beacons[0].gravity} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DetailedCard title='Original Gravity (OG)' data={this.props.beacons[this.props.beacons.length - 1].gravity} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DetailedCard title='Current Temp' data={`${this.props.beacons[0].temp}° F`} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DetailedCard title='Alcohol by Volume (ABV)' data={numeral((this.props.beacons[this.props.beacons.length -1].gravity - this.props.beacons[0].gravity) * 1.13125).format('0.00%')} />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        beacons: selectBeacons(state)
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Details))