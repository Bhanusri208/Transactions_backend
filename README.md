# Personal Expense Tracker API

A RESTful API to manage personal income and expenses using **Node.js**, **Express**, and **MongoDB**. Users can record transactions, retrieve past records, and get a summary of their financial data.

## Features

- Add a new transaction (income or expense)
- Retrieve all transactions
- Get a specific transaction by ID
- Update a transaction by ID
- Delete a transaction by ID
- Get a summary of total income, expenses, and balance

## Technologies Used

- **Node.js**: Backend framework
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing transactions
- **Mongoose**: ODM for MongoDB
- **dotenv**: For managing environment variables

## Prerequisites


- **Node.js**: [Download Node.js](https://nodejs.org)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community)

## Setup Instructions

1. Clone the repository:

   git clone https://github.com/Bhanusri208/Transactions_backend.git

The server will be running at http://localhost:4000.

API Endpoints
All endpoints are prefixed with /api.

1. Add a New Transaction
URL: /api/addTransaction
Method: POST
Request Body:
json
Copy code
{
    "type": "income",
    "category": "Salary",
    "amount": 5000,
    "date": "2023-10-10",
    "description": "October salary"
}
Response: 201 Created (The newly created transaction object)
2. Get All Transactions
URL: /api/getTransactions
Method: GET
Response: 200 OK (List of all transactions)


3. Get a Specific Transaction by ID
URL: /api/getEachTransaction/:id
Method: GET
Response: 200 OK (The transaction object)


4. Update a Transaction by ID
URL: /api/updateTransactions/:id
Method: PUT
Request Body: Update fields as needed.
json

{
    "type": "expense",
    "category": "Groceries",
    "amount": 150,
    "description": "Weekly grocery shopping"
}
Response: 200 OK (Updated transaction object)


5. Delete a Transaction by ID
URL: /api/deleteTransactions/:id
Method: DELETE
Response: 200 OK (Confirmation message)


6. Get Summary of Transactions
URL: /api/summary
Method: GET
Response:
json
{
    "totalIncome": 5000,
    "totalExpense": 150,
    "balance": 4850
}
Testing with Postman
You can use Postman to test the API endpoints. 

