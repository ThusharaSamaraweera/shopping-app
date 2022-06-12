import { ChangeCategory, getAllCategoriesActionType } from "../actionTypes/categoryActionTypes";
import * as ACTIONS from "../actionConstants/categoryActions";
import { ICategory } from "../../types/shoppingAreaTypes";

export function changeCategory(category: ICategory): ChangeCategory{
  return{
      type: ACTIONS.CHANGE_CATEGORY,
      payload: category
  }
}

export function getAllCategories(categories: ICategory[]): getAllCategoriesActionType {
  return {
    type: ACTIONS.GET_ALL_CATEGORY,
    payload: categories
  }
}