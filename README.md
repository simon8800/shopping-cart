# Shopping Cart

## Deliverables

- Two pages: a home page and a shop page (which includes shopping cart)
    - ✅ Shop Page
        - ✅ Displays products
        - ✅ Basic loading
    - [ ] Home Page
- ✅ Nav bar to go between home and shop pages
    - ✅ NavBar
    - ✅ Routing works
- [ ] Create item cards which allows users to modify how many and to add the items to the cart

## Plan of action

1. Brainstorm components to create and plan out pages 
    1. Pages 
        1. Home 
        2. Shop
            1. Fetches 10 products
            2. Creates 10 ProductCards
        3. Product
        4. Checkout
    2. Components
        1. ProductCard
        2. Button
        3. ImageContainer
            1. Displays product information from `props`
        4. Title
        5. NavBar
2. Build order
    1. Button
    2. ProductCard - Display product name, price, quantity, add to cart
    3. Shop - Fetch products and create product cards for each one
    4. Title
    5. Home - Display some nice pictures, have a float button that navigates to Shop
    6. NavBar
3. Set up routing
4. Make it responsive

## APIs and other tech used

- [styled-components](https://styled-components.com/)
- [Fake Store API](https://fakestoreapi.com/)
