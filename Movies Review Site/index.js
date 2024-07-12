import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/reviewsDAO.js";
// require('dotenv').config()

const MongoClient = mongodb.MongoClient;
// const mongo_username = "vmittal062";
// const mongo_password = "Vrw4VWQ026eJcHtg";
const uri = `mongodb+srv://vmittal062:Vrw4VWQ026eJcHtg@mycluster.tpvladr.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster`

const port=8080;

MongoClient.connect(
    uri,
    {
      maxPoolSize: 50,
      wtimeoutMS: 2500,
      useNewUrlParser: true
    })
    .catch(err => {
      console.error(err.stack)
      process.exit(1)
    })
    .then(async client => {
      await ReviewsDAO.injectDB(client)
      app.listen(port, () => {
        console.log(`listening on port ${port}`)
      })
    })