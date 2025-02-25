const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const auth = require("./routes/auth");
const submissionRoutes = require("./routes/submissions");
const syncRoutes = require("./routes/sync");

app.use("/auth", authRoutes);
app.use("/submissions", submissionRoutes);
app.use("/sync", syncRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

