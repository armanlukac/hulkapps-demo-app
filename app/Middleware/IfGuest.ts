import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IfGuest {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    let loggedIn = false

    try {
    loggedIn = await auth.check()
    //console.log(loggedIn)  
    } catch(e){
    }

    if (loggedIn) {
      return response.redirect('/');
    }

    await next()
  }
}
