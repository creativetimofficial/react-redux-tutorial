import { createStore } from "redux";
import rootReducer from "reducers/rootReducer";
// we need to pass the initial state with the new look
function configureStore(state = { bgState: {bgColor: "black"}, activeState: {activeColor: "info"} }) {
  return createStore(rootReducer,state);
}
export default configureStore;
