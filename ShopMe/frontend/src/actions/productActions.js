import { PRODUCT_LIST_REQUEST } from "../constants/productConstants"

import {PRODUCT_LIST_REQUEST} from "../constants/productConstants"

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
}