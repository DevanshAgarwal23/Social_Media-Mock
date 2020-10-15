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
    ├── controllers             # function to connect to db
    │   ├── comments.js
    │   ├── posts.js
    │   └── users.js
    ├── db                      # database connection and model defination 
    │   └── models.js
    ├── public                  # html/css/js files of frontend part
    │   └── index.html
    ├── routes                  # middlewares (route wise)
    │   ├── posts
    │   │   ├── comments.js
    │   │   └── index.js
    │   └── users
    │       └── index.js
    ├── server.js               # express server 
    └── utils                   # util function of the project
        └── username.js

```


## Business Logic
 
### Users
 
1. **create users**
    this will create a new user with a random username

### Posts

1. **create post**
    this will create a new post, required fields are 
    -username (the author of this post)
    -title 
    -body

2. **show all posts**
    lits all xisting posts, we should have following filtering  support 
    -filter by username
    -filter by query contained in title (search by title)

3. **Edit post**  'TDB'

4. **Delete post** 'TBD'


### Comments

1. **show all comments (of a user)**

2. **show all comments (under a post)**

3. **add a comment**