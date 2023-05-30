import React, { useReducer } from "react";
import Show from "../reduceContext/Show";
export const MyContext = React.createContext();
const is = { fn: "", sn: "", store: [] };
const reducer = (state, action) => {
    switch (action.type) {
        case "update":
            return { roll: action.payload.r, name: action.payload.nm };
        case "fn":
            return { ...state, fn: action.payload };
        case "sn":
            return { ...state, sn: action.payload };
        case "getValue":
            return { ...state, store: [...state.store, action.payload] };
        case "delete":
            return { ...state, store: action.payload };
        default:
            return state;
    }
};

const ReducerContext = () => {
    const [state, dispatch] = useReducer(reducer, is);

    //  input data
    const handleChange = (e) => {
        dispatch({ type: e.target.name, payload: e.target.value })
    }
    const handleAdd = () => {
        let data = {
            fn: state.fn,
            sn: state.sn,
        }
        dispatch({ type: "getValue", payload: data })
    }
    const records = {
        state: state,
        dispatch: dispatch,
    };
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Parrent component</h3>
                        <input type="number" name="fn" value={state.fn} onChange={handleChange} />
                        <input type="number" name="sn" value={state.sn} onChange={handleChange} />
                        <input type="button" value=" Add " onClick={handleAdd} />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <MyContext.Provider value={records}>
                <Show />
            </MyContext.Provider>
        </>
    );
};
export default ReducerContext;
