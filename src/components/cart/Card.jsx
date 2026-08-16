import styles from './card.module.css'
import { useOutletContext } from 'react-router'

export default function CartCard(props) {
	const [ cart, setCart ] = useOutletContext().context;

	function handleRemove(e) {
		const cartItem = cart.findIndex(i => i.item.id == props.cartItem.id )
		cart.splice(cartItem, 1)
		setCart([...cart]);
	}

	return (
		<div id={props.cartItem.id} className={styles.cartCard}>
			<div className={styles.itemImage}>
				<img src={props.cartItem.image} alt={props.cartItem.title}/>
			</div>
			<div className={styles.itemDetails}>
				<h4>{props.cartItem.title}</h4>
				<p>{`Price: $${props.cartItem.price * props.itemCount}`}</p>
				<button onClick={handleRemove}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M18,19C18,20.66 16.66,22 15,22H8C6.34,22 5,20.66 5,19V7H4V4H8.5L9.5,3H13.5L14.5,4H19V7H18V19M6,7V19C6,20.1 6.9,21 8,21H15C16.1,21 17,20.1 17,19V7H6M18,6V5H14L13,4H10L9,5H5V6H18M8,9H9V19H8V9M14,9H15V19H14V9Z" /></svg>
				</button>
			</div>
		</div>
	)
}
