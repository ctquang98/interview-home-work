const express = require('express');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const mongoose = require('mongoose');
const app = express();
const port = 8081;

const dbURI = 'mongodb+srv://ctquang98:P@ssw0rdX@cluster0.tslaz.mongodb.net/zigvy-post?retryWrites=true&w=majority'

mongoose.connect(dbURI,  {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => console.log('Connected to db'))
.catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.json({
        data: 'Welcome'
    });
});

app.use('/posts', postRoutes);

app.use('/users', userRoutes);

app.use('/comments', commentRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});