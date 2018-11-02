import {isScrolledIntoView, forEachDirectChild} from './helpers';
class Project2 {
    constructor(window, element, jquery) {
        this.element = element;
        this.children = this.element.children;
        this.newElementList = [];
         this.window = window;
         this.$ = jquery;
         this.init();
         this.hasPlayed = false;
    }

    init() {
        
        forEachDirectChild(this.element, (el, ctr) => {
            const newHTML = new mojs.Html({
                el: `#${el.id}`,
                scale: {
                    0: 1.2,
                    duration: "rand(650,700)",
                    easing: "elastic.out",
                    delay: ctr * 452
                },
                color: '#fff'
            }).then({
                color:{to:'#000'},
                duration: 500,
                delay: 200
            });
            this.newElementList.push(newHTML)          
        })
        this._setupEventListener()
    }

    _setupEventListener(){
        this.window.addEventListener('scroll',(e)=>{
           if (this.hasPlayed) return;
            if (isScrolledIntoView(this.window,this.$(this.element),this.$)){
                this.play();
                this.hasPlayed = true;
               }
        })
    }

    play() {      
        this.newElementList.forEach(el => el.play());
    }
}

export default Project2;