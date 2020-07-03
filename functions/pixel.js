exports.handler = function(event, context, callback) {
    // Call at: https://me.tejpratapsingh.com/.netlify/functions/pixel
    callback(null, {
        statusCode: 301,
        headers: {
            Location: "https://me.tejpratapsingh.com/assets/images/cover.png"
        }
    });
};
