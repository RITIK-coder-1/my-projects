let myAPI = fetch("https://type.fit/api/quotes")

myAPI
.then(response => {
    return response.json()
})
.then(data => {
    const button = document.getElementById("button")
    const quote = document.querySelector("blockquote")
    const author = document.querySelector("span")

    button.addEventListener("click", () => {
        quote.textContent = `"${data[generateRandomNumber()].text}"`

        const authorString = data[generateRandomNumber()].author
        if (authorString.includes("type.fit")) {
            author.textContent = `-- ${authorString.substring(0, authorString.length - 10)}`
        } // the default value is "author name, type.fit", thus to discard "type.fit" I wrote this!

        else {
            author.textContent = `${authorString}`
        }
    })

    console.log(data)
})

function generateRandomNumber() {
    return Math.floor(Math.random()*16)
}
