import * as ACTIONS from "../actionConstants/categoryActions";
import {ICategory} from '../../types/shoppingAreaTypes';

export interface ChangeCategory {
  type: typeof ACTIONS.CHANGE_CATEGORY
  payload : ICategory
}

export interface getAllCategoriesActionType {
  type: typeof ACTIONS.GET_ALL_CATEGORY
  payload: ICategory[]
}

export type CategoryActionTypes = ChangeCategory | getAllCategoriesActionType;