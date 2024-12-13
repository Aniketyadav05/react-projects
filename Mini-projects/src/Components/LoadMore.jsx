import React, { useState, useEffect } from 'react'

const LoadMore = () => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [disableButton, setDisableButton] = useState(false)
    async function fetchProducts() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
            const result = await response.json()
            
            if(result && result.products && result.products.length){
                setProducts((prevData)=>[...prevData, ...result.products])
                setLoading(false)
                
                
            }


            
        } catch (e) {
            console.log(e);
            setLoading(false)

        }

    }
    useEffect(() => {
      fetchProducts()
    }, [count])

    useEffect(() => {
     if(products && products.length === 100 ) setDisableButton(true)
    }, [products])
    
    
    if(loading){
        return <h1 className='bg-red-500'>Loading data please wait</h1>
    }
    return (
        <div className='flex-col gap-[20px]'>
            <div className='grid grid-cols-4 gap-3'>
            {
                products && products.length 
                ? products.map((item)=>(
                    <div className='p-5 border-4 flex flex-col gap-3' key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p className='font-extrabold'>{item.title}</p>
                    </div>
                ))
            :null}
            
            </div>
            <div className='flex items-center justify-center'>
                <button disabled={disableButton} onClick={()=> setCount(count+1)} className='btn'>Load More Products</button>
            </div>
            {
                disableButton? <h1 className='bg-slate-500'>ALL PRODUCTS ARE LOADED</h1> : null
            }
            </div>
    )
}

export default LoadMore