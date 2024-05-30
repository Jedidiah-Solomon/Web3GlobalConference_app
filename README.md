# Web3GlobalConference_app

**Details:**
Web 3 Global Conference is an annual event hosted by web3GlobalConference for insights and networking of the current in the Web3 space.
This is pioneered by Jude Anumudu, a Nigeria who base in Lagos.

### Website

[https://web3globalconference.com](https://web3globalconference.onrender.com/)

#### Commands Used

1. Install Vite `npm create vite@latest my-conference-website --template react`

2. Navigate into the project directory `cd my-conference-website`

3. Install dependencies `npm install`

4. Install webpack and loaders `npm install webpack webpack-cli webpack-dev-server babel-loader css-loader style-loader file-loader html-webpack-plugin clean-webpack-plugin --save-dev`
5. Run the build command to generate the dist directory: `npm run build`
6. Temporarily remove dist from .gitignore to allow it to be committed.
7. Add and commit the dist directory:

```

git add dist
git commit -m "Add build directory for deployment"
git push origin main

```

8. Deploy to Vercel: Vercel will automatically detect your project settings. Ensure it uses the dist directory for deployment.
9. Re-add dist to .gitignore After Deployment.
10. Commit the change:

```

git add .gitignore
git commit -m "Re-add dist to .gitignore"
git push origin main

```

11. This process ensures your dist directory is included for deployment but remains excluded during development to avoid unnecessary clutter and potential conflicts.

#### ESLINT

1. Install
   `npm install eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh --save-dev`
2. Check for errors
   ``npx eslint`

   #### Benefits of Using ESLint

3. Identify Syntax Errors: Catch common mistakes and potential errors in your code.
4. Enforce Coding Standards: Maintain a consistent coding style across your project.
5. Best Practices: Ensure best practices are followed in your JavaScript and React code.
6. Automated Fixes: Automatically fix many issues with `eslint --fix`

### Express Server to route all files from dist/

1. `node server.js` or `npm start`,
2. `http://localhost:3000/terms`

```

```
