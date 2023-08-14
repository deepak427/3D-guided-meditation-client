import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ThreeDModel from './components/ThreeDModels/ThreeDModel'

const All_routes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Meditate" element={<ThreeDModel/>} />
    </Routes>
  )
}

export default All_routes
