import App from '../App.jsx'
import Shop from '../components/shop/Shop.jsx'
import Product from '../components/product/Product.jsx'
import Cart from '../components/cart/Cart.jsx'

const routes = [{
	path: "/",
	element: <App />,
	children: [
		{
			index: true,
			element: <Shop />
		},
		{
			path: '/products/:productId',
			element: <Product />
		},
		{
			path: '/cart',
			element: <Cart />
		}
	]
}]

export default routes;
