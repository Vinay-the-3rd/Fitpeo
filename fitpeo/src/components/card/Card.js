import React from 'react'
import Dollar from '../../assets/images/dollar.png';
import Doc from '../../assets/images/doc.png';
import Balance from '../../assets/images/balance.png';
import Sale from '../../assets/images/sale.png';

import './Card.css';

const Card = () => {
  const list = [
    {
      text: 'Earning',
      Icon: Dollar,
      amount: '$198K',
      profit: '↑ 37.8%'
    },
    {
      text: 'Orders',
      Icon: Doc,
      amount: '$2.4K',
      profit: '↓ 2%'
    },
    {
      text: 'Balance',
      Icon: Balance,
      amount: '$2.4K',
      profit: '↓ 2%'
    },
    {
      text: 'Total Sales',
      Icon: Sale,
      amount: '$89K',
      profit: '↑ 11%'
    },
    
  ]
  return (
    <div className='card-box'>

      {list.map(({text, Icon, amount, profit})=>{
        return(
        <div className='card' key={text}>
          <img src={Icon} alt='dollar'/>
          <div className='card-content'>
            <h4>{text}</h4>
            <h2>{amount}</h2>
            <h5><span style={{color:`${profit[0] === '↑' ? '#1dac50': 'red'}`}}>{profit}</span> this month</h5>
          </div>
        </div>
        )
      })}
     
    </div>
  )
}

export default Card