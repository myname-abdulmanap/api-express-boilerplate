const app = require('./src/app');

const PORT = 5000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(PORT, () => {
    console.log(`🍵 Server running on port ${PORT}....`);
    console.log(`💻 Welcome to API Express Boilerplate by NAF`);
    console.log(`😊 Waiting for requests...`);
});


// const express = require('express')
// const app = express()
// const port = 3000



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })