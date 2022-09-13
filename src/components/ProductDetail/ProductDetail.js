import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {ProductKey} = useParams()

    //ProductKey jar sathe match hobe take fakeDate/Api theke niye asha
    const product = fakeData.find(pd => pd.key === ProductKey)
    return (
        <div>
            <h1>Poduct Detail</h1>
            <h2>Product Key : {ProductKey}</h2>

            <h2>Show Product Match With ProductKey</h2>
            {/* Manually

            <h3>{product.name}</h3>
            <h3>{product.category}</h3>
            <h3>{product.price}</h3>
            <h3>{product.stock}</h3>
            <h3>{product.star}</h3> */}

            {/* Age j 1ti shop components er vitor,
            product components er vitor 
            product property er value gulo sajiye chilam
            oita k call korle,
            product components er style anujayi,
            
            upore jei 
            const product ase
            tar ProductKey match hoye,
            product gulo show hobe */}

            <Product product={product}></Product>




        </div>
    );
};

export default ProductDetail;