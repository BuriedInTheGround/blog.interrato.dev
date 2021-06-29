import posts from './_posts.js';

const contents = JSON.stringify(posts.filter(post => post.published).map(post => {
    return {
        title: post.title,
        slug: post.slug,
        publishedOn: post.publishedOn
    };
}));

// GET /index.json
export const get = async () => {
    return {
        status: 200,
        body: contents
    };
};
