const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Can's First Post",
    "postContent": "This is a beautiful day",
    "userId": 1
  },
  {
    "postTitle": "Ali's First Post",
    "postContent": "This is the greenest field",
    "userId": 2
  },
  {
    "postTitle": "Bono's First Post",
    "postContent": "This is very musical, listen!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;