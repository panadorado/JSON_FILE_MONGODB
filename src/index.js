const express = require('express');
const app = express();
const db = require('./configs/connectdb');
const userdetail = require('./configs/usersdetail');

// MiddleWare - Phần mềm trung gian cho việc sử dụng method
// để lấy và gửi data từ server đến client và ngược lại
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res, next) => {
    userdetail.find({})
    .then((userdetail) =>  res.json(userdetail))
    .catch(next);
});

db.connect();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is listening at the port ${PORT} !`);
});

//Run app, then load http://localhost:port in a browser to see the output.