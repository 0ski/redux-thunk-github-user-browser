const USER_DATA = 'USER_DATA_OBTAINED';
const USER_NAME = 'USER_NAME_CHANGED';

const userData = data => ({
  type: USER_DATA,
  user: data,
});

const userName = name => ({
  type: USER_NAME,
  user: name,
});

const getUserData = () =>
  dispatch => {
    fetch('https://api.github.com/users/0ski')
      .then(res => res.json())
      .then(res =>
        dispatch(
          userData(res)
        )
      );
  };

// const changeUserName = () =>
//   dispatch =>
//     name => dispatch(userName(name));

const changeUserName = userName;

export { USER_DATA, USER_NAME, getUserData, changeUserName };
