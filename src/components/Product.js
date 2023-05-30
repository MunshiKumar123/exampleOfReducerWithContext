import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { increment, getUser, formUser, formDataPost, getDataProduct, deleteProduct } from "../redux/Action/ProductAction"

function Product() {

    const dispatch = useDispatch();
    let productData = useSelector((state) => state.ProductReducer)

    console.log("productData-", productData);

    const handleAdd = () => {
        dispatch(increment())
    }
    useEffect(() => {
        dispatch(getUser())
    }, [])

    const dataSubmit = () => {
        let data = {
            fn: productData.fn,
            em: productData.em,
        }
        dispatch(formDataPost({ data }))
    }

    const handleDelete = (ind) => {
        const index = productData.dataProduct.filter((item, indx) => ind !== indx)
        dispatch(deleteProduct({ index }))
        console.log("indexDelete", index);

    }

    const price = productData?.dataProduct.reduce((a, b) => {
        return a + b.price
    }, 0)


    const divRef = useRef(null);

    const handleClick = () => {
        const divContent = divRef.current.innerHTML;
        console.log(divContent);
    };


    return (
        <React.Fragment>


            <div ref={divRef}>
                <p>This is some content</p>
                <p>This is some more content</p>
                <button onClick={handleClick}>Get Div Content</button>
            </div>


            <h1>Product components</h1>
            <span>Inc {productData.count} </span><hr />

            <button onClick={handleAdd}> Add </button>
            <hr />
            <input type='text' className='mb-1'
                onChange={e => dispatch(formUser({ prop: "fn", value: e.target.value }))} /><br />
            <input type='email' className='mb-1'
                onChange={e => dispatch(formUser({ prop: "em", value: e.target.value }))} /><br />
            <input type='button' value=" Submit " onClick={dataSubmit} />
            <hr />

            <div className='row'>
                <div className='col-6'> <p>item {productData?.dataProduct.length}</p>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>category</th>
                                <th>description</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData?.products.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.category}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td><button className='btn btn-primary btn-sm' onClick={() => dispatch(getDataProduct({ item }))}> Add </button></td>
                                </tr>
                            ))}


                        </tbody>
                    </table></div>
                <div className='col-6'>
                    <span>{price}</span>
                    {productData?.dataProduct.length > 0 &&

                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>category</th>
                                    <th>description</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productData?.dataProduct.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.category}</td>
                                        <td>{item.description}</td>
                                        <td>{item.price}</td>
                                        <td><button onClick={(e) => handleDelete(index)}> Delete </button></td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>}
                </div>
            </div>


        </React.Fragment>
    )
}

export default Product
