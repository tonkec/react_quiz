# Quiz Game
A simple quiz built with React 18.2.0. 

### What is this project about?
This project is a take home test project for one of the companies I applied to. 
### How To Start A Project?
 - install all dependencies using `yarn install`
 - create `.env` file
    - add `REACT_APP_API_URL=https://opentdb.com/api.php` to the `.env` file.
 - start the server with `yarn start`
 - open server and visit `http://localhost:3000/`

### QuestionsPage component
This component handles all of the logic for state of questions and their routes.

### Typescript
I was not sure should this project be coded with Typescript, but I added types to the QuestionsPage and ScorePage. You can see types on the [types_branch](https://github.com/tonkec/react_quiz/tree/typescript)

### Features left to implement
I think this project would be improved if I add some cool things like:
 - testing
 - linters

### Git branches
Since this is a simple project, I used only two branches, but in real life I would use Git flow, that means I would separate branches by features. There is a `master` branch and `typescript` branch with typescript code.