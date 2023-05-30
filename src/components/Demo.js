import React, { useState } from 'react'
import * as Constant from "./Cons"
import { One, Two } from "./screens";
import monthData from "./data.json"

function Demo() {

    const [data, setData] = useState({});
    const [storeData, setStoreData] = useState([]);


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const hansleAdd = () => {
        let count = 0;
        const rcds = storeData?.find((item) => {
            if (item.email === data.email) {
                return count = count + 1;
            }

            return item;
        })

        if (count === 0) {
            let rcd = {
                name: data.name,
                username: data.username,
                email: data.email,
                id: Math.random(),
            }
            setStoreData([...storeData, rcd]);
            setData({ name: "", username: "", email: "" })
        } else {
            alert("alraedy user exit")
        }
    }

    // delete
    const handleDelete = (id) => {
        const rcds = storeData.filter((item, index) => id !== item.id);
        setStoreData(rcds)
    }

    //  edit
    const handleEdit = (id) => {
        const rcds = storeData.find((item) => id === item.id);
        setData(rcds);
    }
    const update = () => {
        setStoreData(
            storeData.map((e) => {
                if (e.id === data.id) {
                    return {
                        ...e,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                    }
                } else {
                    return e
                }
            })
        )
        setData({ name: "", username: "", email: "" })
    }
    const [mdata, setMdata] = useState();


    console.log("mdata--", mdata)

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>

                        <select onChange={(e) => setMdata(e.target.value)}>
                            {monthData?.map((item, index) => (
                                <option value={item?.id} key={index}> {item?.monthName}</option>
                            ))}
                        </select>
                        <One />
                        <Two />
                        {Constant.firstDemo()}
                        {Constant.firstDemo1()}
                        <input type='text' name='name' value={data.name} className='form-control mb-1' onChange={handleChange} />
                        <input type='text' name='username' value={data.username} className='form-control mb-1' onChange={handleChange} />
                        <input type='email' name='email' value={data.email} className='form-control mb-1' onChange={handleChange} />
                        <button className='btn btn-primary btn-sm' onClick={data.id === undefined ? hansleAdd : update}>{data.id === undefined ? "Save" : "Edit"}  </button>
                    </div>
                    <div className='col-8'>
                        {storeData.length > 0 &&
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>sq.no</th>
                                        <th>name</th>
                                        <th>userName</th>
                                        <th>email</th>
                                        <th>edit</th>
                                        <th>delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {storeData?.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td><button className='btn btn-primary btn-sm' onClick={() => handleEdit(item.id)}> edit </button></td>
                                            <td><button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}> delete </button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>}

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Demo
