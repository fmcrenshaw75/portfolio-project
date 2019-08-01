// Import : Bring in the necessary Functional    components.
import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// describes the current state of the SPA. We say that we pass'pieces of state'
const store = {
    'links': {
        'primary': [ 'Home', 'About', 'Contact' ],
        'dropdown': [ 'Projects 1', 'Project 2', 'Project 3' ]
    },

    'home': {
        'title': 'A New Web Developer',
        'page': `<section>
        <h1>Hello World </h1>

          <h2>  My name is Floyd Crenshaw</h2>
          <p>I am currently in Savvy Coders class</p>
        <p>This is my first time taking coding classes</p>
        <p>I love watching movies</p>

          <h2>This is my top section</h2>


          </p>
        </section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur ullam libero dolorum in nobis quo similique, culpa saepe quod, error aspernatur repellat consequuntur sequi iure ratione? Aut, consectetur aliquid?</p>
        @@ -18,5 +25,11 @@ <h2>My name is Floyd Crenshaw</h2>
        <p>Numquam dolore distinctio eum omnis. Temporibus dignissimos fugiat possimus blanditiis, esse vel vero? Cum et vitae ut, magnam quis inventore corrupti voluptatum. Sapiente ad reprehenderit accusamus veniam, autem aperiam ullam!</p>
        <p>Laudantium, maxime libero, a earum vel, aperiam corrupti quia eaque debitis sunt dolores. Assumenda id eos iusto adipisci ut, in voluptatibus architecto earum alias molestiae inventore nam itaque off
          </section>

          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              consequatur, nesciunt eaque sapiente necessitatibus dolores labore
              dignissimos in enim, fuga porro possimus quod facere vero, asperiores
              quos cum a consectetur? </p>

              <p>
                  Numquam dolore distinctio eum omnis. Temporibus dignissimos fugiat
                  possimus blanditiis, esse vel vero? Cum et vitae ut, magnam quis
                  inventore corrupti voluptatum. Sapiente ad reprehenderit accusamus
                  veniam, autem aperiam ullam!
                </p>
                <p>
                  Laudantium, maxime libero, a earum vel, aperiam corrupti quia eaque
                  debitis sunt dolores. Assumenda id eos iusto adipisci ut, in
                  voluptatibus architecto earum alias molestiae inventore nam itaque
                  officia recusandae!
                </p>`
    } ,
    'about': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact' ],
            'dropdown': [ 'Projects 1', 'Project 2', 'Project 3' ]
        },
        'title': 'About Page',
        'page': 'This is the about page'

    } ,
    'contact': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact' ],
            'dropdown': [ 'Projects 1', 'Project 2', 'Project 3' ]
        },
        'title': 'Contact',
        'page': 'This is the Contact page'

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
            render(store[event.target.textContent.toLowerCase()]);
        });
    });
}
// invokation
// to render a page we pass in piece of state
render(store.home);
// The Element wil not exist until page is rendered.
const navItems = document.querySelectorAll('nav > ul > li:not(.dropdown)');

navItems.forEach(function eventListenerAdder(navItem){
    navItem.addEventListener('click' , function clickHandler(event){
        event.preventDefault();
        // console.log(event.target.textContent.toLowerCase());
        render(store[event.target.textContent.toLowerCase()]);
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
