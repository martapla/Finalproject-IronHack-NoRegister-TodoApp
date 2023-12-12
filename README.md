
![mobile desktop demo](<Screenshot 2023-12-13 at 00.08.09.png>)

## 🌐 Live Demo

https://no-register-todo-app.vercel.app/

### This is a version of the Final Project without Register.

We have to build a To-do App with Vue.js that allows users to create an account, record tasks, edit them and mark them as complete. The app will be linked to a database, where all the user and task data will be stored.

### Project requirements:
* Have a repo on GitHub
* Commit your work at least once a day during the project development time
* Your app should be rendered in a browser
* Your app should be deployed online using a cloud service such as Vercel
* Your app should be your own design using CSS
* Your app should be Responsive: mobile,tablet and Desktop
* Your app should be fully integrated with a Supabase database using all CRUD operations
* You should use Vue’s Pinia to fully implement status handling
* You should handle any asynchronous operations using Promises or Async/await
* You should document the application’s features, configuration and technical specifications within a README file

### Deliverables:
The functionality should include:
* Authentication (sign up, sign in, sign out)
* A front-end that displays the user’s personal to-do list
* An ability to add new tasks
* An ability to edit existing tasks
* An ability to mark tasks as complete/incomplete
* An ability to delete existing tasks
* A store and a database that your app can call data from



# Vue.js

## Modules needed:
_Vue Router_
* You will need to set up a route for Dashboard and Auth

_Pinia_ (for our store)
* You will need to set up two user stores: user.js and task.js

## Tasks:
* Create a sign up/sign in screen that will be displayed when the user is not logged in
* Ensure that the signup form requests an email address, password and password confirmation from the user
* Ensure that the sign in form requests an email and a password from the user
* Create a page where after logging in, the user is shown the main app content
* The app should fetch all tasks from the logged-in user’s task list stored in Supabase

-----------------------------