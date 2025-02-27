const { connectDb } = require('./config/db.js');
const router = require('./routes/index.js');
const express = require('express');
const cors = require('cors');
const PORT = 4000 || process.env.PORT;



require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));




app.use('/api', router);



startServer();





async function startServer() {
    await connectDb();
    app.listen(4000, () => {
        console.log(`server running on port ${process.env.PORT || PORT}`);
    });
}


