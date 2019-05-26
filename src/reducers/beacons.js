const beaconsDefaultState = []

export default (state = beaconsDefaultState, action) => {
    switch (action.type) {
        case 'SET_BEACONS':
            return action.beacons
        default:
            return state
    }
}