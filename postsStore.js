// in-memory cache to store blog posts
var posts = [];

module.exports = {

  add: function(post) {
    post.id = posts.length + 1;
    posts.push(post);
    return post.id;
  },

  get: function(optId) {
    if (optId) {
      return posts[optId];
    }
    return posts;
  },

  del: function(id) {
    // remove the post from the cache
  },

  update: function(id, post) {
    // update the post in the cache
  }

};
