require('dotenv').config(); // .env file

const app = require('./src/app');

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server is ready for connections on port http://localhost:${PORT}`);
})