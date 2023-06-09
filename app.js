const http = require('http');
const fs = require('fs');
const events = require("events");
const port = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error! 404 Page not found.')
        } else {
            res.write(data)
        }
        res.end()
    })
    res.write("Jambo Node");
   res.end();
});

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong! ', error);
    } else {
        console.log('Server is listening on port ', port);
        console.log('Jambo ', process.env.USERNAME)
    }
})
process.on('exit', function () {
    const eventEmitter = events;
})
