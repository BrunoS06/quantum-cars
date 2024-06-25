import './App.css';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()
  return (
    <div>   
      <div className="header">
          <img src="./src/components/pages/img/logo.jpeg"/> 
      </div>
      <button className='homeButton' onClick={() => navigate('/')}>Home</button>
      <Outlet />
    </div>
  )
}

export default App
