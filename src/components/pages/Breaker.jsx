import {React, useState} from 'react'
import styles from './cars.module.css'
import { useNavigate } from 'react-router-dom'

const Breaker = () => {

  const navigate = useNavigate()

  const initialPrice = 0
  const [price, setPrice] = useState(initialPrice)


  const handleChange = (event) => {
    setPrice(event.target.value)
  }

  return (
    <div className={styles.buyBreaker}>
      
      <div className={styles.breakerBox}>

        <img className={styles.breaker} src="./src/components/pages/img/hatch.jpeg"/> 
        <h2>MOUNT YOUR BREAKER</h2>
        <select onChange={handleChange}>
          <option value={'0'}>Select your Engine and Transmission</option>
          <option value={'50.000'}>1.8 Aspirated Engine - Manual 5 Gears</option>
          <option value={'54.000'}> 1.8 Aspirated Engine - Automatic 6 Gears </option>
          <option value={'56.000'}> 1.5 Turbocharger - Manual 5 Gears </option>
          <option value={'60.000'}> 1.5 Turbocharger - Automatic 6 Gears </option>
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

export default Breaker
