import { useOutletContext } from 'react-router'  
import styles from './cart.module.css'
import CartCard from './Card.jsx'

export default function Cart() {
	const [ cart, setCart ] = useOutletContext().context;

	const cartItems = cart.map(item => 
		<CartCard key={item.item.id} cartItem={item.item} itemCount={item.count} />
	)

	const total = cart.reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.count, 0)
	return (
		<main className={styles.cartPage}>
			{cart.length <= 0 ? (
				<p>Cart is empty!</p>
			) : (
					cartItems
				)}
			{ cart.length > 0 && (
			<div className={styles.cartTotal}>
				<p>{`Total: $${total.toFixed(2)}`}</p>
			</div>
			)}
		</main>
	)
}
