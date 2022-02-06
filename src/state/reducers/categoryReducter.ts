import {ICategoryList} from  '../../types/shoppingAreaTypes';
import * as ACTIONS from '../actionConstants/categoryActions';
import { CategoryActionTypes } from '../actionTypes/categoryActionTypes';

const CategoryInitState : ICategoryList = {
  category: {id: 1, title: 'All'}
}

export function categoryReducer(state: ICategoryList = CategoryInitState, action: CategoryActionTypes)
 : ICategoryList {
  switch(action.type){
    case ACTIONS.CHANGE_CATEGORY: {
        const newCategory = action.payload;
        return {
            ...state,
            category: newCategory
        };
    }

    default: {
        return state;
    }
}
 }