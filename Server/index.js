import Express from 'express';
import bodyParser from 'body-parser';



const app = Express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});