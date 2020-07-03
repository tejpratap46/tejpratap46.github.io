exports.handler = function(event, context, callback) {
    // Call at: https://me.tejpratapsingh.com/.netlify/functions/pixel
    callback(null, {
        statusCode: 200,
        body: "Hello, World"
    });
};
