import express from "express";
const app = express();


app.get("/", (req, res) => {
    res.set('Content-Type', "text/html");
    const fileName = 'index.html';
    res.status(200).sendFile(fileName, { root: "." }, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get("/about", (req, res) => {
    res.set('Content-Type', "text/html");
    const fileName = 'about.html';
    res.status(200).sendFile(fileName, { root: "." }, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.get("/contact-me", (req, res) => {
    res.set('Content-Type', "text/html");
    const fileName = 'contact-me.html';
    res.status(200).sendFile(fileName, { root: "." }, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.use("", (req, res) => {
    res.set('Content-Type', "text/html");
    const fileName = '404.html';
    res.status(200).sendFile(fileName, { root: "." }, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});



const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Server listening on port ${PORT}!`);
});