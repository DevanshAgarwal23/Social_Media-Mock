 # Social Media Sample Project

## Database setup
```shell
    $ mysql -u root -p
```
```mysql
    CREATE DATABASE socialmediadb;
    CREATE USER socialuser IDENTIFIED WITH mysql_native_password BY 'socialpass';
    GRANT ALL PRIVILEGES ON socialmediadb.* TO socialuser;
    FLUSH PRIVILEGES;
```

## Project Structure

### Server Side
```shell
    src
    ├── controllers         # function to connect to database(db)
    ├── db                  # database connection and model defination
    ├── public              # html/css/js files for frontend part
    ├── routes              # middlewares(route wise)
    │   ├── posts
    │   └── users
    └── utils               # util functions for the project
```
### Client Side
```shell
    src/public 
    ├── app                                 # our own frontend js code 
    │   └── social-common.js
    ├── components                          # our own html snippets
    │   └── navbar.html
    ├── css                                 # css libraries we are using
    │   └── bootstrap.css
    ├── fonts                               # fonts we are using
    │   ├── muli.css
    │   ├── Muli-Italic.woff2
    │   └── Muli.woff2
    ├── index.html                          # home / first page
    └── js                                  # js libraries we are using 
        ├── bootstrap.js
        ├── jquery-3.5.1.js
        └── popper.js
```

## Business Logic
 
### Users
 
1. **create users**
    this will create a new user with a random username.  
    
    ***( In this project, we have user-identification but user-authorization and user-authentication are not there )***


### Posts

1. **create post**
    this will create a new post, required fields are  

    - username (the author of this post)
    - title 
    - body

2. **show all posts**
    lits all xisting posts, we should have following filtering  support  

    - filter by username
    - filter by query contained in title (search by title)

3. **Edit post**  'TDB'

4. **Delete post** 'TBD'


### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**


## API Documentation

### `users`

1. `POST /users`

    Creates a new user with random username and an userId

2. `GET /users/{userid}`

    Get an user with a given userId (if exists)

3. `GET /users/{username}`

    Get an user with given username (if exists)

## `posts`

1. `POST /posts`

    Creates new posts.
    Fields required in body -
    
    ```
    userID - Foreign key for the posts table, which links with users table (basically tells about the author of post) 
    title  - Title osf the post given by author
    body   - The main body of the post
    ```

2. `GET /posts`

    Get all posts by everyone