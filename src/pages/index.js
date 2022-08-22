import useSessionstorage from '@rooks/use-sessionstorage';

//internal import
import Layout from '@layout/Layout';
import Banner from '@component/banner/Banner';
import CardTwo from '@component/cta-card/CardTwo';
import OfferCard from '@component/offer/OfferCard';
import StickyCart from '@component/cart/StickyCart';
import ProductServices from '@services/ProductServices';
import ProductCard from '@component/product/ProductCard';
import MainCarousel from '@component/carousel/MainCarousel';
import FeatureCategory from '@component/category/FeatureCategory';
import { ImTruck } from 'react-icons/im'
import { FaShoppingBag } from 'react-icons/fa'
import { MdOutlineLocalLaundryService } from 'react-icons/md'
import { useRouter } from 'next/router';

const Home = ({ products, popularProducts, discountProducts }) => {
  const [value, set] = useSessionstorage('products', products);
  const router = useRouter()
  return (
    <>
      <Layout>
        <div className="min-h-screen">
          <div>
            <img src="/fruits/banana.png" className='absolute banana z-40' alt="" />
            <img src="/fruits/kiwi.png" className='absolute kiwi z-40' alt="" />
            <img src="/fruits/grapes.png" className='absolute grapes z-40' alt="" />
            <img src="/fruits/orange2.png" className='absolute orange2 z-40' alt="" />
            <img src="/fruits/cherry.png" className='absolute cherry z-40' alt="" />
            <img src="/fruits/peach.png" className='absolute peach z-40' alt="" />
            <img src="/fruits/lemon.png" className='absolute lemon z-40' alt="" />
            <img src="/fruits/pear.png" className='absolute pear z-40' alt="" />
          </div>
          <StickyCart />
          <div className="bg-white">
            <div className="mx-auto py-5 max-w-screen-2xl px-3 sm:px-10">
              <div className="flex w-full">
                <div className="flex-shrink-0 lg:block w-full lg:w-full">
                  <MainCarousel />
                </div>
                <div className="w-full hidden lg:hidden">
                  <OfferCard />
                </div>
              </div>
              <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
                <Banner />
              </div>
            </div>
          </div>

          {/* feature category's */}
          <div className="bg-gray-100 lg:py-16 py-10 hidden">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
              <div className="mb-10 flex justify-center">
                <div className="text-center w-full lg:w-2/5">
                  <h2 className="text-xl lg:text-2xl mb-2 Acme font-semibold">
                    Featured Categories
                  </h2>
                  <p className="text-base font-sans text-gray-600 leading-6">
                    Choose your necessary products from this feature categories.
                  </p>
                </div>
              </div>
              <FeatureCategory />
            </div>
          </div>

          {/* popular products */}
          <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10 Acme">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 Acme font-semibold Acme">
                  How we can serve you and deliver
                  your <span className='accent-color-text'>favourite fruits</span>
                </h2>
                <p className="hidden text-base font-sans text-gray-600 leading-6 Acme">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full gap-6">
                  <div className='text-center flex items-center flex-col'>
                    <img src={'/app/step-1.png'} className="serve-img" alt="" />
                    <div>
                      <h1 className='accent-color-text text-2xl'>Step 1</h1>
                      <p>Select your item and get into your cart</p>
                    </div>
                  </div>
                  <div className='text-center flex items-center flex-col'>
                    <img src={'/app/step-2.png'} className="serve-img" alt="" />
                    <div>
                      <h1 className='accent-color-text text-2xl'>Step 2</h1>
                      <p>Placed your order in just few seconds</p>
                    </div>
                  </div>
                  <div className='text-center flex items-center flex-col'>
                    <img src={'/app/step-3.png'} className="serve-img" alt="" />
                    <div className='text-center'>
                      <h1 className='accent-color-text text-2xl'>Step 3</h1>
                      <p className='w-1/2 m-auto'>Your order will be delivered to your address with proper quality checks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* popular products */}
          <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10 Acme">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 Acme font-semibold Acme">
                  <span className='accent-color-text'>Popular</span> Products for Daily Shopping
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6 Acme">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full">
                <div className="grid md:grid-cols-3 justify-items-center grid-cols-1 xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
                  {/* {popularProducts?.slice(0, 18).map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))} */}
                  {
                    products && products.map((product, i) => {
                      if (i < 3) {
                        return <ProductCard key={product._id} product={product} />
                      }
                    })
                  }
                </div>
                <div className='flex w-full justify-center mt-4'><button onClick={() => { router.push("/product") }} className=' bg-yellow-500 text-gray-700 py-1 px-3 rounded-lg'>View More</button></div>
              </div>
            </div>
          </div>


          {/* Daily service */}
          <div className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10 Acme">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 Acme font-semibold Acme">
                  <span className='accent-color-text'>FruitFlix</span> could be your daily service
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6 Acme">
                  See all our popular products in this week. you can choose your daily needs products from this
                  list and get some special offer with free shipping
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full flex items-center flex-col">
                <div className="w-11/12 grid md:grid-cols-2 justify-items-center grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
                  <div className='flex flex-col items-center'>
                    <div className='rounded-full new-bg p-12 w-max'>
                      <FaShoppingBag className='accent-color-text text-5xl' />
                    </div>
                    <h1 className='text-2xl mt-3'><span className='accent-color-text'>Fresh</span> Food</h1>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='rounded-full new-bg p-12 w-max'>
                      <ImTruck className='accent-color-text text-5xl' />
                    </div>
                    <h1 className='text-2xl mt-3'><span className='accent-color-text'>Fastest</span> Delivery</h1>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='rounded-full new-bg p-12 w-max'>
                      <MdOutlineLocalLaundryService className='accent-color-text text-6xl' />
                    </div>
                    <h1 className='text-2xl mt-3'><span className='accent-color-text'>Best</span> Service</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* promotional banner card */}
          <div className="block mx-auto max-w-screen-2xl">
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
              <div className="lg:p-16 p-6 new-bg shadow-sm border rounded-lg">
                <CardTwo />
              </div>
            </div>
          </div>

          {/* discounted products */}
          <div
            id="discount"
            className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10 hidden"
          >
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-xl lg:text-2xl mb-2 Acme font-semibold">
                  Latest Discounted Products
                </h2>
                <p className="text-base font-sans text-gray-600 leading-6">
                  See Our latest discounted products below. Choose your daily
                  needs from here and get a special discount with free shipping.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-full 2xl:ml-40 xl:ml-20 ">
                <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
                  {products?.slice(0, 18).map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

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

// export const getServerSideProps = async () => {
//   const products = await ProductServices.getShowingProducts();

//   return {
//     props: {
//       products,
//     },
//   };
// };

export default Home;
