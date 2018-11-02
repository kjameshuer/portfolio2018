import { isScrolledIntoView, forEachDirectChild } from './helpers';
class Project3 {
    constructor(window,element,$){
        this.element = element;
        this.window = window;
        this.$ = $;
        this.newElementList = [];
        this.hasPlayed = false;
        this.init();
    }

    init(){
        forEachDirectChild(this.element, (el, ctr) => {
            const amount = el.dataset.amount || 100;
            let bar = new mojs.Html({
              el:el,  
              height: {'0px':`${amount}px`,duration:'rand(750,1500)'}     
            })
            this.newElementList.push(bar);
          });
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
    }
}

export default Project3;