const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
plus.addEventListener("click", incrementCounter)
minus.addEventListener("click", decrementCounter)
const heart = document.getElementById('heart')
heart.addEventListener("click", addLike)
const pause = document.getElementById('pause')
pause.addEventListener("click", toPause)
const likes = document.querySelector('ul.likes')
const commentForm = document.querySelector('#comment-form')
commentForm.addEventListener("submit", hitSubmit)
const comments = document.querySelector('#list')
let paused = false
let numberTracker = {}
let interval = setInterval(incrementCounter, 1000)



function incrementCounter(e){
    counter.innerText = parseInt(counter.innerText) + 1
}

function decrementCounter(){
    counter.innerText = parseInt(counter.innerText) - 1
}

function toPause(){
    paused = !paused
    if (paused) {
      clearInterval(interval)
      pause.innerText = "resume"
    } else {
      interval = setInterval(incrementCounter, 10000)
      pause.innerText = "pause"
    }
}

function addLike(){
    let second = counter.innerText
    numberTracker[second] = numberTracker[second] || 0
    numberTracker[second] += 1
    generateLikes()
}
      
function generateLikes(){
    likes.innerHTML = ""
    for (let key in numberTracker){
        const li = document.createElement("li")
        li.innerText = `${key} has been liked ${numberTracker[key]} times.`
        likes.append(li)
        }
    }

function hitSubmit(e){
    e.preventDefault()
    const comment = e.target.querySelector("input").value
    const li = document.createElement("li")
    li.innerText = comment
    comments.append(li)
    e.target.reset()
}
    
    
