const template = `
	<div>
		<slot></slot>
	</div>
`

export const Tabs = {

	template,

	props: {
		active: {
			type: String,
			defaultValue: ''
		}
	},

	data() {
		return {
			activeTab: null,
			prevTab: null
		}
	},

	methods: {
		 activate(tab) {
		 	this.prevTab = this.activeTab
		 	this.activeTab = tab

			 if (this.activeTab) {
				 this.$el.querySelector(`[data-tab=${this.activeTab}]`).className = 'tabs-tab tabs-tab--active'
			 }
			 if (this.prevTab) {
				 this.$el.querySelector(`[data-tab=${this.prevTab}]`).className = 'tabs-tab'
			 }
		 }
	},

	mounted() {
		this.activate(this.$props.active)
		this.$el.querySelectorAll('.tabs-nav > a').forEach(el => el.addEventListener('click', e => {
			e.preventDefault()
			const name = e.target.getAttribute('href')
			this.activate(name)
		}))
	},

	updated() {
		console.log('yo0', this.activeTab)

	}

}