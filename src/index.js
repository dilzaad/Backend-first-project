

import dns from "node:dns";
import dotenv from "dotenv";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config({ path: "./.env" });

const { default: connectDB } = await import("./db/index.js");

connectDB();










/*
const app = express();

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