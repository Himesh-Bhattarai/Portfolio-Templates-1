// function theamChanger() {
//    const listOfTheam = ["Dark","light"]
//    let currentArreyInedx = 0;
//    document.getElementsByTagName("body").style = "Dark"
   

// }

// let typedElement = document.getElementsByClassName(".Elements").new Typed(".Elements") {
//    strings: [' Web Developer ', ' very dedicated toward my work.'],
//    typeSpeed: 100,
//    backSpeed: 100,
//    backDelay: 1000,
//    loop: true
// });
document.addEventListener('DOMContentLoaded', function() {
   let typed = new Typed('#Elements', {
       strings: [' Notes', 'Summary','Question Solutions'],
       typeSpeed: 100,
       backSpeed: 100,
       backDelay: 1000,
       loop: true
   });
});
const elementsArrey = ["red","blue","green"]
let element = document.getElementById("#Elements")
// let arreyIndex = 0;
// if(arreyIndex == 0){
//    let inp = console.log(elementsArrey,arreyIndex++)
// }
if (element) {
   element.style.color = 'red';
}