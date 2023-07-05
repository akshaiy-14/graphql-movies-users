const { usersList, moviesList } = require("../fakeData.js");

const resolvers = {
    Query: {
        // USER RESOLVERS
        users() {
            return usersList;
        },
        user(_, { id }) {
            const u = usersList.find((user) => user.id === id);
            return u;
        },

        // MOVIE RESOLVERS
        movies() {
            return moviesList;
        },
        movie(_, {id}) {
            const m = moviesList.find((movie) => movie.id === id);
            return m;
        }
    },

    User: {

        // FAV MOVIES RESOLVER
        favMovies(user) {
          if (user.age > 40) {
            const fm = moviesList.filter((movie) => movie.year < 2009);
            return fm;
          } else {
            return moviesList;
          }
        },
    },
};

module.exports = { resolvers }