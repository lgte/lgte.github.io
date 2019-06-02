let template = `<!-- wrapper footer -->
<section class="ipma-footer">
    <div>
        <img class="responsive" src="images/image-footer.png" alt="">
    </div>
    <div class="ipma-footer-dark">
    <div class="padding-10-bigger">
        <div class="container-fixed">
            <div class="grid">
                <div class="cell-25">
                    <img class="ipma-footer-logo" src="/1.0.6/showcase/ipma/images/logo-congres-ipma.svg" alt="">
                    <img class="ipma-footer-logo" src="/1.0.6/showcase/ipma/images/logo-congres-sovnet.svg" alt="">
                    <img class="ipma-footer-logo" src="/1.0.6/showcase/ipma/images/logo-sovnet.svg" alt="">
                </div>
                <div class="cell-25">
                    <p>
                        32nd IPMA World Congress
                    </p>
                    <p class="ipma-small">
                        Russia, St. Petersburg, September 22-24th, 2020<br/>
                        © 1967–2020
                    </p>
                </div>
                <div class="cell-25">
                    <p class="ipma-small">ipma2020@sovnet.ru</p>
                    <p class="ipma-small">+7 495 723-72-29</p>
                </div>
                <div class="cell-25">
                    <p>Buy Tickets</p>
                    <p class="ipma-small">
                        <a href="">IPMA World Congress</a>
                    </p>
                    <p class="ipma-small">
                        <a href="">Awards Gala</a>
                    </p>
                </div>
            </div>
        </div>
        <hr>
        <div class="container-fixed  small dim">
            <p class="">
                Congress Operator in Russia — Project Management Association «SOVNET», 119049 Moscow, Russia, Leninsky
                Prospect, 4a, of.3
            </p>
            <p class="">
                Congress Creator — International Project Management Association, Central Secretariat P.O. Box 7905, 1008
                AC
                Amsterdam, The Netherlands, Tel: + 31 33 247 34 30, Email : info@ipma.world
            </p>
            <div class="padding-10">
           	<div class="grid grid--centered grid--space-between">
                <div class="cell">
                    <a href="">Terms of use</a>&nbsp;
                    <a href="">Privacy Policy</a>
                </div>
                <div class="cell">
                    <div class="grid grid--centered">
                        <div class="cell">
                            <a href="">Development by</a>
                        </div>
                        <div class="cell">
                            <img 
                                    src="/1.0.6/showcase/ipma/images/logo-citadel.svg"
                                    style="height: 1.5rem" 
                                    alt="">
                        </div>
                    </div>
                    

                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
</section>
`

export const Footer = {
	data() {
		return {}
	},
	template: template,
}