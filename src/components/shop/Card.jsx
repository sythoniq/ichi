import { Link } from 'react-router'
import styles from './card.module.css'
export default function Card(props) {
	return (
		<div className={styles.itemCard}>
			<Link to={`/products/${props.itemId}`}>
				<h3>{props.itemName}</h3>
				<div className={styles.itemImg}>
					<img src={props.itemImg} alt={props.itemName} />
				</div>
			</Link>
		</div>
	)
}
