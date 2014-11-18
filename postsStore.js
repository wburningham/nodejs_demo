var posts = [];

module.exports = {
  add: function(title, author, content) {
    var id = post.length + 1;
    var post = {
      id: id,
      title: title,
      author: author,
      content: content
    };
    posts.push(post);
    return id;
  },
  get: function(optId) {
    if(optId) {
      return posts[optId];
    }
    return posts;
  }
};
