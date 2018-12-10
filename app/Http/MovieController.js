'use strict'
const PopcorntimeService = use('App/Services/PopcorntimeService')

class MovieController {
  async index({params}) {
    const {page} = params;
    return await PopcorntimeService.getMovies(page);
  }

  async getMovieById({params}) {
    const {id} = params;
    return await PopcorntimeService.getMovieById(id)
  }
}

module.exports = MovieController
