import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//conection & listener
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `Server Open & Connected to Database... http://localhost:${PORT}`
      )
    );
  })
  .catch((err) => console.log(err));
