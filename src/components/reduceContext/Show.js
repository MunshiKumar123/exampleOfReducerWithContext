import React from "react";
import { MyContext } from "./ReducerContext";
import { useContext } from "react";
const Show = () => {
    const records = useContext(MyContext);
    const { state, dispatch } = records;

    const handleDelte = (id) => {
        let del = state.store.filter((item, index) => id !== index)
        dispatch({ type: "delete", payload: del })
    }
    return (
        <>
            <h2>From Show Component</h2>

            <table className="table">
                <tbody>
                    {state?.store?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.fn}</td>
                            <td>{item.sn}</td>
                            <td><button className="btn btn-primary btn-sm" onClick={() => handleDelte(index)}>delete</button></td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </>
    );
};
export default Show;
