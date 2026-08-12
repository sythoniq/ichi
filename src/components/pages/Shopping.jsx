import {useState, useEffect} from 'react'
import {useOutletContext} from 'react-router'

import {ItemCard as Card} from '../Card.jsx'

const URL = 'https://fakestoreapi.com'

export default function Shopping(props) {
  const {list, box} = useOutletContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [shopList, setShopList] = list;
  const [cart, setCart] = box;
	
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`${URL}/products`)

        if (!res.ok) {
          throw new Error(`HTTP Error: Status ${res.status}`);
        }

        const data = await res.json();
        setShopList(data);
        setError(null);
        setLoading(false);
      } catch(err) {
        console.error(err)
        setError(err.message)
        setShopList(null);
        setLoading(false);
      }
    }

		getData()
	}, [])


  function validateInput(e) {
    const tgtEle = document.getElementById(e.id);
    const tgtItem = shopList[e.id - 1];
    
    const tgtInput = tgtEle.querySelector("input");

    if (tgtInput.value <= 0) return;
  
    const res = cart.find((item) => item[0].title == tgtItem.title); 
    
    if (res) {
      res[1] = tgtInput.value;
    } else {
      setCart([...cart, [tgtItem, tgtInput.value]]);
    }
  }

  function handleIncrease(e) { 
    const tgt = document.getElementById(e.id).querySelector("input");
    if (tgt.value >= 0) {
      tgt.value++
    }

    return tgt.value;
  }

  function handleDecrease(e) {
		const tgt = document.getElementById(e.id).querySelector("input");
		if (tgt.value != 0) {
			tgt.value--
		}

		return tgt.value;
	}

	if (loading) {
		return (
			<div className="loading-page">
				<div className="loader"></div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="fetch-error">
				<h3>Failed To Fetch Data</h3>
				<p>There seems to be an issue with our network, please try again later!</p>
			</div>
		)
	}
	return (
		<main className="shopping-content">
			{shopList.map((item) => {
				return (
					<Card itemName={item.title} imgSrc={item.image} itemId={item.id}
						key={item.id} itemPrice={item.price}
						itemRating={item.rating.rate} handleInput={validateInput}
						handleDecrease={handleDecrease} handleIncrease={handleIncrease} />
				)
			})}
		</main>
	)
}
