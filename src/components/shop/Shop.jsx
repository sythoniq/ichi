import { useState, useEffect } from 'react'

import styles from './shop.module.css'
import Card from './Card.jsx'

export default function Shop() {
	const URL = 'https://fakestoreapi.com/products'
	const [ isLoading, setIsLoading ] = useState(true)
	const [ isError, setIsError ] = useState(null)

	const [ list, setList ] = useState()
	const [ cart, setCart ] = useState()

	useEffect(() => {
		async function getShopData() {
			const res = await fetch(URL);

			if (!res.ok) {
				setIsError("Network Error")
				setIsLoading(false)
				setList(null)
				return;
			}

			const data = await res.json();
			if (!data) {
				setIsError("Shop data not found")
				setIsLoading(false)
				setList(null)
				return;
			}

			setList(data)
			setIsLoading(false)
			return;
		}

		getShopData()
	}, [URL])

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

	const shopList = list.map(item => 
		<Card key={item.id} itemId={item.id} itemName={item.title} itemImg={item.image} />
	)

	return (
		<main className={styles.shopBody}>
			{shopList}
		</main>
	)
}
