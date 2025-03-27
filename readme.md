
# School Management API

This project is a Node.js-based API for managing school data, allowing users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Task List

- [x] Set up project structure
- [x] Implement database connection
- [x] Create school model
- [x] Implement addSchool API
- [x] Implement listSchools API
- [x] Add input validation
- [x] Implement distance calculation and sorting
- [x] Add Swagger documentation
- [x] Write unit tests
- [x] Set up error logging
- [ ] Deploy to Railway
- [ ] Create Postman collection for API testing

## Installation

1. Clone the repository:


`git clone https://github.com/RudradevArya/Educase-OA.git`
`cd Educase-OA`

1. Install dependencies:

`npm install`

## Configuration

1. Create a `.env` file in the root directory with the following content:


```
DB_HOST=your_mysql_host 
DB_USER=your_mysql_user 
DB_PASSWORD=your_mysql_password 
DB_NAME=your_database_name 
PORT=3000
```

2. Update the values with your MySQL credentials and desired port.

## Running the Application

- For development:
`npm run dev`

- For production:
`npm start`

## API Endpoints

1. Add a new school
   - URL: `/api/addSchool`
   - Method: POST
   - Body:


```
json 
{ 
    "name": "School Name", 
    "address": "School Address", 
    "latitude": 40.7128, 
    "longitude": -74.0060 
}
```

- Response:
```
json 
{ 
    "id": 1, 
    "message": "School added successfully" 
}
```

2. List schools sorted by proximity
   - URL: `/api/listSchools`
   - Method: GET
   - Query Parameters:
     - `latitude`: User's latitude
     - `longitude`: User's longitude
   - Response:


```
json [ { "id": 1, "name": "School Name", "address": "School Address", "latitude": 40.7128, "longitude": -74.0060, "distance": 1.5 }, ... ]
```

## Testing

Run the test suite with:
`npm test`

## Deployment

go to `https://readme.so/editor`
for swagger documentation (recommended as compared to postman collection)

