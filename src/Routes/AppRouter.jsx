import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/login'
import SignUp from '../pages/SignUp'
import DashBoard from '../pages/DashBoard'
import ProductPage from '../pages/ProductPage'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
// import { AuthRoute } from './AuthRoute'

const AppRouter = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>

                    <Route path='/' element={<DashBoard />} />
                    <Route path='product/:id' element={<ProductPage />} />
                    <Route path='/login' element={<Login />} />
                    {/* <Route path='/login' element={<AuthRoute><Login /></AuthRoute>} /> */}

                    <Route path='/sign' element={<SignUp />} />

                    {/* <Route path='/sign' element={<AuthRoute><SignUp /></AuthRoute>} /> */}

                    {/* cart */}
                    <Route path='/cart/' element={<Cart />} />;
                    <Route path='wishlist/' element={<Wishlist />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
