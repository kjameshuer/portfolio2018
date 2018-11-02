import { isScrolledIntoView, forEachDirectChild } from './helpers';
class Skills {
    constructor(window, element, circElement, $) {
        this.element = element;
        this.window = window;
        this.$ = $;
        this.newElementList = [];
        this.hasPlayed = false;
        this.circ = new mojs.Shape({
            parent:circElement,
            radius: { 0: 1050 },
            fill: 'none',
            stroke: '#10cb90',
            strokeWidth: {200:700},
            opacity: { 0 : 1 },
            duration: 1500
          })
        this.init();
    }

    init() {
        forEachDirectChild(this.element,  (el) => {
            const aniEl = el.getElementsByClassName("skill-bar-indicator")[0];
            const amount = aniEl.dataset.amount || 100;
            const html = new mojs.Html({
                el: aniEl,
                width: { 0: `${amount}%` },
                duration: 1000
            });
            this.newElementList.push(html);
        })

        this._setupEventListener();
    }

    _setupEventListener() {
        this.window.addEventListener('scroll', (e) => {
            if (this.hasPlayed) return;
            if (isScrolledIntoView(this.window, this.$(this.element), this.$)) {
                this.play();                
                this.hasPlayed = true;
            }
        })
    }

    play() {
      
        this.newElementList.forEach(el => el.play());
        this.circ.play();
    }
}

export default Skills;