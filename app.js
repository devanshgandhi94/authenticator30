const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app =express();



app.use(expressLayouts);
app.set('view engine','ejs');
const PORT = process.env.PORT || 5000;
//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.listen(PORT, console.log('Server started on port ${PORT}'));

