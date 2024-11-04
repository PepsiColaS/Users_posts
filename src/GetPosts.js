export default async function GetPosts() {
    const usersLink = 'https://jsonplaceholder.typicode.com/users'
    const postsLink = 'https://jsonplaceholder.typicode.com/posts'

    //Array users
    const responceUsers = await fetch (usersLink)
    const dataUsers = await responceUsers.json()

    //Array posts
    const responcePosts = await fetch (postsLink)
    const dataPosts = await responcePosts.json()

    let posts = []
    dataUsers.forEach(element => {
        const UsersPost = dataPosts.filter(function (post) {
            if (post.userId === element.id){
                post.userName = element.name
                return true
            }
            return false
        }); 
        posts.push(...UsersPost); 
    });
    return (posts)
}