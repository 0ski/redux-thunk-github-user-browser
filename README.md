Using `create-react-app` create a React app with `Redux` and `redux-thunk`. Use `eslint` and `airbnb` preset, the app should have no linting errors.

The app should render an `<input />` that accepts any valid nickname.

The following requirements **must** be implemented:
- on input change, make an API request to the Github API and get details of the user,
- store results in a Redux store
- do not make an API request if results are already in store

The following requirements **should** for implementing:
- do not fire requests as long as user is typing. Typically you should throttle requests so that when user types quickly, we fire one request with the latest input value instead of many.

You can use the following URL `https://api.github.com/users/${username}` to `GET` `json` with a response you want.

Please render `name`, `company`, `email` and `gravatar_id` (`<img />`). Also, render `followers` and `following`.
