import 'promise-polyfill/src/polyfill';
import Skills from './skills';
import Project1 from './project-1';
import Project2 from './project-2';
import Project3 from './project-3';

(function ($) { 
  
  $('body').removeClass('no-js');
  $(document).foundation();
  if ( !(typeof NodeList.prototype.forEach === "function") ){
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  new Skills(window,document.getElementById('skills-container'),
      document.getElementById('skills'),$)
  new Project1(window,document.getElementById('main-project-image'),$);
  new Project2(window,document.getElementById('bubble-container'),$);
  new Project3(window,document.getElementById('graph-container'),$);  
 
})(jQuery);
