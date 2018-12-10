'use strict'

const {ioc} = use('@adonisjs/fold')
const {test, trait} = use('Test/Suite')('MovieController')
const sinon = require('sinon');
trait('Test/ApiClient')


test('we can get a single movie', async ({assert, client}) => {
  const getMovieById = sinon.fake.returns('lol');
  ioc.fake('App/Services/PopcorntimeService', () => {
    return {
      getMovieById
    }
  })

  const response = await client.get('/movie/1').end()

  response.assertStatus(200)
  response.assertText('lol')

  assert.isTrue(getMovieById.called)
  assert.equal(getMovieById.args[0][0], '1')

  ioc.restore()
})

test('we can get a page with movies', async ({assert, client}) => {
  const getMovies = sinon.fake.returns({name: "Avengers"});
  ioc.fake('App/Services/PopcorntimeService', () => {
    return {
      getMovies
    }
  })

  const response = await client.get('/movies/1').end()
  console.log(response.error);
  response.assertStatus(200)
  assert.isTrue(getMovies.called)
  assert.equal(getMovies.args[0][0], '1')

  ioc.restore()
})


