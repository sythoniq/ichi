import { useOutletContext } from 'react-router'  
import styles from './cart.module.css'
import CartCard from './Card.jsx'

export default function Cart() {
	const [ cart, setCart ] = useOutletContext().context;

	const cartItems = cart.map(item => 
		<CartCard key={item.item.id} cartItem={item.item} itemCount={item.count} />
	)

	return (
		<main className={styles.cartPage}>
			{cart.length <= 0 ? (
				<p>Cart is empty!</p>
			) : (
					cartItems
				)}
		</main>
	)
}
