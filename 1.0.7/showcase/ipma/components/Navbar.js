let template = `<div class="ipma-navbar ipma-caption">
    <div class="grid grid--centered grid--space-between">
        <div class="cell">
            <a class="pure" href="/1.0.6/showcase/ipma">
                <img class="ipma-navbar-logo" src="/1.0.6/showcase/ipma/images/logo-congres-ipma.svg" alt="">
                <img class="ipma-navbar-logo" src="/1.0.6/showcase/ipma/images/logo-congres-sovnet.svg" alt="">
                <img class="ipma-navbar-logo" src="/1.0.6/showcase/ipma/images/logo-sovnet.svg" alt="">
            </a>
        </div>
        <div class="cell">
            <nav class="ipma-navbar-nav ipma-navbar-nav--secondary">
                <a href="#">Ru</a>
                <a href="#">En</a>
            </nav>
            <nav class="ipma-navbar-nav ipma-navbar-nav--primary uppercase">
                <a href="/1.0.6/showcase/ipma/events.html">Events and tickets</a>
                <a href="/1.0.6/showcase/ipma/venue.html">Venue</a>
                <a href="/1.0.6/showcase/ipma/register.html">Registration</a>
            </nav>
        </div>
    </div>
</div>
`

export const Navbar = {
	data() {
		return {}
	},
	template: template,
}