import { ICategoryList } from "../../types/shoppingAreaTypes";
import * as ACTIONS from "../actionConstants/categoryActions";
import { CategoryActionTypes } from "../actionTypes/categoryActionTypes";

const CategoryInitState: ICategoryList = {
  category: { id: 1, title: "All" },
  allCategories: [],
};

export function categoryReducer(
  state: ICategoryList = CategoryInitState,
  action: CategoryActionTypes
): ICategoryList {
  switch (action.type) {
    case ACTIONS.CHANGE_CATEGORY: {
      const newCategory = action.payload;
      return {
        ...state,
        category: newCategory,
      };
    }

    case ACTIONS.GET_ALL_CATEGORY: {
			console.log(action)
			return {
				...state,
				allCategories: action.payload
			}
    }
    default: {
      return state;
    }
  }
}
