# Login Test

Login Test for proficiency in React, React-Redux

## Requirements

You will need React-Redux-Firebase & Firebase for this project (not included in package.json)

## Goal

The goal of the test is to provide the user the ability to sign up (create a new account), sign in (after account is created), reset password & finally signout. All user credentials will be stored in Firebase and finally user should not be able to go to profile page unless they are authenticated (this is very important!).

## Instructions

1. Go to [http://firebase.com/] and make an account (this is free).
2. Create a new project in Firebase.com (add Project), enter a project name, disable Google Analytics for your project.
3. Click Create Project.
4. Once project is created, go to console -> Develop -> Authentication -> Set up sign-in Method -> Enable Email/Password Authentication.
5. Now you are ready to set up your project to firebase.
6. Set up SignUp, Login, Reset Password & SignOut in your project(using Redux is mandatory).
7. The components have been provided to you in src>pages>auth for SignUp, Login & reset.
8. For Signout there is a signout button in src>components>header
9. Please add validation rules for each component. example Password must be atleast 8 chars, email is a required input etc.
10.Profile page is src>pages>pages>profile (remember user can only access this once they are authenticated)

Good Luck! Feel free to use all material accessible to you to accomplish this task.

## Prerequisites

You'll need to have Node 12.0.0 or up. We recommend upgrading to the LTS version of NodeJS available at [https://nodejs.org/](https://nodejs.org/). You can also use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

## Quick Start

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
# login_test
