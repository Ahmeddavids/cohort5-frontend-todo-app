require('./config/dbConfig');
const cors = require('cors');
const morgan = require("morgan");
const express = require('express');
const PORT = process.env.PORT || 9090;
const userRouter = require('./routers/userRouter');
const todoRouter = require('./routers/todoRouter');


const app = express();
app.use(cors({origin: "*"}));

app.use(morgan("dev"))
app.use(express.json());

app.use('/api', userRouter)
app.use('/api', todoRouter)


app.listen(PORT, () => {
    console.log(`Server is listening to PORT: ${PORT}`);
})