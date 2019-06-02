import { Footer } from './components/Footer.js'
import { Navbar } from './components/Navbar.js'
import { History } from './components/History.js'

import { NewsPreview } from './components/NewsPreview.js'

const app = new Vue({
	el: '#app',
	components: {
		'ipma-navbar': Navbar,
		'ipma-footer': Footer,

		'ipma-news-preview': NewsPreview,
		'ipma-history': History,
	},
})