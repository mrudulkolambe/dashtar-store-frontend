import { useState } from 'react';
import Image from 'next/image';
import { useCart } from 'react-use-cart';
import { IoBagAddSharp, IoAdd, IoRemove } from 'react-icons/io5';

import Price from '@component/common/Price';
import Discount from '@component/common/Discount';
import ProductModal from '@component/modal/ProductModal';

const ProductCard = ({ product }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { items, addItem, updateItemQuantity, inCart } = useCart();

  const handleAddItem = (p) => {
    const newItem = {
      ...p,
      id: p._id,
    };
    addItem(newItem);
  };

  return (
    <>
      <ProductModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        product={product}
      />

      <div className="w-60 shadow-lg group box-border overflow-hidden flex rounded-md pe-0 flex-col items-center justify-end bg-white relative">
        <div
          onClick={() => setModalOpen(!modalOpen)}
          className="relative flex flex-col items-center justify-center w-full cursor-pointer"
        >
          {product.quantity <= 0 && (
            <span className="absolute inline-flex items-center justify-center px-2 py-1 bg-red-100 text-red-600 border-0 rounded-full text-xs font-semibold font-serif z-10 left-4 top-4">
              Stock Out
            </span>
          )}
          <div 
          style={{backgroundColor:`#E0A2B4`}}
          className='mb-2 group box-border w-50% overflow-hidden rounded-b-md py-1 px-2 flex  flex-col items-center justify-center  text-black relative '>
            <h2 className="text-heading truncate block text-sm font-medium">
              <span className="line-clamp-2">{product.title}</span>
            </h2>
          </div>
          {/* <Discount product={product} /> */}

          <Image
            src={'https://images.unsplash.com/photo-1660331036382-bf5a59e28d52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'}
            width={100}
            height={100}
            alt={product.title}
            className="object-cover transition duration-150 ease-linear transform group-hover:scale-105"
          />
         
        </div>
        <div className="w-full px-3 lg:px-4 pb-4 overflow-hidden">
          {/* <div className="relative mb-1">
            <span className="text-gray-400 font-medium text-xs d-block mb-1">
              {product.unit}
            </span>
            <h2 className="text-heading truncate mb-0 block text-sm font-medium text-gray-600">
              <span className="line-clamp-2">{product.title}</span>
            </h2>
          </div> */}

          <div className="mt-2 flex flex-col justify-between items-center text-heading text-sm sm:text-base space-s-2 md:text-base lg:text-xl">
          {/* <Price product={product} card={true} /> */}
            {inCart(product._id) ? (
              <div className='mb-2'>
                {items.map(
                  (item) =>
                    item.id === product._id && (
                      <div
                        key={item.id}
                        className="h-9 w-auto flex flex-wrap items-center justify-evenly py-1 px-2 new-bg text-black rounded"
                      >
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span className="text-dark text-base">
                            <IoRemove />
                          </span>
                        </button>
                        <p className="text-sm text-dark px-1 font-serif font-semibold">
                          {item.quantity}
                        </p>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          disabled={product.quantity === item.quantity}
                        >
                          <span className="text-dark text-base">
                            <IoAdd />
                          </span>
                        </button>
                        
                      </div>
                    )
                )}{' '}
                
              </div>
            ) : (
              <button
                onClick={() => handleAddItem(product)}
                disabled={product.quantity < 1}
                aria-label="cart"
                className="h-9 w-9 mb-2 flex items-center justify-center border border-gray-200 rounded new-text-600 hover:border-emerald-500 hover:new-bg hover:text-white transition-all"
              >
                {' '}
                <span className="text-xl">
                  <IoBagAddSharp />
                </span>{' '}
              </button>
            )}
            
            <Price product={product} card={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
