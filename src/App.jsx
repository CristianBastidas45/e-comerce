import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import ProducIdPage from './pages/ProducIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HeaderNav from './components/shared/HeaderNav';
import CartPage from './pages/CartPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import PurchasesPage from './pages/PurchasesPage';
import CardLogeado from './components/shared/CardLogeado';

function App() {
  return (
    <div>
      <HeaderNav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProducIdPage />} />
        <Route path='/register' element={< RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route element={<ProtectedRoutes />} >
          <Route path='/cart' element={<CartPage />} />
          <Route path='/purchases' element={<PurchasesPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
