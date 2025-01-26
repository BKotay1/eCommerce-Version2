import react from 'react';
// src/pages/Product.jsx
import Header from '../components/header';
import Footer from '../components/Footer';
import Products from '../components/Product-Comp';

const Product = () => (
  <div>
    <Header />
    <div className="product-header">
      <p>
        With 12 different Training programs that have boosted over 1,000 athletes speed, strength, and explosiveness.
      </p>
      <ul>
        <li>Over 3,000 athletes and customers have had significant weight loss and huge muscle gain within 3 months.</li>
        <li>Improved physical health and a better lifestyle.</li>
      </ul>
      <p id="product-quote">Choose the option best suited for your goals below!</p>
    </div>
    <div className="products">
    </div>
    <Products />
    <Footer />
  </div>
);

export default Product;
