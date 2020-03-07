import HomePage from '/js/pages/home.js'
import AboutPage from '/js/pages/about.js'
import GraphicDesignPage from '/js/pages/GraphicDesign.js'
import ModellingPage from '/js/pages/modelling3D.js'
import WebDesignAndDevelopmentPage from '/js/pages/webDesignAndDevelopment.js'
import ErrorPage from '/js/errorPage.js';
import ProgramsPage from './pages/programs.js';
import ContactPage from './pages/contact.js';

const $routes = document.querySelectorAll('.router a')
const $main =   document.querySelector('.main')


const routes = {
	home: new HomePage(),
	about: new AboutPage(),
	graphicDesign: new GraphicDesignPage(),
	modelling3D: new ModellingPage(),
	webDesignAndDevelopment: new WebDesignAndDevelopmentPage(),
	errorPage: new ErrorPage(),
	programs: new ProgramsPage(),
	contactUs: new ContactPage()

}

const loadPage = name => {
    if(name.length == 0)
		$main.innerHTML = routes.home.getHTML() 
	else if (!routes[name]) {
		// Show Error Page
        $main.innerHTML = routes.errorPage.getHTML()  
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
	
	loadPage(route);

	// For all `.router a`...
	$routes.forEach($link => {
		
		// When an anchor is clicked
		$link.addEventListener('click', event => {

			event.preventDefault() // Stop the browser from redirecting

			// Go to the page specified in the href
			const route = $link.getAttribute('href').slice(1).split('/')[0]

			loadPage(route);

			// Add browser history so we can go back/forward
			window.history.pushState({path:`${route}`}, '', `/${route}`)
		})
	})

	const $programRoutes = document.querySelectorAll('.program a')
	
	$programRoutes.forEach($link => {
		console.log($link);
	})
})