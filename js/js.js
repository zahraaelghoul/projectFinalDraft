// const randomNumber = Math.floor(Math.random() * 100) + 1
// console.log('Random Number', randomNumber)

// document.querySelector("#submitGuess").addEventListener("click", function() {
//     let myGuess = guess.value
//     var prnt
//     if (myGuess === randomNumber) {alert("You got it right!")} 
//     else if (myGuess > randomNumber) 
//     {alert("Your guess was " + myGuess + ". That's too high. Try Again!")} 
//     else if (myGuess < randomNumber) 
//     {alert("Your guess was " + myGuess + ". That's too low. Try Again!")}
// })

const mitski_lyrics = [
    "Don't wait for me, I can't come",
    "I always knew the world moves on. I just didn't know it would go without me", 
    "I glow pink in the night in my room. I've been blossoming alone over you",
    "Maybe when you tell your friends, you can tell them what you saw in me, and not how I turned out to be",
    "I cannot bear you a son, but I will try. For if I am not yours, what am I?",
    "I don't know what to do without you, I don't know where to put my hands",
    "And did you know the liberty bell is a replica, silently housed in its original walls",
    "You only love me when we're all alone",
    "And you're an all-American boy, I guess I couldn't help trying to be your best American girl",
    "I work better under a deadline",
    "I am stronger than you give me credit for",
    "Cause we've tried hungry and we've tried full and nothing seems enough"
];

const mitski_songs = [
    "Your Best American Girl",
    "Working for the Knife", 
    "Pink in the Night",
    "Goodbye, My Danish Sweetheart",
    "Wife", 
    "Francis Forever", 
    "Last Words of a Shooting Star",
    "A Loving Feeling",
    "My Body’s Made of Crushed Little Stars", 
    "I Don't Smoke", 
    "Townie"
];

// var myGuess = guess.value.toLowerCase();
var myGuess
var randomNumber
var lyric 
var song

randomNumber = Math.floor(Math.random() * 10) + 1
console.log('Random Number', randomNumber)
lyric = mitski_lyrics[randomNumber]
songReal = mitski_songs[randomNumber]
song = songReal.toLowerCase()
console.log(song, lyric)

document.querySelector("#lyric").textContent = lyric

console.log(lyric)

document.querySelector("#submitGuess").addEventListener("click", function() {
    myGuess = guess.value
    myGuess = myGuess.toLowerCase()

    if (myGuess == song) 
        {
        alert("You got it right!")
        } 
    else if (myGuess === "exit") 
        {
        alert("The correct answer was: " + songReal)  
        }
    else if (myGuess !== song) 
        {
        alert("Not correct, please try again!")
        } 

}) 

// document.querySelector("#refresh").addEventListener("click", function() {

//     randomNumber = Math.floor(Math.random() * 5) + 1
//     console.log('Random Number', randomNumber)
//     lyric = mitski_lyrics[randomNumber]
//     song = mitski_songs[randomNumber]
//     console.log(song, lyric)
//     song = song.toLowerCase()
//     console.log(song, lyric)

//     document.querySelector("#lyric").textContent = lyric

//     console.log(lyric)

// })

