// Selecting Elements --->

const comment = document.querySelector("#comments")
const commentImage = document.querySelector("#comments > .icons")
const commentText = document.querySelector("#comments > .text")

const retweet = document.querySelector("#retweets")
const retweetImages = document.querySelector("#retweets > .icons")
const retweetImage1 = document.querySelector("#retweet1")
const retweetImage2 = document.querySelector("#retweet2")
const retweetText = document.querySelector("#retweets > .text")

const like = document.querySelector("#like")
const likeImages = document.querySelector("#like > .icons")
const likeImage1 = document.querySelector("#heart1")
const likeImage2 = document.querySelector("#heart2")
const likeImage3 = document.querySelector("#heart3")
likeImage3.style.visibility = "hidden"
const likeText = document.querySelector("#like > .text")

const bookmark = document.querySelector("#bookmark")
const bookmarkImages = document.querySelector("#bookmark > .icons")
const bookmarkImage1 = document.querySelector("#bookmark1")
const bookmarkImage2 = document.querySelector("#bookmark2")
const bookmarkImage3 = document.querySelector("#bookmark3")
bookmarkImage3.style.visibility = "hidden"
const bookmarkText = document.querySelector("#bookmark > .text")


// Hover effects --->

// hovering on each container lights up both the background and the text

comment.addEventListener("mouseover", () => {
    commentImage.style.backgroundColor = "#031018"
    commentText.style.color = "#1D9BF0"
})
comment.addEventListener("mouseout", () => {
    commentImage.style.backgroundColor = "black"
    commentText.style.color = "#71767B"
})

retweet.addEventListener("mouseover", () => {
    retweetImages.style.backgroundColor = "#031018"
    retweetImage1.style.zIndex = "5"
    retweetImage2.style.zIndex = "10"
    retweetText.style.color = "#00BA7C"
})
retweet.addEventListener("mouseout", () => {
    retweetImages.style.backgroundColor = "black"
    retweetImage1.style.zIndex = "10"
    retweetImage2.style.zIndex = "5"
    retweetText.style.color = "#71767B"
})

like.addEventListener("mouseover", () => {
    likeImages.style.backgroundColor = "#031018"
    likeImage1.style.zIndex = "5"
    likeImage2.style.zIndex = "10"
    likeText.style.color = "#b30a5c"
})
like.addEventListener("mouseout", () => {
    likeImages.style.backgroundColor = "black"
    likeImage1.style.zIndex = "10"
    likeImage2.style.zIndex = "5"
    likeText.style.color = "#71767B"
})

// clicking the like button will make the full-heart image dominant and increase the number of likes by 1

like.addEventListener("click", () => {
    if (likeImage3.style.visibility === "hidden") {
        likeImage3.style.visibility = "visible"
        likeImage3.style.zIndex = "15"
        likeText.textContent = "129"
        likeText.style.color = "#b30a5c"
        like.setAttribute("title", "Unlike")
    } else if (likeImage3.style.visibility === "visible"){
        likeImage3.style.visibility = "hidden"
        likeImage3.style.zIndex = "1"
        likeText.textContent = "128"
        likeText.style.color = "#71767B"
        like.setAttribute("title", "Like")
    }
})


bookmark.addEventListener("mouseover", () => {
    bookmarkImages.style.backgroundColor = "#031018"
    bookmarkImage1.style.zIndex = "5"
    bookmarkImage2.style.zIndex = "10"
    bookmarkText.style.color = "#1D9BF0"
})
bookmark.addEventListener("mouseout", () => {
    bookmarkImages.style.backgroundColor = "black"
    bookmarkImage1.style.zIndex = "10"
    bookmarkImage2.style.zIndex = "5"
    bookmarkText.style.color = "#71767B"
})

// clicking the bookmark button will make the full-bookmark image dominant and increase the number of bookmarks by 1

bookmark.addEventListener("click", () => {
    if (bookmarkImage3.style.visibility === "hidden") {
        bookmarkImage3.style.visibility = "visible"
        bookmarkText.textContent = "21"
        bookmarkText.style.color = "#1D9BF0"
        bookmarkImage1.style.visibility = "hidden"
    } else if (bookmarkImage3.style.visibility === "visible"){
        bookmarkImage3.style.visibility = "hidden"
        bookmarkText.textContent = "20"
        bookmarkText.style.color = "#71767B"
        bookmarkImage1.style.visibility = "visible"
    }
})