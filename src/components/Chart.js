import React from 'react'
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer'
import {LineChart, CartesianGrid, Tooltip, Legend, XAxis, YAxis, Line} from 'recharts'
import {connect} from 'react-redux'
import moment from 'moment'

import selectBeacons from '../selectors/beacons'

const customTooltip = ({active, payload, label}) => {
    if (active) {
        return (
            <div>
                <p>{moment(label).format('MMM Do YYYY, HH:mm')}</p>
                <p>Gravity: {payload[0].value}</p>
                <p>Temperature: {payload[1].value}</p>
            </div>
        )
    }
}

 const Chart = ({beacons}) => {
    return (
        <ResponsiveContainer width='99%' height={320}>
            <LineChart data={beacons}>
                <XAxis dataKey='timestamp' tick={false} />
                <YAxis yAxisId='left' type='number' domain={['dataMin', 'dataMax']} />
                <YAxis yAxisId='right' orientation='right' type='number' domain={['dataMin', 'dataMax']} />
                <CartesianGrid vertical={false} strokeDasharray='3 3' />
                <Tooltip content={customTooltip} />
                <Legend verticalAlign='top'/>
                <Line type='monotone' dot={false} dataKey='gravity' yAxisId='left' stroke='#58F61E' />
                <Line type='monotone' dot={false} dataKey='temp' yAxisId='right' stroke='#EB0000' />
            </LineChart>
        </ResponsiveContainer>
    )
}

const mapStateToProps = (state) => {
    return {
        beacons: selectBeacons(state)
    }
}

export default connect(mapStateToProps)(Chart)