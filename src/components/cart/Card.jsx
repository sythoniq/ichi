import styles from './card.module.css'
import { useOutletContext } from 'react-router'

export default function CartCard(props) {
	const [ cart, setCart ] = useOutletContext().context;

	function handleRemove(e) {
		// TODO
	}

	return (
		<div className={styles.cartCard}>
			<div className={styles.itemImage}>
				<img src={props.cartItem.image} alt={props.cartItem.title}/>
			</div>
			<div className={styles.itemDetails}>
				<h4>{props.cartItem.title}</h4>
				<p>{`Price: ${props.cartItem.price * props.itemCount}`}</p>
				<button onClick={handleRemove}>Remove</button>
			</div>
		</div>
	)
}
