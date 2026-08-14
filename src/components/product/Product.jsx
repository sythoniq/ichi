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
	}, [URL])

	return (
		<p>-_-</p>	
	)
}
