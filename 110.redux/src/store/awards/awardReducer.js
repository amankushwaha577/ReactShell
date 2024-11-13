import { ACTION1 } from "./awardAction";

const initialState = {
  data1: "data 1",
  data2: "data 2",
  data3: "data 3",
};
const awardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION1:
      return {
        ...state,
        data1: action.payload,
      };
    case ACTION1:
      return {
        ...state,
        data1: "Data 2 Changed",
      };
    default:
      return state;
  }
};
export default awardReducer;
