const postResolver = require("./post.js");

const usersResolver = require("./users.js");

module.exports = {
  Query: {
    ...postResolver.Query,
  },
};
