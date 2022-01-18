import Image from 'next/image'
import Link from 'next/link'

const PizzaCard = ({pizza}) => {
    return (
        <>
            <div className='flex flex-col items-center justify-center cursor-pointer shadow-xl border-2 w-[100%] sm:w-[22%] py-6 px-3 hover:scale-105 m-2'>
           
            <Link href={`/product/${pizza._id}`} passHref>
            <Image src={pizza.img} alt="" width="500" height="500"/>
            </Link>
           
          
                <h1 className='text-2xl sm:text-lg font-bold text-[#d1411e]'>{pizza.title}</h1>
                <span className='text-xl sm:text-lg font-bold text-[#666]'>${pizza.prices[0]}</span>
                <p className='text-xl sm:text-md text-center text-[#777]'> {pizza.desc}</p>
            </div>
        </>
    )
}

export default PizzaCard
