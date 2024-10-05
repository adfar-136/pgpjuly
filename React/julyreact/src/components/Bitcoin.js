import React from 'react'

export default function Bitcoin({item}) {
  return (
    <div className='container'>
        <div>
               <h1>Symbol :{item.symbol}</h1>
               <h1>Name :{item.name}</h1>
               <h1>Rank :{item.rank}</h1>
               <h1>Price :{item.price_usd}</h1>
              
       </div>
    </div>
    
  )
}
