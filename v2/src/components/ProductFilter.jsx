import React, { useState, useEffect } from "react";

const ProductFilter = () => {
  // State for products and selected filters
  const [data, setData] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedType, setSelectedType] = useState([]);

  // Fetch product data from the backend when component mounts
  useEffect(() => {
    fetch("https://ecommerce-v2-gtbp.onrender.com/productinfo") // Adjust the URL to match your backend API
      .then((response) => response.json())
      .then((data) => setData(data)) // Set fetched data to the state
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle price filter change (toggle selected price range)
  const handlePriceChange = (event) => {
    const value = event.target.value;
    setSelectedPrice((prevSelectedPrice) =>
      prevSelectedPrice.includes(value)
        ? prevSelectedPrice.filter((item) => item !== value)
        : [...prevSelectedPrice, value]
    );
  };

  // Handle type filter change (toggle selected type)
  const handleTypeChange = (event) => {
    const value = event.target.value;
    setSelectedType((prevSelectedType) =>
      prevSelectedType.includes(value)
        ? prevSelectedType.filter((item) => item !== value)
        : [...prevSelectedType, value]
    );
  };

  // Helper function to parse price correctly
  const parsePrice = (price) => {
    return parseFloat(price.replace("$", "").replace(",", ""));
  };

  // Filter the products based on selected filters (price and type)
  const filteredData = data.filter((item) => {
    const itemPrice = parsePrice(item.price);

    // Apply price filter (check if the product's price matches any of the selected ranges)
    const isPriceValid =
      selectedPrice.length === 0 || // No price filter applied
      selectedPrice.some((range) => {
        if (range === "low") return itemPrice <= 50;
        if (range === "medium") return itemPrice > 50 && itemPrice <= 100;
        if (range === "high") return itemPrice > 100;
        return false;
      });

    // Apply type filter
    const isTypeValid =
      selectedType.length === 0 || selectedType.includes(item.type);

    // Only show product if both filters are satisfied
    return isPriceValid && isTypeValid;
  });

  return (
    <div>
      {/* Filter Options */}
      <div className="filters">
        {/* Price Filter Checkbox */}
        <div>
          <h3>Price Range</h3>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="low"
                checked={selectedPrice.includes("low")}
                onChange={handlePriceChange}
              />
              Under $50
            </label>
            <label>
              <input
                type="checkbox"
                value="medium"
                checked={selectedPrice.includes("medium")}
                onChange={handlePriceChange}
              />
              $51 - $100
            </label>
            <label>
              <input
                type="checkbox"
                value="high"
                checked={selectedPrice.includes("high")}
                onChange={handlePriceChange}
              />
              Over $100
            </label>
          </div>
        </div>

        {/* Type Filter Checkbox */}
        <div>
          <h3>Type</h3>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="Strength"
                checked={selectedType.includes("Strength")}
                onChange={handleTypeChange}
              />
              Strength
            </label>
            <label>
              <input
                type="checkbox"
                value="Speed"
                checked={selectedType.includes("Speed")}
                onChange={handleTypeChange}
              />
              Speed
            </label>
            <label>
              <input
                type="checkbox"
                value="Power"
                checked={selectedType.includes("Power")}
                onChange={handleTypeChange}
              />
              Power
            </label>
            <label>
              <input
                type="checkbox"
                value="Agility"
                checked={selectedType.includes("Agility")}
                onChange={handleTypeChange}
              />
              Agility
            </label>
            <label>
              <input
                type="checkbox"
                value="Coordination"
                checked={selectedType.includes("Coordination")}
                onChange={handleTypeChange}
              />
              Coordination
            </label>
          </div>
        </div>
      </div>

      {/* Display the filtered products */}
      <div className="products">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div key={item.id} className="grid">
              <div className="product-main">
                <img src={item.image} className="product-img" alt={item.name} />
                <p className="name">{item.name}</p>
                <p className="price">{item.price}</p>
                <p className="desc">{item.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products match your filters</p>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
