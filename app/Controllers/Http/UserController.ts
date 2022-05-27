// @ts-ignore
import Hash from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";

export default class UserController {
    
    public async changePasswordShow({view}: HttpContextContract){        
        return view.render('changePass')
    }    

    public async changePassword({ request, auth, response, session }: HttpContextContract){
        const details = request.all();
        console.log(details)
        const user = await User.find(auth.user?.id);
        
        if ( details.pass != null &&  details.newPass != null && details.newPass2 != null){
            if (await Hash.verify(user.password, details.pass) && details.newPass == details.newPass2 && details.newPass.length > 7){
                user.password = details.newPass;
    
                await user?.save();
                return response.redirect('/logout')
            } else 
            session.flash({passwordError: 'Try again, no worries, even the best make mistakes.'})
            return response.redirect('back')
        } else
            session.flash({passwordError: 'Did you forget something?'})
            return response.redirect('back')
    }   


    public async delete ({response, params, bouncer}){
        await bouncer.authorize('adminActions')
        const user = await User.findOrFail(params.id)

        await user.delete()

        response.redirect('back')
    }


}
