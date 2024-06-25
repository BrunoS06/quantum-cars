import {React, useState} from 'react'
import styles from './cars.module.css'
import { useNavigate } from 'react-router-dom'

const Elegance = () => {

  const navigate = useNavigate()

  const initialPrice = 0
  const [price, setPrice] = useState(initialPrice)


  const handleChange = (event) => {
    setPrice(event.target.value)
  }

  return (
    <div className={styles.buyBreaker}>
      
      <div className={styles.breakerBox}>

        <img className={styles.breaker} src="./src/components/img/sedan.jpeg"/> 
        <h2>MOUNT YOUR ELEGANCE</h2>
        <select onChange={handleChange}>
          <option value={'0'}>Select your Engine and Transmission</option>
          <option value={'80.000'}>2.4 Aspirated Engine - Manual 5 Gears</option>
          <option value={'85.000'}> 2.4 Aspirated Engine - Automatic CVT </option>
          <option value={'95.000'}> 2.0 Turbocharger - Manual 5 Gears </option>
          <option value={'100.000'}> 2.0 Turbocharger - Automatic CVT </option>
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

export default Elegance