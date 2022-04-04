import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../footer/Footer';
import Header from '../header/Header';
import Product from '../product/Product';



function Main(): JSX.Element {
    return (
        <section>
            <div>
                <h2>Random Products</h2>
                <Product/>
            </div>
        </section>
    );
}

export default Main;
