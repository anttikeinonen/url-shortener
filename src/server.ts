import app from './app';

const port = 8080;

app.listen(port, (err) => {
    console.log(`Listening on port ${port}...`);
});