
let team1shots = document.querySelector("#teamone-numshots")
let team1goals = document.querySelector("#teamone-numgoals")
let team1shootbutton = document.querySelector("#teamone-shoot-button")
team1shootbutton.addEventListener("click", function(){
 console.log("cliked")
 let newteam1 = Number(team1shots.innerHTML)+1;
 team1shots.innerHTML = newteam1
 let maths = Math.random();
 if (maths < 0.8){
     console.log("hi")
    // team1shots.succeed
  let newgoals = Number(team1goals.innerHTML)+1;
  team1goals.innerHTML = newgoals

 }
    
})
let team2shots = document.querySelector("#teamtwo-numshots")
let team2goals = document.querySelector("#teamtwo-numgoals")
let team2shootbutton = document.querySelector("#teamtwo-shoot-button")
team2shootbutton.addEventListener("click", function(){
    console.log("cliked")
    let newteam2 = Number(team2shots.innerHTML)+1
    team2shots.innerHTML = newteam2
let maths1 = Math.random();
  if (maths1 > 0.8){
    console.log("Bye")
    //team2shots.failed
    let newgoals2 = Number(team2goals.innerHTML)-1;
    team2goals.innerHTML = newgoals2

}
})
let resets = document.querySelector("#num-resets")
let resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", function(){
  console.log("great")
    let newresets = Number(resets.innerHTML)+1
    resets.innerHTML = newresets
})

 
    