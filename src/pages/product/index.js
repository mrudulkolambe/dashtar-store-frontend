import Layout from '@layout/Layout'
import React from 'react'

const ProductGroup = ({ products, popularProducts, discountProducts }) => {
	console.log(products)
	return (
		<>
			<Layout>


			</Layout>
		</>
	)
}

export const getStaticProps = async () => {
	const products = await ProductServices.getShowingProducts();

	const popularProducts = products.filter((p) => p.discount === 0);
	const discountProducts = products.filter((p) => p.discount >= 5);

	return {
		props: {
			products: products,
			discountProducts: discountProducts,
			popularProducts: popularProducts.slice(0, 50),
		},
		revalidate: 60,
	};
};

export default ProductGroup