import Card from '@/component/Card';
import DtailsModal from '@/component/DtailsModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const product = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            allProduct?.map(d => <Card key={d._id} d={d} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />)
        }
        <DtailsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
    );
};

export default product;