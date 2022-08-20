import ProductCard from '@component/product/ProductCard'
import Layout from '@layout/Layout'
import ProductServices from '@services/ProductServices'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductPage = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		axios({
			url: "https://dashtar-store-backend.vercel.app/api/products/show",
			method: "get"
		})
			.then((res) => {
				setProducts(res.data)
			})
	}, [])


	return (
		<>
			<Layout title={"All Products"} description={"Page For All Products"}>
				<div className='min-h-screen Acme'>
					<div className="py-4 grid md:grid-cols-3 justify-items-center grid-cols-1 xs:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-2 md:gap-6 lg:gap-8">
						{
							products && products.map((product) => {
								return <ProductCard key={product._id} product={product} />
							})
						}
					</div>
				</div>
			</Layout>
		</>
	)
}

export default ProductPage