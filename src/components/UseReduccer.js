import { useReducer } from "react";
const is = { fn: "", sn: "", res: "" };

const reducer = (state, action) => {
    console.log("state : ", state);
    console.log("action : ", action);
    console.log("---------------------------");
    switch (action.type) {
        case "fn": return { ...state, fn: action.payload };
        case "sn": return { ...state, sn: action.payload };
        case "res": return { ...state, res: action.payload };
        default: return state;
    }
}

const UseReduccer = () => {
    const [state, dispatch] = useReducer(reducer, is);
    const handleChange = (e) => {
        dispatch({ type: e.target.name, payload: e.target.value });
    }

    const handleAdd = () => {
        const c = +state.fn + (+state.sn);
        dispatch({ type: 'res', payload: c });
    }
    return (
        <>
            <h1>App Component 3.2</h1>
            First number : <input type="text" value={state.fn} name="fn" onChange={handleChange} /><br />
            Second number : <input type="text" value={state.sn} name="sn" onChange={handleChange} /><br />
            Result : <input type="text" value={state.res} readOnly /> <br />
            <input type="button" value="add" onClick={handleAdd} />
        </>
    );
}
export default UseReduccer;