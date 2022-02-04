import { ChangeCategory } from "../actionTypes/categoryActionTypes";
import * as ACTIONS from "../actionConstants/categoryActions";
import { ICategory } from "../../types/shoppingAreaTypes";

export function changeCategory(category: ICategory): ChangeCategory{
  return{
      type: ACTIONS.CHANGE_CATEGORY,
      payload: category
  }
}