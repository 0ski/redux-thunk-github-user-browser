const actions = {
  USER_DATA: 'USER_DATA_OBTAINED',
  USER_DATA_ERROR: 'USER_DATA_ERROR',
  LOADING_USER_DATA: 'LOADING_USER_DATA',
  CHECK_CACHE: 'CHECK_CACHE',
};

const userData = data => ({
  type: actions.USER_DATA,
  user: data,
});

const loadingUserData = data => ({
  type: actions.LOADING_USER_DATA,
  isLoading: data,
});

const userDataError = data => ({
  type: actions.USER_DATA_ERROR,
  error: data,
});

const blankUser = () => ({
  type: actions.USER_DATA,
  name: '',
});

const getCachedUserData = login => ({
  type: actions.CHECK_CACHE,
  login,
});

const getUserData = (name = '') =>
  dispatch => {
    dispatch(loadingUserData(true));
    return fetch(`https://api.github.com/users/${name}`)
      .then(res => {
        dispatch(loadingUserData(false));
        return res.json().then((jsonRes) => ({
            data: jsonRes,
            status: res.status,
          })
        );
      })
      .then(res => {
        if (res.status !== 200) {
          dispatch(userDataError(res.data));
          return;
        } else {
          dispatch(userData(res.data));
          return res;
        }
      });
  };

export { actions, getUserData, userData, getCachedUserData, blankUser };
