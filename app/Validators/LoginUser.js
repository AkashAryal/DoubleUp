'use strict'

class LoginUser {
  get rules() {
    return {
      "username": "min:6|required",
      "password": "required|min:6"
    }
  }

  get messages() {
    return {
      'min': "Gomen-nasai m(_　_)m, {{field}} needs to be at least 6 characters long",
      'required': 'Woah now, {{field}} is required'

    }
  }

  get validateAll() {
    return true
  }

  async fails(error) {
    this.ctx.session.withErrors(error).flashAll();
    return this.ctx.response.redirect('back');
  }
}

module.exports = LoginUser
