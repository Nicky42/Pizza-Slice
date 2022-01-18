import React from 'react'
import PizzaCard from './PizzaCard'

const PizzaList = ({pizzaList}) => {
    return (
        <>
            <div className='border-4 px-6 py-3 flex flex-col items-center '>
                <h1 className='text-center text-lg sm:text-2xl font-bold m-1'>The Best Pizza In Town</h1>
                <p className='w-[90%] sm:w-[70%] text-center text-sm sm:text-lg text-[#444] m-1'>
                    Consectetur anim cillum nulla veniam minim ad aliqua deserunt. Ad laborum voluptate adipisicing dolor Lorem pariatur labore laboris laboris voluptate sunt ipsum. 
                </p>
               <div className='flex justify-center items-center w-screen flex-wrap'>
               {
                   pizzaList.map((pizza)=>{
                      return <PizzaCard pizza={pizza} key={pizza._id}/>
                   })
               }
                  
               </div>
            </div>
        </>
    )
}

export default PizzaList
