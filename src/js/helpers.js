export const isScrolledIntoView = function(window,element,$){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = element.offset().top;
    var elemBottom = elemTop + element.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

export const  forEachDirectChild = function (parent, callback) {
    const children = parent.childNodes;
 
    let ctr = -1;

    children.forEach((child, i) => {
        if (child.nodeType === 1) {
            ctr++;
            return callback(child, ctr);
        }
    });
}