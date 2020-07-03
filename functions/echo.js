exports.handler = function(event, context, callback) {
    // Call at: https://me.tejpratapsingh.com/.netlify/functions/echo
    callback(null, {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            path: event.path,
            httpMethod: event.httpMethod,
            headers: event.headers,
            queryStringParameters: event.queryStringParameters,
            body: event.body ? JSON.parse(event.body) : {},
            isBase64Encoded: event.isBase64Encoded
        })
    });
};
