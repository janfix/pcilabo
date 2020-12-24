

/*
 Build by Wiquid's PCI Generator for TAO platform Free to use 
 */

define([
    'taoQtiItem/qtiCreator/widgets/interactions/customInteraction/Widget',
    'fake/creator/widget/states/states'
], function(Widget, states){
    'use strict';

    var fakeWidget = Widget.clone();

     fakeWidget.initCreator = function(){
        
        this.registerStates(states);
        
        Widget.initCreator.call(this);
    };
    
    return fakeWidget;
});
