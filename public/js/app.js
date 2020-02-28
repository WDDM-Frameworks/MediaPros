import HomePage from '/js/pages/home.js'
import AboutPage from '/js/pages/about.js'
import StudentsPage from '/js/pages/students.js'

const $routes = document.querySelectorAll('.router a')
const $main =   document.querySelector('.main')

const routes = {
	home: new HomePage(),
	about: new AboutPage(),
	students: new StudentsPage()
}

const loadPage = name => {
    console.log(name);
	if (!routes[name]) {
        // Show Error Page
        // Will implement later
    }
    else
	    $main.innerHTML = routes[name].getHTML() 
}

// browser back/forward functionality, redirect
window.addEventListener('popstate', event => {
	const route = event.state.path
	loadPage(route);
})

// When the page loads...
window.addEventListener('load', event => {

	// Get the page url and load the Page based on the pathname
	const route = window.location.pathname.slice(1).split('/')[0]
	loadPage(route)

	// For all `.router a`...
	$routes.forEach($link => {
		// When an anchor is clicked
		$link.addEventListener('click', event => {

			event.preventDefault() // Stop the browser from redirecting

			// Go to the page specified in the href
			const route = $link.getAttribute('href').slice(1).split('/')[0]
			loadPage(route)

			// Add browser history so we can go back/forward
			window.history.pushState({path:`${route}`}, '', `/${route}`)
		})
	})
})