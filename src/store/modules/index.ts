import { combineReducers } from "redux";
import counter, {CounterState} from "./counter";

export default combineReducers({
  counter,
});

export interface StoreState {
  counter: CounterState,
}
