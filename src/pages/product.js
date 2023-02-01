import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import defaultImg from '../assets/img/default.jpg'

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
            allProduct?.map(d => <div key={d._id} className="border-2">
                <div className='[&_div]:hover:top-0 [&_div]:hover:visible relative' to="">
                   {
                    d?.thumbnail?.length > 20 ?  <img alt="product" src={d?.thumbnail} className="h-72 w-full" /> : <img alt="fruit" src="https://images.unsplash.com/photo-1626218174358-7769486c4b79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGMlMjBnYW1pbmd8ZW58MHx8MHx8&w=1000&q=80" className="h-72 w-full" /> 
                   }
                    <div className='flex justify-between px-3 text-xl'>
                        <h3 className='text-center font-medium  py-3'>{d.name}</h3>
                        <h3 className='text-center font-medium py-3'>${d.price} kg</h3>
                    </div>
                    <div className='absolute duration-300 top-full w-full h-full bg-slate-700 opacity-60 grid place-content-center  invisible'>
                        <div>
                            <button className='border-2 mr-2 border-white px-3 py-2 text-white'>Details</button>
                        </div>
                    </div>
                </div>
            </div>)
        }

    </div>
    );
};

export default product;