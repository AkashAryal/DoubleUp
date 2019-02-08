'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Admin {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, response, auth, session }, next) {
    // call next to advance the request
    if (!auth.user) {
      session.flash({ admin: "You're not authenticated! ヽ( `д´*)ノ" });
      return response.redirect('/register')
    }

    await next()
  }
}

module.exports = Admin
