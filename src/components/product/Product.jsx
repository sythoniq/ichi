import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import styles from './product.module.css'

export default function Product() {
	const productId = Number(useParams().productId);
	const URL = `https://fakestoreapi.com/products/${productId}`
	const [ item, setItem ] = useState()
	const [ isLoading, setIsLoading ] = useState(true)
	const [ isError, setIsError ] = useState(null)

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
			
			console.log(data)
			setItem(data)
			setIsLoading(false)
			return;
		}

		getProduct()
	}, [])

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
				<div>
					<h3>{item.title}</h3>
					<div>
						<p>{item.description}</p>
					</div>
					<div>
						<h3>{`$${item.price}`}</h3>
						<p>{`${item.rating.rate}/5`}</p>
					</div>
					<div>
						<input type='number' placeholder="Quantity" min='0' max='9999'/>
					</div>
					<div>
						<button>Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	)
}
