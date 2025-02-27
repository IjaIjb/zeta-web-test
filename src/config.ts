import { createBrowserHistory } from "history";

const TYPE_REST = "REST";

export enum APILIST {
  LOGIN = "login",
  REGISTER = "register",
  HOSTELS = "hostels",
  GET_HOSTEL = "get-hostel",
  GET_ALL_HOSTEL = "get-all-hostel",
  GET_ALL_USERS = "get-all-users"
}

//CONFIG DATA (Please change here only)
const configs = {
  delay: 500,
  dashbordRefreshRate: 1,
  port: 8015,
  appName: "senhost",
  toastDelay: 5000,
  tokenStorage: "TOKEN_PERSIST",
//   socket: SOCKET_URL,
  type: TYPE_REST,



  context: "https://zetakreeweb-production.up.railway.app/v1",
 
  history: createBrowserHistory(),
  requestTimeOut: 30000,
  apiList: APILIST,
  tablePageSize: 10,
};
export default configs;
