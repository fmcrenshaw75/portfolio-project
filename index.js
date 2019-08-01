// Import : Bring in the necessary Functional    components.
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// describes the current state of the SPA. We say that we pass'pieces of state'
const store = {
    'home': {
        'title': 'A New Web Developer'
    } ,
    'about': {
        'title': 'About Page'
    } ,
    'contact': {
        'title': 'Contact'
    }
};
// function declaration . Render is  used to re-render the page.

function render(state){
    console.log('state came in as:' , state);
    // We use funtion invocation that actually runs the function ans then 'returns' the markup so that it is properly rendered in the browser.
    document.querySelector('#root').innerHTML = `
${Navigation(state)}
${Header(state)}
 ${Main(state)}
   ${Footer(state)}
   `;
    const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

    navItems.forEach(function eventListenerAdder(navItem){
        navItem.addEventListener('click' , function clickHandler(event){
            event.preventDefault();
            // console.log(event.target.textContent.toLowerCase());
            render(states[event.target.textContent.toLowerCase()]);
        });
    });
}
// invokation
// to render a page we pass in piece of state
render(states.home);
// The Element wil not exist until page is rendered.
const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

navItems.forEach(function eventListenerAdder(navItem){
    navItem.addEventListener('click' , function clickHandler(event){
        event.preventDefault();
        // console.log(event.target.textContent.toLowerCase());
        render(states[event.target.textContent.toLowerCase()]);
    });
});
// let i = 0;
// Here the value of i will run from 0 until 3.
// i will serve as a placeholder to represent the index of the item we need to access from navItems.
// console.log(navItems[0]);
// console.log(navItems[1]);
// console.log(navItems[2]);
// while (i < navItems.length) {
// Use the value of i as an index to access the  navItem.
// navItems[i].addEventListener('click' ,
// Add this call back functionto each of the navItems.
// function clickHandler(event) {
// event.preventDefault();
// Re-render the page with a new piece of State that is  derived from what was clicked.
// Target will reveal what generated the event - that is, what was 'clicked'.
// const clickedItem = event.target.textContent;
// const clicked  = clickedItem.toLowerCase();
// render(states[clicked]);
// Developers note: render(states[event.target.textContent.toLowerCase()]);
// event.target gives the elemnt.
// render(states[event.target.textContent.toLowerCase()]);
// }
// );
// i += 1;
// }
// We want to re-render our page based on what the user clicks on our navigation menu.
/*
1. Capture what was clicked in navigation - what is the text of the element that was clicked?
2. Access a piece of state based on said text.
3. Show the user the new view.
*/
