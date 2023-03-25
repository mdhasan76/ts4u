import Card from '@/component/Card';
import DtailsModal from '@/component/DtailsModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {allProduct} = useSelector(s => s)
    const dispatch = useDispatch();

    //load Product
    useEffect(() =>{
        fetch("https://staging-be-ecom.techserve4u.com/api/product/getProducts")
        .then(res => res.json())
        .then(data => dispatch({type: "allData", payload: data.products}))
    }, [])

    return (
        <div>
            <h2 className='py-10 bg-gray-200 text-4xl font-bold text-center'>Next.js, Ant Design and Redux simple Practice project</h2>
            <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-16'>
        {
            allProduct?.map(d => <Card key={d._id} d={d} setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />)
        }
        <DtailsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
        </div>
    );
};

export default Product;