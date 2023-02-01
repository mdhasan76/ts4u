import Card from '@/component/Card';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const product = () => {
    const {allProduct} = useSelector(s => s)
    const dispatch = useDispatch();

    //load Product
    useEffect(() =>{
        fetch("https://staging-be-ecom.techserve4u.com/api/product/getProducts")
        .then(res => res.json())
        .then(data => dispatch({type: "allData", payload: data.products}))
    }, [])

    console.log(allProduct)
    return (
        <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16'>
        {
            allProduct?.map(d => <Card key={d._id} d={d} />)
        }

    </div>
    );
};

export default product;