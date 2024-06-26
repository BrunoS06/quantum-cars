import React from 'react'
import styles from './home.module.css'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="app">
      <div className={styles.home}>
      <h1>CHOOSE YOUR QUANTUM</h1>
      <div className={styles.cars}>

        <div className={styles.carBox}>
          <img className={styles.hatch} src="../src/components/img/hatch.jpeg"/>
          <h2>QUANTUM BREAKER</h2>
          <h3>FROM $50.000,00 to $60.000,00</h3>
          <button onClick={() => navigate('breaker')}>BUY</button>
        </div>

        <div className={styles.carBox}>
          <img className={styles.sedan} src="./src/components/img/sedan.jpeg"/>
          <h2>QUANTUM ELEGANCE</h2> 
          <h3>FROM $80.000,00 to $100.000,00</h3>
          <button onClick={() => navigate('elegance')}>BUY</button>
        </div>

        <div className={styles.carBox}>
        <img className={styles.suv} src="./src/components/img/suv.jpeg"/>
        <h2>QUANTUM BEAST</h2> 
        <h3> FROM $90.000,00 to 120.000,00</h3> 
        <button onClick={() => navigate('beast')}>BUY</button>

        </div> 

      </div>
      
    </div>
    </div>
    
  )
}

export default Home
