// @ts-nocheck
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from "App/Models/Comment"


export default class CommentsController {


    public async create({ request, response }: HttpContextContract) {        
        const comment = request.all();

        await Comment.create({
            content: comment.content,
            postId: comment.post_id,
            author: comment.author

        })
                        
        return response.redirect('back')
    }


}
