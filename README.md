### Set Up Routes

1. Clone the repository.
2. Install all dependencies.
3. Navigate to the project directory: `cd POLLING-SYSTEM`
4. Run the application using `nodemon index.js`

## API Routes

1. **Create Question**
   - Endpoint: `localhost:3000/api/questions/create`
   - Method: POST
   - Body:
     ```json
     {
         "title": "What is your name"
     }
     ```

2. **Add Options to Selected Question**
   - Endpoint: `localhost:3000/api/questions/657c75d0830c1757e11c0e4f/options/create`
   - Method: POST
   - Body:
     ```json
     {
         "text": "Option one newest"
     }
     ```

3. **Delete Question**
   - Endpoint: `localhost:3000/api/questions/657c8a766b37f02adae9e2d8/delete`
   - Method: DELETE

4. **Adding Vote to Option**
   - Endpoint: `localhost:3000/api/options/657c80b2e104536753435058/add_vote`
   - Method: GET

5. **Delete Option by ID**
   - Endpoint: `localhost:3000/api/options/657c8a886b37f02adae9e2e0/delete`
   - Method: DELETE

6. **View Question**
   - Endpoint: `localhost:3000/api/questions/657ca673f8c01d9006786da4`
   - Method: GET
