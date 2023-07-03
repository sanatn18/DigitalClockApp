const express = require('express');
const app = express();

app.get('/time/:timezone', (req, res) => {
   try {
    const timezone = req.params.timezone;
    const date = new Date().toLocaleString('en-US', { timeZone: timezone });
    const time = date.split(',')[1].trim();
    console.log(req.body)
    res.send({ timezone, time });
   } catch (error) {
    console.log(error)
   }
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
