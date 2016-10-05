# Server and client side user authentication

This is a front- and back-end user authentication app. It consists of:
* user sign in and sign up forms,
* API server that will serve JSON data only to authenticated users.

The app has been developed by Piotr Berebecki as part of undertaking an excellent course: [Advanced React and Redux](https://www.udemy.com/react-redux-tutorial) by Stephen Grider.

Development tools and techniques include:

* Node
* Express
* MongoDB
* Mongoose
* bcrypt (password hashing)
* Passport (authentication middleware)
* JSON Web Token (JWT) authentication
* ES6
* API server
* AJAX
* React
* React Router
* Redux
* Redux Form
* Redux Thunk
* Axios (Promise-based http client)
* Babel
* Webpack
* Node
* Git
* GitHub

## Getting Started


    > git clone https://github.com/PiotrBerebecki/server-and-client-side-user-authentication.git
    > cd server-side-user-authentication
    > npm install
  
Open 3 tabs/windows of command line tool:

1. Tab (in the `client` directory)


    > npm run start

2. Tab (in the `server` directory)

* Windows:


    > mongod --dbpath "C:\Users\USERNAME\Desktop\server-and-client-side-user-authentication\server\data\db"
    
* Linux / Max, it may be sufficient to just run:


    > mongod

3. Tab (in the `server` directory)


    > npm run dev


Open browser at http://localhost:8080/
