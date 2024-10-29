
// Create ser server
const app =require('./app')
console.log(app.get('env'));
// console.log(process.env);


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

})