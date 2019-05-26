import database from '../database/firebase'

export const setBeacons = (beacons) => ({
    type: 'SET_BEACONS',
    beacons
})

export const fetchBeacons = () => {
    return (dispatch) => {
        return database.ref('tilt/Black/beacon').once('value').then((snapshot) => {
            const beacons = Object.keys(snapshot.val() || {}).map(k => ({...snapshot.val()[k]}))

            dispatch(setBeacons(beacons))
        })
    }
}