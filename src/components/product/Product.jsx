import { useState, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router'
import styles from './product.module.css'

export default function Product() {
	const { context } = useOutletContext()
	const productId = Number(useParams().productId);
	const URL = `https://fakestoreapi.com/products/${productId}`
	const [ item, setItem ] = useState()
	const [ isLoading, setIsLoading ] = useState(true)
	const [ isError, setIsError ] = useState(null)
	const [ count, setCount ] = useState(0)
	const [ cart, setCart ] = context;

	useEffect(() => {
		async function getProduct() {
			const res = await fetch(URL);
			if (!res.ok) {
				setIsLoading(false)
				setIsError("Network Error")	
				return;
			}
			const data = await res.json()
			if (!data) {
				setIsLoading(false)
				setIsError("Failed to fetch data")
				return
			}
			
			setItem(data)
			setIsLoading(false)
			return;
		}

		getProduct()
	}, [])

	function handleCart(e) {
		e.preventDefault()
		if (count <= 0 || !count) {
			return;
		}
		const cartItem = {item, count}	
		if (cart.some((cI) => cI.item.id == item.id)) {
			const oldItem = cart.find((cI) => cI.item.id == item.id)				
			oldItem.count = count;
			return setCart([...cart])
		}
		return setCart([...cart, cartItem])
	}

	if (isLoading) {
		return (
			<span className={styles.loader}></span>
		)
	}

	if (isError) {
		return (
			<p>Error</p>
		)
	}

	return (
		<div className={styles.itemPage}>
			<div className={styles.itemDetails}>
				<div className={styles.itemImage}>
					<img src={item.image} alt={item.title} />
				</div>
				<div className={styles.itemInfo}>
					<h3>{item.title}</h3>
					<div className={styles.itemDesc}>
						<p>{item.description}</p>
					</div>
					<div className={styles.itemMinor}>
						<h3>{`$${item.price}`}</h3>
						<p>{`Rating: ${item.rating.rate}/5`}</p>
					</div>
					<form className={styles.itemQuantity}>
						<input type='number' placeholder="Quantity" min='0' max='99' onChange={(e) => setCount(Number(e.target.value))}/>
						<button onClick={handleCart}>Add to cart</button>
					</form>
				</div>
			</div>
		</div>
	)
}
