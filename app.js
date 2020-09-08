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
    Author     : johnc
*/

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
//
//document.querySelectorAll("img").forEach(item => {
//  item.addEventListener('mouseover', event => {
//      alert("df");
//   });
//});