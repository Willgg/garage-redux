import { FETCH_CARS } from '../actions';
// TODO: add and export your own actions

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_CARS: {
      return action.payload.cars;
    }
    default:
      return state;
  }
}

