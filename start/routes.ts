import Route from '@ioc:Adonis/Core/Route'

// AUTH
Route.get('login', 'AuthController.loginShow').as('auth.login.show').middleware('ifGuest')
Route.post('login', 'AuthController.login').as('auth.login').middleware('ifGuest')
Route.get('logout', 'AuthController.logout').as('auth.logout')

Route.get('signup', 'AuthController.signupShow').middleware('ifGuest')
Route.post('signup', 'AuthController.signup').as('auth.signup').middleware('ifGuest')

Route.get('', 'PostsController.home').middleware('signedIn')
Route.get('posts', 'PostsController.home2').middleware('signedIn')
Route.get('addPost', 'PostsController.addPost').middleware('signedIn')
Route.post('addPost', 'PostsController.create').middleware('signedIn')
Route.get('editPost/:id', 'PostsController.edit').middleware('signedIn')
Route.post('editPost/:id', 'PostsController.update').middleware('signedIn')
Route.get('deletePost/:id', 'PostsController.delete').middleware('signedIn')
Route.get('post/:id', 'PostsController.show').middleware('signedIn')
Route.post('post/:id', 'CommentsController.create').middleware('signedIn')



