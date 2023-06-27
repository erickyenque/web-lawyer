var lsjQuery = jQuery;

lsjQuery(document).ready(function () {
    if (typeof lsjQuery.fn.layerSlider == "undefined") {
        lsShowNotice('layerslider_2', 'jquery');
    } else {
        lsjQuery("#layerslider_2").layerSlider({ responsiveUnder: 1240, layersContainer: 1170, skinsPath: 'assets/js/layerslider/skins/' })
    }
}); 
