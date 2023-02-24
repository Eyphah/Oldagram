const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let mainPage = document.getElementById("main-page")
let postStr = ``

function renderPage(array){
    for (let i=0; i<array.length; i++){
        postStr+=`<div class="profile">
                    <img class="profile-pic" src="${posts[i].avatar}" alt="van gogh portrait">
                    <div class="display-info">
                        <h3 class="name">${posts[i].name}</h3>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>
                <img class="post" src="${posts[i].post}" alt="another portrait of ${posts[i].name}>
                <div class="interactions">
                    <img class="inter-pics" id="like-btn" src="images/icon-heart.png" alt="like button">
                    <img class="inter-pics" src="images/icon-comment.png" alt="comment button">
                    <img class="inter-pics" src="images/icon-dm.png" alt="dm button">
                </div>
                <h3 class="likes"><span id="like-nbr">${posts[i].likes}</span> likes</h3>
                <div class="comments">
                    <p class="comment"><span class="username">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
                <div class="separation"></div>`
    }
    mainPage.innerHTML=postStr
}


renderPage(posts)

