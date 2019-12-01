import { rentalReducer, selectedRentalReducer } from "./rental-reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

export const init = () => {
  const reducer = combineReducers({
    rentals: rentalReducer,
    rental: selectedRentalReducer
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  // store
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

  return store;
};
