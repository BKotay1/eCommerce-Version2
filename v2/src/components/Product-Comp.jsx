import React, { useEffect, useState } from "react";

function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://ecommerce-v2-gtbp.onrender.com/productinfo")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setData(err));
  }, []);

  return (
    <>
      <div className="products">
        {data.map((item) => (
          <div key={item.id} className="grid">
            <img src={item.image} className="product-img" />
            <p className="name">{item.name}</p>
            <p className="price">{item.price}</p>
            <p className="desc">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
