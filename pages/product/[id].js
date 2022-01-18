
import React, { useState } from 'react'
import Image from 'next/image';
import {GiFullPizza} from 'react-icons/gi'
const Product = ({pizza}) => {
    const pizza1 = pizza[0];
    const [size,setsize] = useState(0)
    const [price,setprice] = useState(pizza1.prices[0])
    const [extra , setextra] = useState([])
    const [qty , setqty] = useState(1)

    const changePrice = (number) =>{
       setprice(price+number)
    }
    const handleSize = (index) =>{
         const diff = pizza1.prices[index]-pizza1.prices[size];
         setsize(index)
         changePrice(diff);
    }
    const handleChange = (e,option) =>{
     const checked =  e.target.checked;
     if(checked){
         changePrice(option.price);
         setextra(prevopton => [...prevopton,option])
     }
     else{
        changePrice(-option.price)
        setextra(extra.filter(extra => extra !== option._id))
     }
    }
console.log(extra)
    return (
        <div>

        <div className='flex flex-col sm:flex-row justify-center items-center'>

        <div className=' w-full  sm:w-[40%] text-left sm:text-right sm:mr-10 ml-10 p-2'>
        <Image src={pizza1.img} width={300} height={300}/>
        </div>

        <div className='shadow-lg w-full sm:w-[50%] p-5 '>
        <h1 className='font-bold text-2xl m-2'>{pizza1.title}</h1>
        <span className='text-2xl font-semibold text-red-500 m-2'>${price}</span>
        <p className='text-gray-600 m-2'>{pizza1.desc}</p>

        <h3 className='font-bold text-md m-2'>Choose the Size </h3>
        <div>
        <button className='m-3 w-8'  onClick={()=>{handleSize(0)}}><GiFullPizza size='5 rem'/></button>
        <button className=' m-3 w-9' onClick={()=>{handleSize(1)}}><GiFullPizza size='5 rem'/></button>
        <button className=' m-3 w-10'  onClick={()=>{handleSize(2)}}><GiFullPizza size='5 rem'/></button>
        </div>

        <h3 className='font-bold text-md m-2'>Choose additional ingredients </h3>
        <div className=' flex'>
                    {
                        pizza1.extraOptions.map((option) =>{
                            return( <div key={option._id} className='flex   items-center mr-8 text-md'>
                             <input type='checkbox' name={option.text}className='w-[20px] h-[20px] m-2'
                            onChange={(e)=>{handleChange(e,option)}}
                             />
                             <label>{option.text}</label>
                            </div>)
                        } )
                    }
                </div>
        <div>
        <input type='text' className='outline-none border-2 border-black p-1 w-10 m-2' placeholder={qty}
        onChange={(e)=>{setqty(e.target.value)}}
        />
        <button className='bg-red-600 text-white font-semibold p-2 m-2 mt-7'>Add to Cart</button>
        </div>
        </div>
        </div>  
        </div>
       
    )
}
export default Product;

export const getServerSideProps = async({params}) =>{
  
    const res = await fetch(`http://localhost:3000/api/orders/products/${params.id}`);
    const data = await res.json()
  
 
  return{
    props:{
      pizza:data,
    }
  }
}

