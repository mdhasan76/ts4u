import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const product = () => {
    const state = useSelector(s => s)
    const dispatch = useDispatch();

    //load Product
    useEffect(() =>{
        fetch("https://staging-be-ecom.techserve4u.com/api/product/getProducts")
        .then(res => res.json())
        .then(data => dispatch({type: "allData", payload: data.products}))
    }, [])

    console.log(state)
    return (
        <div>
            All Product
        </div>
    );
};

export default product;