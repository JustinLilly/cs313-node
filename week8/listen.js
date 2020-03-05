var theFunction;

function createServer(f) {
    theFunction = f;
}

function listen(port){
    while(true){
        // look for connection

        // set up connection details

        // do something
        theFunction(request, response);

        // send the information

        // close the connection
    }
}