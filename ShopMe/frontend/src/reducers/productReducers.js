const {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} = require('../constants/productConstants');

export const productListReducer = (state = { products : [] }, action) => { //sets default state, show products in empty array
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true};
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
            default:
                return state;
    }
};