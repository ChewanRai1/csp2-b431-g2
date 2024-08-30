# Capstone2-Ecommerce API

## Project Details

This project is a demo application developed as part of Capstone 2. Below are the details of the team members, dummy user credentials for testing, and contributions of team members:

## Team Members

- Chewan Rai
- Sara Dangol

## Dummy User Credentials

### Admin Account

- **Email:** crai@gmail.com
- **Password:** chewan1234

### Regular User Account

- **Email:** rrai@gmail.com
- **Password:** rabin1234

## Features:

1. **Chewan Rai**

   - _Data Model Design_
   - _User Resources:_
     - Set user as admin (Admin only)
     - Retrieve User Details
     - Update Password
   - _Product Resources:_
     - Create Product (Admin only)
     - Retrieve All Products (Admin only)
     - Update Product Info (Admin only)
     - Archive Product (Admin only)
     - Activate Product (Admin only)
   - _Cart Resources:_
     - Get Cart
     - Update Quantity in cart
     - Remove product from cart
     - Clear Cart
   - _Order Resources:_
     - Retrieve authenticated user's orders
     - Retrive all orders(Admin only)

2. **Sara Dangol**
   - _User Resources:_
     - User registration
     - User authentication
   - _Product Resources:_
     - Retrieve All Active Products
     - Retrieve Single Product
     - Search for product by name
     - Search for product by price range
   - _Cart Resources:_
     - Cart model
     - Add to Cart
   - _Order Resources:_
     - Non admin User checkout(create order)

## Project Overview

This project is part of Capstone 2, where we developed various user, product, cart, and order management features. The application includes functionalities for user registration, authentication, profile management, and a robust product management system. Additionally, it includes cart and order functionalities, allowing users to add products to their cart, view order details, and more.

### User Resources

- **User Registration:** Allows users to create an account.
- **User Authentication:** Enables users to log in and receive a token.
- **Set User as Admin (Admin only):** An admin can elevate a regular user to an admin role.
- **Retrieve User Details:** Allows users to view their profile details.
- **Update Password:** Allows users to update their account password.

### Product Resources

- **Create Product (Admin only):** Allows an admin to add a new product.
- **Retrieve All Products (Admin only):** Admins can view all products in the system.
- **Retrieve All Active Products:** Anyone can view all products that are active.
- **Retrieve Single Product:** Allows anyone to view the details of a specific product.
- **Update Product Info (Admin only):** Admins can update the details of an existing product.
- **Archive Product (Admin only):** Admins can deactivate a product, making it inactive.
- **Activate Product (Admin only):** Admins can reactivate a previously deactivated product.

### Cart Resources

- **Get User's Cart:** Retrieve the cart items for a logged-in user.
- **Add to Cart:** Allows users to add products to their cart.
- **Subtotal for each item:** Calculates the subtotal for each item in the cart.
- **Total Price for All Items:** Calculates the total price for all items in the cart.
- **Change Product Quantities:** Allows users to update the quantity of products in their cart.
- **Remove Products from Cart:** Allows users to remove items from their cart.
- **Clear Cart:** Allows users to clear all items from their cart.

### Order Resources

- **Non-admin User Checkout (Create Order):** Allows a logged-in user to place an order based on their cart contents.
- **Retrieve Authenticated User's Orders:** Retrieve all orders placed by the logged-in user.
- **Retrieve All Orders (Admin only):** Admins can view all orders placed by all users.

## How to Run the Project

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your `.env` file with the required environment variables.
4. Run `nodemon index.js` to start the server.
5. Access the application via `http://localhost:4444`.

## Environment Variables

Create a `.env` file in the root of your project and include the following:

```bash
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret
```
