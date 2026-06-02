import { createServer } from 'node:http';
import fs from 'node:fs';

const server = createServer();

server.on('request', (request, res) => {
    res.writeHead(200, { 'Content-Type': "text/html" });
    if (request.method == 'GET') {
        let data = fs.readFileSync('./404.html', 'utf8');
        switch (request.url) {
            case "/":
                data = fs.readFileSync('./index.html', 'utf8');
                break;
            case "/about":
                data = fs.readFileSync('./about.html', 'utf8');
                break;
            case "/contact-me":
                data = fs.readFileSync('./contact-me.html', 'utf8');
                break;
        }

        res.end(data);
    }
});


server.listen(8000, () => { console.log("Server Started"); });