import { isScrolledIntoView } from './helpers';
class Project1 {
    constructor(window,element,$){
        this.window = window;
        this.$ = $;
        this.element = this.$(element);        
        this.init()
    }
    init(){
        this.$(this.window).on('scroll', () =>{  
            if (isScrolledIntoView(this.window, this.element,this.$)) {
              this.element.removeClass('hidden')
            }   
        });  
    }
}

export default Project1;