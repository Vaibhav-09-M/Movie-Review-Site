# Movie-Review-Site
**Overview**

This project is a dynamic and interactive movie review site developed using full-stack web development. Users can add, update, delete, and view reviews for different movies.

**Technologies Used**

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Others: Fetch API, MongoDB Atlas
**Features**
Add Reviews: Users can add reviews for any movie.
Update Reviews: Users can update their existing reviews.
Delete Reviews: Users can delete their reviews.
View Reviews: Users can view all reviews for a particular movie.
**Installation**
**Prerequisites**
Node.js and npm installed on your machine.
MongoDB database (you can use MongoDB Atlas for a cloud-based solution).
**Steps**
1. Clone the repository:
git clone https://github.com/yourusername/moviereviewsite.git
cd moviereviewsite
2. Install dependencies:
npm install
3. Set up environment variables:
Create a .env file in the root directory and add your MongoDB URI:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
4. Run the application:
npm start
5. Access the application:
Open your web browser and go to http://localhost:8080.

**API Endpoints**
GET /api/v1/reviews/movie/
- Retrieve all reviews for a movie.
POST /api/v1/reviews/new - Add a new review.
PUT /api/v1/reviews/
- Update an existing review.
DELETE /api/v1/reviews/
- Delete a review.
