import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/login'
import SignUp from '../pages/SignUp'
// import { AuthRoute } from './AuthRoute'

const AppRouter = () => {
    return (
        <>

            <BrowserRouter>
                {/* <Header /> */}
                <Routes>

                    <Route path='/' element={<Login />} />

                    <Route path='/sign' element={<SignUp />} />

                    {/* <Route path='/sign' element={<AuthRoute><SignUp /></AuthRoute>} /> */}

                    {/* cart */}



                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;
