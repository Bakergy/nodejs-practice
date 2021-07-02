import express from 'express'
import morgan from 'morgan'
const app = express()
const port = 3000

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//無error,但就是找不到一個路由可以對應
app.use(function(req,res){
	res.status(404);
	res.json({err:'404 - Path Not Found'});
});
// app.get('*', function (req, res) {
//   res.json({ err: '404 - Path Not Found' });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})