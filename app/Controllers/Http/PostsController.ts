// @ts-ignore
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import Comment from 'App/Models/Comment'
import Post from 'App/Models/Post'
import User from 'App/Models/User';


export default class PostsController {
        
    public async home( { view, params }: HttpContextContract){
        const posts = await Post.query().preload('comments');        
        const postsToShow = [];        
        const n = 1;
        
        interface PostObject {
            [key: string]: any
        }

        for (let i=0; i<2; i++){
            if (posts.at(i+n-1) != undefined) {
                                
                let comments = await Comment.query().where('post_id', [posts.at(i+n-1).id].toString())
                let author = await User.query().where('id', [posts.at(i+n-1).author].toString())
                                
                var obj: PostObject = posts.at(i+n-1)
                obj.commentCount = Object.keys(comments).length;                
                obj.author = author.at(0)

                postsToShow.push(obj)                
            }                
        }                           

        return view.render('posts', {posts: postsToShow})
    }



    public async home2 ( { view, request }: HttpContextContract) {
        const posts = await Post.query().preload('comments');        
        const postsToShow = [];        
        const n = parseInt(request.all().page);      
        
        interface PostObject {
            [key: string]: any
        }    

        for (let i=0; i<2; i++){
            if (posts.at(i+n-1) != undefined) {
                                
                let comments = await Comment.query().where('post_id', [posts.at(i+n-1).id].toString())
                let author = await User.query().where('id', [posts.at(i+n-1).author].toString())
                                
                var obj: PostObject = posts.at(i+n-1)
                obj.commentCount = Object.keys(comments).length;                
                obj.author = author.at(0)

                postsToShow.push(obj)                
            }                
        }        

        return view.render('posts', {posts: postsToShow})
    }



    public async addPost( {view}: HttpContextContract ){
        return view.render('addPost')
    }


    public async create({ request, response }: HttpContextContract) {        

        const PostSchema = schema.create({
            title: schema.string ({ trim: true }),
            description: schema.string(),
            author: schema.number()            
        })

        const data = await request.validate( {
            schema: PostSchema,
            messages: {                
                'title.required' : '* Required field.',
                'description.required' : '* Required field.'
            }
         })
        
        await Post.create(data)        
        return response.redirect('/')
    }


    public async edit({ auth, params, view, response } :HttpContextContract) {        
        const post = await Post.query().where('id', [params.id].toString());
        
        // Check whether this User is author of the post.
        if (post.at(0).author.id == auth.user.id) {
            return response.redirect('/');
        } 
            
        return view.render('editPost', {post});                 
    }


    public async update ({ auth, response, request, session, params} :HttpContextContract) {
        const post = await Post.findOrFail(params.id);
                
        if (post.author != auth.user.id) {
            response.redirect('/posts')
        } else {
            post.title = request.all().title;
            post.description = request.all().description;

            await post.save();

            session.flash({ message: 'Changes saved.' });
            return response.redirect('/');
        }              
    }


    public async show ({ view, params, auth } :HttpContextContract){        
        const post = await Post.query().where('id', [params.id].toString()).preload('comments');        
        const postsToShow = [];
        const comments = await Comment.query().where('post_id', [params.id].toString());
        const commentsToShow = [];
                
        interface PostObject {
            [key: string]: any
        }        
                                        
        let author = await User.query().where('id', [post.at(0).author].toString())                                
        var obj: PostObject = post.at(0)        
        obj.author = author.at(0)
        postsToShow.push(obj)
        

        for (let i=0; i<Object.keys(comments).length; i++){
            var obj2: PostObject = comments.at(i)

            let author = await User.query().where('id', [comments.at(i).author].toString())
            obj2.author = author.at(0)
            commentsToShow.push(obj2)
        }

        if (post.at(0).author.id == auth.user.id){
            return view.render('showMyPost', { post: postsToShow, comments: commentsToShow });
        } 
                
        return view.render('showPost', { post: postsToShow, comments: commentsToShow });                
    }


    public async delete ({ auth, response, params } :HttpContextContract){
        const post = await Post.findOrFail(params.id)
        const comments = await Comment.query().where('post_id', [post.id].toString())        

        if (post.author != auth.user.id){
            response.redirect('back')
        }

        if (post.author == auth.user.id) {
            if (Object.keys(comments).length != 0) {                
                response.redirect('/');           
            } else {
                await post.delete();
                response.redirect('/');
            }
        }              
    }

}
