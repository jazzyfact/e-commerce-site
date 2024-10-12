// App.tsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './page/Home'
import CartPage from './page/CartPage'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
