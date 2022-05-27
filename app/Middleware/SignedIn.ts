// @ts-nocheck
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SignedIn {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    let loggedIn = false

    try {
      if(await auth.check()){
        loggedIn = true
      }        
      
    } catch(e){
    }

    if (loggedIn == false) {
      return response.redirect('/login');
    }

    await next()
  }
}
