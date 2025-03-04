const { connectDb } = require('./config/db.js');
const router = require('./routes/index.js');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const PORT = 4000 || process.env.PORT;




const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}
));



app.use('/api', router);



startServer();





async function startServer() {
    await connectDb();
    app.listen(4000, () => {
        console.log(`server running on port ${process.env.PORT || PORT}`);
    });
}


