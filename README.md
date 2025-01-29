# Full-Stack E-commerce Application: BK ATHLETIX

A simple full-stack e-commerce app with a React front-end that allows users to filter products by price and type. The app fetches product data from a backend API and dynamically updates the product list based on the selected filters.

## Features

- **Price Filter**: Filter products by price range (Under $50, $51-$100, Over $100).
- **Type Filter**: Filter products by type (Strength, Speed, Power, Agility, Coordination).
- **Dynamic Product Display**: Products update in real-time based on selected filters.
- **Data Fetching**: Fetches product data from a backend API.

## Technologies

- **Frontend**: React, JavaScript (ES6+), CSS
- **Backend**: Node.js/Express and MySQL

## Component Overview

- **State**: Manages `data`, `selectedPrice`, and `selectedType` for filtering.
- **Filters**: Users can select price and type filters, which update the displayed products.
- **Product List**: Displays filtered products, or shows a message if no products match.

## Running the App

### Prerequisites

- Node.js installed
- React setup (`create-react-app` or similar)

