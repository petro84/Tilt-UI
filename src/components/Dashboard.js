import React from 'react'
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Details from './Details'
import Chart from './Chart'
import selectBeacons from '../selectors/beacons'

const styles = theme => ({
    noData: {
        marginTop: '15px',
    },
})
const Dashboard = (props) => {
    const { classes } = props
    return (
        <div>
            {props.beacons.length === 0 ? (
                <div>
                    <Typography variant='h4' align='center' color='inherit' className={classes.noData}>
                        No Data Logged
                </Typography>
                </div>
            ) : (<div>
                <Details />
                <Chart />
            </div>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        beacons: selectBeacons(state)
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Dashboard))