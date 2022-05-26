import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import {  schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
    
    public async signupShow( { view }: HttpContextContract){
        return view.render('auth/signup')
    }

    
    public async signup( { request, response, session }: HttpContextContract){
        
        const userSchema = schema.create({
            username: schema.string ({ trim: true }, [rules.unique({table: 'users', column: 'username', caseInsensitive: true})]),
            email: schema.string ({ trim: true }, [rules.email(), rules.unique({table: 'users', column: 'email', caseInsensitive: true})]),
            password: schema.string( {}, [rules.minLength(8)])          
        })

        const data = await request.validate( {
            schema: userSchema,
            messages: {
                'username.unique': 'Username already exists.',
                'email.unique': 'Already used or invalid email address.',
                'password.minLength' : 'Password needs to be at least 8 characters long.'
            }       
         })
        
        try {
            await User.create(data) 
        } catch (signupError) {
            session.flash({signupError: "Nesto nije uredu."});            
            return response.redirect().back()
        }        

        
        return response.redirect('/login')
    }


    public async loginShow( {view}: HttpContextContract){
        return view.render('auth/login')
    }


    public async login( {request, response, auth, session}: HttpContextContract){
        
        const { uid, password } = request.only(['uid', 'password'])

        try {
            await auth.attempt(uid, password)
        } catch (error) {
            session.flash({loginError: 'Username or password incorrect.'});            
            return response.redirect().back()
        }

        return response.redirect('/')
    }

    
    public async logout( { response, auth }: HttpContextContract) {
        
        await auth.logout();
        return response.redirect().toRoute('auth.login.show')
    }
}
