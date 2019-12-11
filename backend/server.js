const expreess = require('express');
const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');

const PORT = 1337;
const LOCAL_URL = "http://localhost:1337/parse";

const api = new ParseServer({
    "appId": '971284fe4d05ae653b131c2f3a22789a', //testescmtechmatheus
    "masterKey": 'ecabf8665080f5cb8df434a6aa564ed0', //masterlkeyteste
    "databaseURI": "mongodb://dex.company:DEX.Company70@ds135252.mlab.com:35252/teste-dexter",
    "serverURL": LOCAL_URL,
    "cloud": __dirname + '/cloud/main.js'
});

const dashboard = new ParseDashboard({
    "apps": [{
        "serverURL": LOCAL_URL,
        "appId": '971284fe4d05ae653b131c2f3a22789a',
        "masterKey": 'ecabf8665080f5cb8df434a6aa564ed0',
        "appName": "Orange"
    }],
});

const app = expreess();

app.use('/dashboard', dashboard);
app.use('/parse', api);

app.listen(PORT, () => {
    console.log("Sever running on port: ", PORT, "\nhttp://127.0.0.1:1337");
    console.log("http://127.0.0.1:1337/parse");
    console.log("http://127.0.0.1:1337/dashboard");
});