ASSIGNMENT:
* Create a new react app with vite
* Cleanup App.jsx, we don't need anything
* Add a state, "counter", initialize at 0
* display counter in a div, with it's own class
* add class to App.css to have a BIG font size
* test
* add a div undernieth, make it use display flex
* add a button "reset", that sets counter to 0 when clicked
* Add a useEffect
  * display a message (eg: useEffect starting), at the beginning of your useEffect
  * use setInterval to increase the counter by 1 every 3 seconds
  * Please read:
    * https://javascript.info/settimeout-setinterval
    * https://react.dev/reference/react/useState#setstate especially "If you pass as a function"
    * https://iq.js.org/questions/react/why-we-need-to-pass-a-function-to-setstate
* reload the page and observe
* Add a return function to your useEffect to clear the interval
* reload and observe
* check that the reset button works
* push it to a public repository on github and send me DM
* Create a new branch in git
* Add a new state, say "running"
* change the use effect to only run if running is true
* add running as a dependency to the useEffect
* add a stop and a start buutton that changes the state of running.
* add some css to App.css to position the button nicely (eg fles + a decent gap)
* test...
* push that branch to git, but do not merge. (editado)
*
* # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
