var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_UNID_ZEE_CABANA0 = new ol.format.GeoJSON();
var features_UNID_ZEE_CABANA0 = format_UNID_ZEE_CABANA0.readFeatures(json_UNID_ZEE_CABANA0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNID_ZEE_CABANA0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UNID_ZEE_CABANA0.addFeatures(features_UNID_ZEE_CABANA0);var lyr_UNID_ZEE_CABANA0 = new ol.layer.Vector({
                source:jsonSource_UNID_ZEE_CABANA0, 
                style: style_UNID_ZEE_CABANA0,
                title: 'UNID_ZEE_CABANA<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_0.png" /> 1<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_1.png" /> 2<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_2.png" /> 3<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_3.png" /> 4<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_4.png" /> 5<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_5.png" /> 6<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_6.png" /> 7<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_7.png" /> 8<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_8.png" /> 9<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_9.png" /> 10<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_10.png" /> 11<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_11.png" /> 12<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_12.png" /> 13<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_13.png" /> 14<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_14.png" /> 15<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_15.png" /> 16<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_16.png" /> 17<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_17.png" /> 18<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_18.png" /> 19<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_19.png" /> 20<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_20.png" /> 21<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_21.png" /> 22<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_22.png" /> 23<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_23.png" /> 24<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_24.png" /> 25<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_25.png" /> 26<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_26.png" /> 27<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_27.png" /> 28<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_28.png" /> 29<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_29.png" /> 30<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_30.png" /> 31<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_31.png" /> 32<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_32.png" /> 33<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_33.png" /> 34<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_34.png" /> 35<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_35.png" /> 36<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_36.png" /> 37<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_37.png" /> 38<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_38.png" /> 39<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_39.png" /> 40<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_40.png" /> 41<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_41.png" /> 42<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_42.png" /> 43<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_43.png" /> 44<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_44.png" /> 45<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_45.png" /> 46<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_46.png" /> 47<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_47.png" /> 48<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_48.png" /> 49<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_49.png" /> 50<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_50.png" /> 51<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_51.png" /> 52<br />\
        <img src="styles/legend/UNID_ZEE_CABANA0_52.png" /> 53<br />'
            });

lyr_UNID_ZEE_CABANA0.setVisible(true);
var layersList = [baseLayer,lyr_UNID_ZEE_CABANA0];
lyr_UNID_ZEE_CABANA0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'N_ZEE': 'N_ZEE', 'GRAN_ZONAS': 'GRAN_ZONAS', 'UNID_ZEE': 'UNID_ZEE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', 'Area_Ha': 'Area_Ha', 'Porcentaje': 'Porcentaje', });
lyr_UNID_ZEE_CABANA0.set('fieldImages', {'OBJECTID': 'Hidden', 'N_ZEE': 'TextEdit', 'GRAN_ZONAS': 'TextEdit', 'UNID_ZEE': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'area': 'Hidden', 'Area_Ha': 'TextEdit', 'Porcentaje': 'TextEdit', });
lyr_UNID_ZEE_CABANA0.set('fieldLabels', {'N_ZEE': 'inline label', 'GRAN_ZONAS': 'inline label', 'UNID_ZEE': 'inline label', 'Area_Ha': 'inline label', 'Porcentaje': 'inline label', });
lyr_UNID_ZEE_CABANA0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});