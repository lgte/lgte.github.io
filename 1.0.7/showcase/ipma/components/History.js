const template = `
<div class="ipma-history">
    <div class="grid grid--scroll">
        <div class="cell-20">
            <div class="ipma-history-record">
                <header>asdsasa</header>
                <footer>asdsaa</footer>
            </div>
        </div>
        <div class="cell-20">
            <div class="ipma-history-record">
                <header>
                    asdsasa sfasdfas
                    sadfasd
                    <br>
                    asdfsda
                </header>
                <footer>
                    asdsaa <br>
                    asdfasd <br>
                    asdfasd
                </footer>
            </div>
        </div>
        <div class="cell-20">
            <div class="ipma-history-record">
                <header>asdsasa</header>
                <footer>asdsaa</footer>
            </div>
        </div>
        <div class="cell-20">
            <div class="ipma-history-record">
                <header>header</header>
                <footer>footer</footer>
            </div>
        </div>
        <div class="cell-20">
            <div class="ipma-history-record">
                <header class="ipma-caption">
                    <div>2018</div>
                    <div>Denmark</div>
                </header>
                <footer></footer>
            </div>
        </div>
        <div class="cell-20">
            <div class="ipma-history-record">
                <header></header>
                <footer class="ipma-caption">
                    <div>2019</div>
                    <div>Mexico</div>
                </footer>
            </div>
        </div>
        <div class="cell-25">
            <div class="ipma-history-record">
                <header>
                    <div class="ipma-caption">2020</div>
                    <h3 class="ipma-h3 margin-0">Russia</h3>
                </header>
                <footer>
                    <ul>
                        <li>900 participants from all over the world</li>
                        <li>140 international speakers</li>
                        <li>5 sections</li>
                    </ul>
                </footer>
            </div>
        </div>
        <div class="cell-20">
            <div class="ipma-history-record">
                <header></header>
                <footer>
                    <div class="ipma-caption">2021</div>
                    <div class="ipma-caption">Tokyo</div>
                </footer>
            </div>
        </div>
    </div>
</div>
`

export const History = {
	template,
	mounted() {
		console.log('updated', this.$el.querySelector('.grid--scroll').scrollLeft = 1000000)
	},
}