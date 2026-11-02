
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB();

.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
  });
})
.catch((error) => {
  console.log("MongoDB connection failed!!!", error);
});









const app = express();
/*
(async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );

    app.on("error", (error) => {
      console.log("Error:", error);
      throw error
    });

    console.log("MongoDB connected successfully!");
    app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${
            process.env.port}`);
    })
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
})();
*/