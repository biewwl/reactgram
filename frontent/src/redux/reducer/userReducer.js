import lS from "manager-local-storage";
import config from "../../app_config.json";

const appName = config["app.name"];
const savedToken = lS.get(`${appName}-login-token`);

const initialState = {
  token: savedToken ?? "",
};

export const LOGIN = "LOGIN";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
