const actions = {
  USER_DATA: 'USER_DATA_OBTAINED',
  USER_DATA_ERROR: 'USER_DATA_ERROR',
  LOADING_USER_DATA: 'LOADING_USER_DATA',
  CHECK_CACHE: 'CHECK_CACHE',
  FOLLOWERS: 'FOLLOWERS',
  FOLLOWING: 'FOLLOWING',
  L_FOLLOWERS: 'LOADING_FOLLOWERS',
  L_FOLLOWING: 'LOADING_FOLLOWING',
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

const loadingFollowers = bool => ({
  type: actions.L_FOLLOWERS,
  loadingFollowers: bool,
});

const loadingFollowing = bool => ({
  type: actions.L_FOLLOWING,
  loadingFollowing: bool,
});

const assignFollowers = followers => ({
  type: actions.FOLLOWERS,
  followers,
});

const assignFollowing = following => ({
  type: actions.FOLLOWING,
  following,
});

const followers = (name = '') =>
  dispatch => {
    dispatch(loadingFollowers(true));
    return fetch(`https://api.github.com/users/${name}/followers`)
      .then(res => {
        dispatch(loadingFollowers(false));
        return res.json();
      })
      .then(res => {
        if (Array.isArray(res)) {
          dispatch(assignFollowers(res));
        } else {
          dispatch(assignFollowers(null));
        }
      });
  };

const following = (name = '') =>
  dispatch => {
    dispatch(loadingFollowing(true));
    return fetch(`https://api.github.com/users/${name}/following`)
      .then(res => {
        dispatch(loadingFollowing(false));
        return res.json();
      })
      .then(res => {
        if (Array.isArray(res)) {
          dispatch(assignFollowing(res));
        } else {
          dispatch(assignFollowing(null));
        }
      });
  };

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

export { actions, getUserData, userData, getCachedUserData, blankUser, followers, following };
