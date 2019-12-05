## Moodkit

## Github Repo
https://github.com/YoussrAbouYoussif/MoodKit.git

## Project Idea
Our project is about giving the user a list of activities to be done based on his/her mood through a quiz 
that the user needs to take at the beginning.

## Dependencies used
Client side:
    1. @material-ui/core:- used for implementing google's material design.
    2. @material-ui/icons:- used for displaying material ui icons.
    3. axios:- used for performing HTTP requests to the database.
    4. bootstrap:- used for designing websites faster and easier.
    5. css:- used for designing the website.
    6. firebase:- used for integration with google for google sign in.
    7. jquery:- used for making it easier to use JavaScript on the websites.
    8. jwt-decode:- used for decoding jwt tokens.
    9. material-ui:- used for the designing the website in a better way.
    10. materialize-css:- used for styling the website.
    11. mdbreact:- used for styling the website.
    12. prop-types:- used for register and login.
    13. react:- the application itself.
    14. react-bootstrap:- used for designing the website.
    15. react-dom:- used for providing DOM-specific methods.
    16. react-firebaseui:- used for styling the google sign in button.
    17. react-flippy:- used for the flipping cards.
    18. react-multiple-choice:- used for the quiz's multiple choices.
    19. react-redux:- state management tool.
    20. react-router-dom:- keeps the app's UI and URL in sync.
    21. react-scripts:- a set of scripts for creating react app.
    22. redux:- state management tool.
    23. redux-thunk:- middleware.
    24. sweetalert:- used for the popup.

Server side:
    1. axios:- used for performing HTTP requests to the database.
    2. bcrypt:- used for hashing/encrypting the passwords.
    3. bcryptjs:-  used for hashing/encrypting the passwords.
    4. cors:- used for adding additional HTTP headers to tell browsers to give a web application running at one origin, access           to selected resources from a different origin.
    5. express:- web application framework.
    6. joi:- used in the validations.
    7. joi-objectid:- used for the validations also.
    8. jsonwebtoken:- used for taking the token after logging in.
    9. mongoose:- used for mongoDB.
    10. mongoose-type-url:- used for mongoDB URL.
    11. passport:- used for authentication.
    12. passport-jwt:- used for authentication.
    13. passport-local:- used for authentication.

## Config files
Our project has 2 config files:
    1. In the backend, 
        I) a file containing the connection to mongoDB
            a)keys
            b)keys_dev
            c)keys_production
        II) a file containing passport for authentication
            a)passport
    2. In the frontend, a file contatining the connection to firebase
        a)firebaseAuth

## Docker
Our projet has:-
    I) Dockerfile in the server side:-
        used to build the image of the backend side.
    II) Dockerfile in the client side:-
        used to build the image of the frontend side.
    II) docker-compose.yml:- 
        used to build the three containers, one for the server side (backend), one for the client side
        (frontend) and one for mongoDB.
To build docker:-
    docker-compose build
To run docker:-
    docker-compose up

## Available Scripts
In the project directory, you can run:

### 'node index.js'

Runs the app locally.
Runs on localhost:5000 and to run backend and frontend together load (http://localhost:3000)

-To run the backend: 
    1. Go to the directory
    2. cd server
    3. node index.js

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

-To run the frontend:
    1. Go the directory
    2. cd client
    3. npm start

