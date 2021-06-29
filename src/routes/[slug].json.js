import posts from './_posts.js';

const lookup = new Map();
posts.forEach(post => {
    lookup.set(post.slug, post);
});

// GET :slug.json
export const get = async (request) => {
    const slug = request.params.slug;

    if (lookup.has(slug)) {
        return {
            status: 200,
            body: lookup.get(slug)
        };
    }

    return {
        status: 404,
        body: JSON.stringify(`Post Not Found`)
    };
};
