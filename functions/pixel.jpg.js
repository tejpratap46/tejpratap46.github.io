exports.handler = function(event, context, callback) {
    // Call at: https://me.tejpratapsingh.com/.netlify/functions/pixel.jpg
    callback(null, {
        statusCode: 200,
        body: "Hello, World"
    });
};
