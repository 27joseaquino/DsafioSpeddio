export function setUserMutation(state, user) {
  state.data = user;
}
export function setTokenMutation(state, token) {
  state.token = token;
}

export function logoutMutation(state) {
  state.data = '',
    state.token = ''
}