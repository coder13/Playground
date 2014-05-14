var Hapi = require('hapi');
port = 8000;

app = {
    title: "Hapi Test", 
    text: ""
};

server = new Hapi.Server('localhost', port);

server.views({
    engines: {
        jade: 'jade'
    },
    path: './templates'
});

function indexHandler(request, reply) {
    reply.view('index' + request.path.replace('/',''), app);
}

server.route({ method: 'GET', path: '/', handler:indexHandler});
server.route({ method: 'GET', path: '/1', handler:indexHandler});
server.route({ method: 'GET', path: '/2', handler:indexHandler});
server.route({ method: 'GET', path: '/3', handler:indexHandler});



server.start(function () {
    console.log("server running on port " + port.toString());
});


function update(event) {
    var input = document.getElementById("textInput");
    var Output = document.getElementById("Output");
    console.log(input);
    Output.innerHTML = input.value;
}