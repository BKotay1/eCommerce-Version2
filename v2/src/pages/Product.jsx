
import Header from '../components/header';
import Footer from '../components/Footer';
import Products from '../components/Product-Comp';
import ProductFilter from '../components/ProductFilter';
import ProductTop from '../components/ProductTop';


const Product = () => (
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Header />
   <ProductTop />
    <ProductFilter />
    <Footer />
  </div>
);

export default Product;
