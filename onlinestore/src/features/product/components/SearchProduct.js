import React, { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchAllProductsAsync, selectAllProducts } from '../productSlice';
import { Link } from 'react-router-dom';

function SearchProduct() {
    const dispatch=useDispatch()
    const products=useSelector(selectAllProducts);

    useEffect(()=>{
        dispatch(fetchAllProductsAsync())
      
      },[dispatch])

    const[searchTerm,setSearchTerm]=useState("");
    return (
        <div>
            
           <input
                  id="searchInput"
                  onChange={(e) => {
                    setSearchTerm(e.target.value)}}
                  
                  type="text"
                  placeholder='Search here....'
                  className="w-1/2 flex ml-72 mt-10 p-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.filter((product)=>{
                if(searchTerm===''){
                    return product;
                }else if(product.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return product;
                }
            })
            
            .map((product) => (
              <Link >
                <div
                  key={product.id}
                  className="group relative border-solid border-2 p-2 shadow-lg"
                >
                  <div className="aspect-h-60  w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <div href={product.image}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </div>
                      </h3>
                     
                    </div>
                    <div>
                      
                      <p className="text-sm block  font-medium text-gray-600">
                        $ {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

        </div>
    );
}

export default SearchProduct;