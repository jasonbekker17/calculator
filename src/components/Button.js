import React from 'react'


export default function Button({symbol,color ,handleClick}) {
  return (
    <div onClick={()=> handleClick(symbol)} style={{backgroundColor:color}}
     className=' flex content-center border-black
      bg-neutral-700 
      rounded-full h-8 w-8
       items-center'>
            <h1 className=' text-white p-2' >{symbol}</h1>
    </div>
    
    
  
  )
}
