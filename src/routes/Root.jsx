import App from '../App.jsx'
import Shop from '../components/shop/Shop.jsx'
import Product from '../components/product/Product.jsx'

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
		}
	]
}]

export default routes;
