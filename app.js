const path = require("path"); // This is used in order to join and construct directory paths later
const express = require("express"); // This is the main package used to set up a local server
const app = express(); // This helps us initialise an 'instance' of express from which we can do things with

// port can take two forms. 'process.env.PORT' will tell us which port to use SPECIFIC TO THE 'environment' we are in (in this case, production
// or development). Heroku needs this, because process.env.PORT will change if we are in a 'production' environment when we click the deploy button.
// For now, this notation means that if process.env.PORT doesn't have a value (which it won't right now), port will = 3000
const port = process.env.PORT || 3000;

// Constructs a variable that will hold the absolute path on your machine to find HomePage.html (eg. C://dev/Portfolio-Me/Homepage.html)
// note: in node, '__dirname' gives us the absolute directory path of the file currently being executed
const htmlPath = path.join(__dirname, "HomePage.html");

// .use(express.static()) tells us where to find our .css files
app.use(express.static(__dirname));

// Our first endpoint on our base url 'localhost:3000'. Meaning when you put 'localhost:3000/' in your browser, this will tell us what
// will show up. In this case, the 'res' (ie. response) says to show our htmlPath variable, which is the path to the main html file.
app.get("/", (req, res) => {
	res.sendFile(htmlPath);
});

// This just says to start a server on 'port' which by default will be 3000. Open up localhost:3000 on your browser
app.listen(port, () =>
	console.log(
		`Your app listening on port ${port}! Check out localhost:3000 in your browser`
	)
);
