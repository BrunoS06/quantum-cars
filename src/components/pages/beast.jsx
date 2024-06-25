import {React, useState} from 'react'
import styles from './cars.module.css'
import { useNavigate } from 'react-router-dom'

const Beast = () => {

  const navigate = useNavigate()

  const initialPrice = 0
  const [price, setPrice] = useState(initialPrice)


  const handleChange = (event) => {
    setPrice(event.target.value)
  }

  return (
    <div className={styles.buyBreaker}>
      
      <div className={styles.breakerBox}>

        <img className={styles.breaker} src="./src/components/img/suv.jpeg"/> 
        <h2>MOUNT YOUR BEAST</h2>
        <select onChange={handleChange}>
          <option value={'0'}>Select your Engine and Transmission</option>
          <option value={'90.000'}>2.0 Aspirated Engine 4x2 - Manual 5 Gears</option>
          <option value={'95.000'}> 2.0 Aspirated Engine 4x2 - Automatic 6 Gears </option>
          <option value={'100.000'}> 2.0 Aspirated Engine 4x4 - Automatic 6 Gears </option>
          <option value={'110.000'}> 2.4 Turbodiesel 4x4 - Manual 5 Gears </option>
          <option value={'120.000'}> 2.4 Turbodiesel 4x4 - Automatic 6 Gears </option>
       </select>
      <div/>
         <div className={styles.priceTitle}>
            <h2>Price:</h2>
            <div className={styles.price}> $ {price} 

            </div>  
 
          
            <button onClick={() => navigate('/end')}>BUY</button>
            
            
          </div>
          
        
      </div>
  
    </div>
  )
  
}

export default Beast