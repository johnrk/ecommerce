import { ActionType } from "../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  // You can use {type,payload} insted of action
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export const selectedReducer = (state={},action)=>{
  switch (action.type) {
    case ActionType.SELECTED_PRODUCTS:
      return {...state, ...action.payload}
    case ActionType.REMOVE_SELECTED_PRODUCTS:
      return {}
    default:
      return state;
  }
}