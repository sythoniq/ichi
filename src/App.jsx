import { Outlet } from 'react-router'
import { useState } from 'react'
import './app.css'
import Header from './components/header/Header.jsx'
import Shop from './components/shop/Shop.jsx'

export default function App() {
	const [ cart, setCart ] = useState([])

	return (
		<>
			<Header items={cart.length} />
			<Outlet context={{context: [cart, setCart]}}/>
		</>
	)
}
