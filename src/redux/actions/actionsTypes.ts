export interface ActionTypesInterface {
    LOAD_PRODUCTS: string,
    FAILED_LOAD_PRODUCTS: string,
    ADD_TO_USER: string,
    FAILED_ADD_TO_USER: string,
    DELETE_USER_PRODUCT: string,
    FAILED_DELETE_USER_PRODUCT: string,
    INCREASE_NUMBER_OF_PRODUCTS: string,
    FAILED_INCREASE_NUMBER_OF_PRODUCTS: string,
    DECREASE_NUMBER_OF_PRODUCTS: string,
    FAILED_DECREASE_NUMBER_OF_PRODUCTS: string, 
    LOAD_USER: string, 
    FAILED_LOAD_USER: string,
    ADD_USER: string,
    FAILED_ADD_USER: string,
    BUY: string,
    FAILED_BUY: string
}

const  productsAndCartActionTypes : ActionTypesInterface = {
    LOAD_PRODUCTS: 'LOAD_PRODUCTS',
    FAILED_LOAD_PRODUCTS: 'FAILED_LOAD_PRODUCTS',
    ADD_TO_USER: 'ADD_TO_USER',
    FAILED_ADD_TO_USER: 'FAILED_ADD_TO_USER',
    DELETE_USER_PRODUCT: 'DELETE_USER_PRODUCT',
    FAILED_DELETE_USER_PRODUCT: 'FAILED_DELETE_USER_PRODUCT',
    INCREASE_NUMBER_OF_PRODUCTS: 'INCREASE_NUMBER_OF_PRODUCTS', 
    FAILED_INCREASE_NUMBER_OF_PRODUCTS: 'FAILED_INCREASE_NUMBER_OF_PRODUCTS',
    DECREASE_NUMBER_OF_PRODUCTS: 'DECREASE_NUMBER_OF_PRODUCTS',
    FAILED_DECREASE_NUMBER_OF_PRODUCTS: 'FAILED_DECREASE_NUMBER_OF_PRODUCTS',
    LOAD_USER: 'LOAD_USER',
    FAILED_LOAD_USER: 'FAILED_LOAD_USER',
    ADD_USER: 'ADD_USER',
    FAILED_ADD_USER: 'ADD_USER',
    BUY: 'BUY',
    FAILED_BUY: 'FAILED_BUY'
}

export default productsAndCartActionTypes