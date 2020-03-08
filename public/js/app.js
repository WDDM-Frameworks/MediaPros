import HomePage from '/js/pages/home.js'
import AboutPage from '/js/pages/about.js'
import GraphicDesignPage from '/js/pages/GraphicDesign.js'
import ModellingPage from '/js/pages/modelling3D.js'
import WebDesignAndDevelopmentPage from '/js/pages/webDesignAndDevelopment.js'
import ErrorPage from '/js/errorPage.js';
import ProgramsPage from './pages/programs.js';
import ContactPage from './pages/contact.js';
import StudentsPage from './pages/students.js';
import HardeepSingh from './pages/students/HardeepSingh.js';
import JorgeFabregas from './pages/students/JorgeFabregas.js';
import ReyanaldoSia from './pages/students/ReyanaldoSia.js';
import SavinderKaur from './pages/students/SavinderKaur.js';
import KunalDhawan from './pages/students/KunalDhawan.js';

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
	contactUs: new ContactPage(),
	students: new StudentsPage(),
	HardeepSingh: new HardeepSingh(),
	KunalDhawan: new KunalDhawan(),
	SavinderKaur: new SavinderKaur(),
	JorgeFabregas: new JorgeFabregas(),
	ReyanaldoSia: new ReyanaldoSia()

}

const loadPage = name => {
	console.log(name);
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

const decideRoute = linkPath => {
	let route='ErrorPage';

	if(linkPath.search('student') != -1 && linkPath != '/students'){
		
		route = linkPath.slice(1).split('/')[1];
	}
	else
		route = linkPath.slice(1).split('/')[0];

	return route;
}
// When the page loads...
window.addEventListener('load', event => {

	// Get the page url and load the Page based on the pathname
	const route = decideRoute(window.location.pathname)
	
	loadPage(route);

	// For all `.router a`...
	$routes.forEach($link => {
		
		console.log($link);
		// When an anchor is clicked
		$link.addEventListener('click', event => {

			event.preventDefault() // Stop the browser from redirecting

			// Go to the page specified in the href
			const linkPath = $link.getAttribute('href');
			
			const route = decideRoute(linkPath);

			loadPage(route);

			// Add browser history so we can go back/forward
			window.history.pushState({path:`${route}`}, '', `/${route}`)
		})
	})
})