import { useState, useEffect } from 'react'
import styles from './product.module.css'

export default function Product() {
	const URL = `https://fakestoreapi.com/product` // Add the product id to get the specific item
	const [ item, setItem ] = useState()

	useEffect(() => {
		async function getProduct() {

		}

		getProduct()
	}, [URL])

	return (
		<p>-_-</p>	
	)
}
