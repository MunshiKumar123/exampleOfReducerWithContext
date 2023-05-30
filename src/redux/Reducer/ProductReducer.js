

const INITIAL_STATE = {
    count: 0,
    fn: "",
    em: "",
    userStore: [],
    dataProduct: [],
    products: [],
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_USERS":
            return {
                ...state, products: action.payload,
            }

        case "Add":
            return {
                ...state, count: state.count + 1
            }

        case "USER_DETAILS":
            return {
                ...state, [action.payload.prop]: action.payload.value
            }

        case "USER_DATA":
            return {
                ...state,
                userStore: [
                    ...state.userStore, action.payload]
            }

        case "GET_PRODUCT_DATA":
            return {
                ...state,
                dataProduct: [
                    ...state.dataProduct, action.payload]
            }

        case "DELETE_PRODUCT_DATA":
            return {
                ...state,
                dataProduct: action.payload
            }

        default:
            return state
    }

}
