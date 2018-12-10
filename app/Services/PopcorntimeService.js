const axios = require('axios')
const popcorntime = 'https://some.website'

const PopcorntimeService  = {
    async getMovies(page) {
        const {data} = await axios.get(`${popcorntime}/movies/${page}?sort=trending&order=-1`);
        return data;
    },

    async getMovieById(id) {
      const {data} = await axios.get(`${popcorntime}/movie/${id}`);
      return data;
    }
}

module.exports = PopcorntimeService
