export default (state = {}, action) => {
    switch (action.type) {
        case 'INCREMENT_CLICK':
            return { clicks: state.clicks + action.payload.amount }
        default:
            return state
    }
}
