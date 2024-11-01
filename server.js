
// Create ser server
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: './Config.env' })
const app = require('./app')
console.log(app.get('env'));

// console.log(process.env.PORT);
// mongoose.connect(process.env.CONN_STR, {
//     userNewUrlParser: true
// }).then((conn) => {
//     console.log(conn)
//     console.log("DB Connection Successfull")
// }).catch((error)=>{
// console.log("Some error has occured in Dadatbase connection")
// })

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})