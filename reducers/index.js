const initialState = {
  northeast: 0,
  southeast: 0,
  northwest: 0,
  southwest: 0,
  nevisible: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_NORTHEAST':
      return Object.assign({}, state, {
        northeast: state.northeast + 1
      })
    case 'INCREASE_SOUTHEAST':
      return Object.assign({}, state, {
        southeast: state.southeast + 1
      })
    case 'INCREASE_NORTHWEST':
      return Object.assign({}, state, {
        northwest: state.northwest + 1
      })
    case 'INCREASE_SOUTHWEST':
      return Object.assign({}, state, {
        southwest: state.southwest + 1
      })
    case 'INCREASE_NEVISIBLE':
      return Object.assign({}, state, {
        nevisible: state.nevisible + 1
      })
    case 'DECREASE_NEVISIBLE':
      return Object.assign({}, state, {
        nevisible: state.nevisible - 1
      })
    default:
      return state
  }
}
