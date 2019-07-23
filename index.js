import Navigation from './components/Navigation';
import Main from './components/Main';
import Header from '/components/Header';
import Footer from './components/Footer';
console.log(Navigation);
const states =  {
    'home': {
        'title': 'This is the home page'
    },
    'about': {
        'title': 'About Page'
    },
    'contact': {
        'title': 'Contact'
    }
};

function render(state){
    document.querySelector('#root').innerHTML = `
   ${Navigation()}
   ${Main()}
   ${Header()}
   ${Footer()}
`;
}
// to render a page, we pass in a piece of state

render(states.home);
// The elements will not exist until page is rendered!
const navItems = document.querySelectorAll('nav > ul > li:not(dropdown)');

// i will serve as a placeholder to represent the index of the item we need to access from NavItems.
// console.log(navItems[0]),
// console.log(navItems[1]),
// console.log(navItems[2]),
let i = 0;

// i will run from 0 until 3

while(i < navItems.length){
    // use the value of i as an index to access the navItem.
    navItems[i].addEventListener('click',

        // Add this callback fxn. to each of the navItems
        function clickHandler(event){
            event.preventDefault();

            const clickedItem = event.target.textContent;
            const clicked = clickedItem.toLowerCase();

            // 'target will reveal what generated the event - that is, what was 'clicked.'
            // const clickedItem - event.target;
            // clickedItem.textContent

            render(states[event.target.textContent]);
        });

    i += 1;
}
