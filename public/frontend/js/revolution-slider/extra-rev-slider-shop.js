(function($) {
    "use strict";

          var revapi1,
            tpj;
          jQuery(function() {
            tpj = jQuery;
            if(tpj("#rev_slider_shop_1").revolution == undefined){
          
            }else{
              revapi1 = tpj("#rev_slider_shop_1").show().revolution({
                jsFileLocation:"js/",
                visibilityLevels:"1240,1024,769,480",
                gridwidth:"1340,1024,778,480",
                gridheight:"700,600,600,600",
                minHeight:"",
                spinner:"spinner3",
                editorheight:"700,600,600,600",
                responsiveLevels:"1240,1024,769,480",
                shadow:6,
                navigation: {
                  mouseScrollNavigation:false,
                  arrows: {
                    enable:true,
                    style:"zeus",
                    hide_onmobile:true,
                    hide_under:768,
                    left: {
                      h_offset:0
                    },
                    right: {
                      h_offset:0
                    }
                  },
                  bullets: {
                    enable:true,
                    tmp:"<span class=\"tp-bullet-image\"></span>",
                    style:"hebe"
                  }
                },
                parallax: {
                  levels:[2,3,4,5,6,7,10,12,15,18,20,40,50,60,70,55],
                  type:"scroll",
                  origo:"slidercenter",
                  speedbg:10,
                  speedls:10
                },
                scrolleffect: {
                  set:true,
                  fade:true,
                  multiplicator:1.3,
                  multiplicator_layers:1.3
                },
                fallbacks: {
                  allowHTML5AutoPlayOnAndroid:true
                },
              });
            }
            
          });
})(jQuery);