/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
*/
/* 
    Created on : 26-Aug-2020, 5:14:51 PM
    Author:  johnc
*/


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var headerSentences = document.getElementsByClassName("header-sentence");

document.addEventListener("DOMContentLoaded",async function() {
    var i;
    for( i = 0; i < headerSentences.length ; i++){
            headerSentences[i].style.opacity ="1";
            headerSentences[i].style.top ="150px";
            await sleep(300+ i*300);
    }
});



var prevScrollpos = window.pageYOffset;
var navBar = document.getElementById("navbar");

window.onscroll = function() {
    // navigation bar hidden on scroll down
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos | currentScrollPos < 40) {
        navBar.style.top = "0";
      }
      else {
        navBar.style.top = "-110px";
      }
      if(currentScrollPos < 10){
          navBar.style.boxShadow = "none";
      }
      else{
          navBar.style.boxShadow = "0.5px 0.5px 50px 5px rgba(0,0,0,0.5)";
      }
      prevScrollpos = currentScrollPos;
};





// Load more projects for user when button clicked
var unloadedProjects = document.getElementsByClassName("unloaded");
var projectsButton = document.getElementById("load-projects");
var unloadedLength = unloadedProjects.length;

function loadProjects(){
    
    projectsButton.style.display = "none";
    var i = 0;
    while(unloadedProjects.length !== 0){
        unloadedProjects[0].classList.remove("unloaded");
    }
}

