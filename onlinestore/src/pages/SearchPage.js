import React from 'react';
import SearchProduct from '../features/product/components/SearchProduct';
import Navbar from '../features/navbar/Navbar';

function SearchPage(props) {
    return (
        <div>
            <Navbar/>
            <SearchProduct/>
            
        </div>
    );
}

export default SearchPage;