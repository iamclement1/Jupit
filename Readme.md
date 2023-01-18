<h1 align="center">Jupit</h4>



## Introduction
Jupit is a place for everyone who want to simply buy and sell digital assets.

## Technologies Used
- Frontend Development
    - HTML
    - CSS
    - Tailwind
    - WebHook
    - React

## 🏗️ How to Set up `Jupit` for Development

- You want to contribute to the `Jupit` repo in general.
<!-- - You want to use it as part of your own personal project. -->

### Prerequisite

In order to setup this project, you need prior knowledge on how to;
  - Use an IDE of your choice (VSCode, Sublime, Atom, etc)
  - Basic knowledge on how to use Github (fork, clone, pull, push)

Here is a quick overview on how to setup the `Jupit` repository as a contributor:

- ### 🍴 Fork and Clone the Repository
  
  - First, you need to fork the `Jupit` repository by clicking the `Fork` button on the top right corner of the repository. 
  - Next, you clone the forked repository by clicking the `code` button and then selecting the clone option.
  
  ⚠️ Please change the directory after cloning the repository using the ` cd <folder-name> ` command. In our case, the command to be ran is  `cd jupit`

  - ### ⬇️ Install Dependencies
   Next, install the dependencies by running the following command in the folder containing the  `Jupit` repository:
   ```bash
   npm install 
   ```
   Or
   ```bash
   yarn install 
   ```
   > **Note**: `Jupit` runs on React 18 and bootstrapped with vite. However, some of the dependencies are yet to upgrade to version 18. So please use the following command when you face difficulties installing the dependencies.
   ```bash
   npm install --legacy-peer-deps
   ```
- ### 🦄 Start the Development Mode

  Use the following command to start the app in the development mode:

  ```bash
  npm run dev
  ```

  It runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

  The page will reload when you make changes. You may also see any lint errors in the console.

- ### 🧱 Build the App for Production

  Use the following command to build the app for production:

  ```bash
  npm run build
  ```

  THis command builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

- ### 🚀 Deploy

  You can deploy the app to `Vercel` or `Netlify` with a single click.
