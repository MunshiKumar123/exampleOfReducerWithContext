import axios from "axios"

export const getUser = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            dispatch({ type: "FETCH_USERS", payload: response.data })
        }
        catch (err) {
            console.log(err);
        }
    }
}
export const increment = () => {
    return { type: 'Add' }
}

export const formUser = ({ prop, value }) => {
    return {
        type: "USER_DETAILS",
        payload: { prop, value },
    };
};

export const formDataPost = ({ data }) => {

    return {
        type: "USER_DATA",
        payload: data,
    };
};

export const getDataProduct = ({ item }) => {



    return {
        type: "GET_PRODUCT_DATA",
        payload: item,
    };
};

export const deleteProduct = ({ index }) => {

    console.log("ActionIndex", index);
    return {
        type: "DELETE_PRODUCT_DATA",
        payload: index,
    };
};
