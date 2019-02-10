import { LoginActions, LoginActionType, Login } from './login.action';
import { LoginState, initialLoginState } from './login.state';

export function LoginReducer(
  state = initialLoginState,
  action: LoginActions
): LoginState {
  console.log('State in Reducer : ', state);
  console.log(action);
  switch (action.type) {
    case LoginActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.loginData.TokenData,
        user: {
          id: action.payload.loginData.Id,
          username: action.payload.loginData.FirstName,
          password: '',
          role: action.payload.loginData.UserRoleId,
          token: action.payload.loginData.TokenData
        },
        useraccess: action.payload.routes,
        errorMessage: action.payload.loginData.SuccessMessage
      };
    case LoginActionType.LOGIN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      };
    case LoginActionType.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errorMessage: null,
        token: null,
        useraccess: null
      };
    default:
      return state;
  }
}

/* export const getUserState = createFeatureSelector<LoginState>("user");

export const getToken = createSelector(
    getUserState,
  (state: LoginState) => {
      //state.token
      console.log(state)
    }
);
 */
