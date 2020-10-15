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
```
    src
    ├── controllers         # function to connect to database(db)
    ├── db                  # database connection and model defination
    ├── public              # html/css/js files for frontend part
    ├── routes              # middlewares(route wise)
    │   ├── posts
    │   └── users
    └── utils               # util functions for the project
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