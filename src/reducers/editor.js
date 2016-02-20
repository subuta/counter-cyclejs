import { ADD_TODO } from 'constants/ActionTypes'

const initialState = {
  counter: 0
}

export default function editor (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state
    case 'CLICKED':
      return {
        counter: state.counter + 1
      }
    default:
      return state
  }
}
