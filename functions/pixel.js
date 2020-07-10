const monk = require('monk');
const { nanoid } = require('nanoid');

exports.handler = async (event, context) => {
    // Call at: https://me.tejpratapsingh.com/.netlify/functions/pixel: wpkMNtwF2XzUpapz

    const { DB_URL } = process.env;
    const db = monk(DB_URL);

    const urls = db.get('urls');
    urls.createIndex({ slug: 1 }, { unique: true });

    const requestData = event.body ? JSON.parse(event.body) : {};

    let { slug, url } = requestData;

    try {
        await schema.validate({
            slug,
            url,
        });
        if (!slug) {
            slug = nanoid(5);
        } else {
            const existing = await urls.findOne({ slug });
            if (existing) {
                throw new Error('Slug in use. 🍔');
            }
        }
        slug = slug.toLowerCase();
        const newUrl = {
            url,
            slug,
        };
        const created = await urls.insert(newUrl);

        return {
            statusCode: 301,
            headers: {
                // Location: "https://me.tejpratapsingh.com/assets/images/cover.png"
                "Content-Type": "application/json"
            },
            body: {
                created: created
            }
        };
    } catch (error) {
        return {
            statusCode: 301,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                error: error.message,
                stack: error.stack
            }
        };
    }
};
