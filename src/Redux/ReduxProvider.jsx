/* eslint-disable react/prop-types */
import { Provider } from "react-redux";
import store from "./store";

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ReduxProvider;