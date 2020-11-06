export const SET_USERS = 'SET_USERS';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}

export default userReducer;