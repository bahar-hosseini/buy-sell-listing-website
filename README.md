# Buy/Sell Listing Website

An online store app where admins can post different types of products to sell, remove items, or mark them as SOLD! Users are able to favorite items to check up on them later, filter items by price, and also send messages to admin to negotiate the price. Admins can reply to the user by the app and email.
------
#### Contributors: Bahar Hosseini, Netsanet Asfaw, Michael Wang

## Screenshots
#### Header
![This is an image](/docs/header.png)
#### Home
![This is an image](/docs/home.png)
#### Product liked
![This is an image](/docs/product.png)
#### Product liked
![This is an image](/docs/product-2.png)
#### Product sold
![This is an image](/docs/product-3.png)
### Message Box
![This is an image](/docs/message_box.png)
### Add product
![This is an image](/docs/add_product.png)
### Filter product
![This is an image](/docs/filter_product.png)

## Tech Stack
* Node
* Express
* jQuery
* PostgreSQL


## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
7. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
8. Visit `http://localhost:8080/`


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x

