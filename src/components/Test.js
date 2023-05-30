import React, { useCallback, useEffect, useState } from 'react'

function Test() {
    const [data, setData] = useState(10)
    const [data1, setData1] = useState(0)



    // const handleClick = useCallback(() => {
    //     setData(data + 10)
    //     console.log("data", data)
    // }, [data])

    // const handleClick1 = useCallback(() => {
    //     setData1(data1 + 1)
    //     console.log("data1", data1)

    // }, [data1])

    const handleClick = () => {
        setData(data + 10);
    }

    useEffect(() => {
    }, [data])

    const handleClick1 = () => { }



    return (
        <>
            <h1>Test Components {data} =  {data1}</h1>

            <button onClick={handleClick}> + </button>
            <hr />
            <button onClick={handleClick1}> - </button>

        </>
    )
}

export default Test;
