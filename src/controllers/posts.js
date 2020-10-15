const { Posts,Users } = require('../db/models')


async function createNewPost(userId,title,body) {
    const post = await Posts.create({
        title,
        body,
        userId
    })
    return post
}

/* 
*  showAllPosts({username: ''})
*  showAllPosts({title: ''})
*/
async function showAllPosts(query) {
    //todo: handel query params
    const posts = await Posts.findAll({
        include: [Users]
    })

    return posts
}

/* Test Code */

//async function task() {
    // console.log(
    //   await createNewPost(
    //     1,
    //     'This is a sample post',
    //     'Body of the post goes here'
    //   )
    // ),
    // console.log(
    //   await createNewPost(
    //     2,
    //     'Another sample post',
    //     'Some body example here as well'
    //   )
   // console.log(
    //   await createNewPost(
    //     1,
    //     'This is a sample post',
    //     'Body of the post goes here'
    //   )
    // ),
    // console.log(
    //   await createNewPost(
    //     2,
    //     'Another sample post',
    //     'Some body example here as well'
    //   )
    // )
//     const posts = await showAllPosts()
//     for (let p of posts) {
//       console.log(`${p.title}\n author: ${p.user.username}\n${p.body}\n==========\n`)
//     }
// }
//   task()

module.exports = {
    createNewPost,
    showAllPosts
}