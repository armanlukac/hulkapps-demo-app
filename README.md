// FRAMEWORK
This web app uses Node.JS framework called AdonisJS 5.0. 
AdonisJS is written in JavaScript and/or TypeScript. 
Newest edition utilizes advantages of TypeScript, therefore this app is written in TypeScript.

// DATABASE
PostgreSQL is used for database purposes.

// FRONTEND
AdonisJS can be combined with any frontend framework compatible with Node.JS, however for the purpose of this small app frontend is made using Adonis' own templating engine, called edge. For styling of components, I have used a fast and flexible Tailwind CSS.

// INSTALATION (https://docs.adonisjs.com/guides/)

1. Node.JS and PostgreSQL must be installed.

2. Create Adonis.JS app using CLI: npm init adonis-ts-app@latest hulkapps_demo_app

3. Install all dependencies: npm install npm-install-all

4. Connect app to database -> EDIT .env file -> 
		PG_USER=
		PG_PASSWORD=
		PG_DB_NAME=
	Above mentioned data must be added according to your Postgres database's username, password and database name for this project.

5. Create tables in database by running migrations. CLI command: node ace migration:run

6. Populate database tables by running seeders. CLI command: node ace db:seed

8. App contains simple authentication, which is ready to be extended to authorization, however in this example only login authentiaction is used.
IMPORTANT - 2 users have been created, whose data can be found in Database -> Seeders -> 02Users.ts

9. To run the app, use CLI command: node ace serve --watch

// USAGE & APP REQUIREMENTS 
Register new user or login with existing credentials.
Login using credentials provided in step 8.
Homepage displays all posts already made, 2 per page, as requested. 
By pressing on title of the post, new page is represented with more details about that post.
If you are the author of the selected post, you will have option to Edit or Delete the post.
By pressing Edit, you will be presented with a page that gives you option to change any part of movie details.
By pressing Save changes, inputed changes will be saved to database and you will be redirected back to homepage.
Delete button will work only if there are no comments on the post and will delete the post. If there are any comments, post will not be deleted.
Middleware is used for all pages, so only registered users can view, edit, create a post or comment.
Comment can be added to the post when you view particular post, using the form below post (and all it's comments).
Anyone can add a comment to any post.

For any questions or further explanations, I am available through email (arman.lukac1@gmail.com) or phone (+38761/923-891)