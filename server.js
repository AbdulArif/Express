
// Create ser server
const dotenv = require('dotenv')
dotenv.config({path: './Config.env'})
const app =require('./app')
console.log(app.get('env'));

// console.log(process.env.PORT);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})