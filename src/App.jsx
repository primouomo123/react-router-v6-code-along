import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import ErrorPage from './pages/ErrorPage'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='*' element={<ErrorPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile/:id' element={<UserProfile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
