const http = require('https');
// Call at: https://me.tejpratapsingh.com/.netlify/functions/proxy?url=me.tejpratapsingh.com/.netlify/functions/echo
exports.handler = async (event) => {
    const queryParameters = event.queryStringParameters;
    const httpMethod = event.httpMethod;
    const body = event.body ? JSON.parse(event.body) : {};

    const url = queryParameters.url;
    if (!url) {
        const response = {
            statusCode: 500,
            body: JSON.stringify({
                error: "Url missing"
            }),
        };
        return response;
    }
    return httprequest().then((data) => {
        const response = {
            statusCode: 200,
            body: JSON.stringify(data),
        };
        return response;
    });
};
function httprequest(url) {
    const urlArray = url.split("/");
    const host = fruits.shift();
    const path = urlArray.join("/");
    return new Promise((resolve, reject) => {
        const options = {
            host: host,
            path: path,
            port: 443,
            method: "GET"
        };
        const req = http.request(options, (res) => {
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            var body = [];
            res.on('data', function (chunk) {
                body.push(chunk);
            });
            res.on('end', function () {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch (e) {
                    reject(e);
                }
                resolve(body);
            });
        });
        req.on('error', (e) => {
            reject(e.message);
        });
        // send the request
        req.end();
    });
}