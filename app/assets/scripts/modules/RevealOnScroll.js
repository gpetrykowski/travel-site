import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
    }
    
    hideInitially(){
        this.itemsToReveal.addClass('reveal-item');   
    }
    
    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function(){
            var currentItem = this;
            new Waypoint({
                element: currentItem, //what we want to target    
                handler: function(){  // what we want to happen
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: that.offsetPercentage //customises waypoints when to trigger 
            });
        });
    }
}

export default RevealOnScroll;