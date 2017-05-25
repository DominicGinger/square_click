export default dispatch => ({
    incrementClick: () => {
        dispatch({
        type: 'INCREMENT_CLICK',
        payload: { amount: 1 }})
    }
})
