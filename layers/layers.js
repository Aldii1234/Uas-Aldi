var wms_layers = [];

var format_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0 = new ol.format.GeoJSON();
var features_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0 = format_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0.readFeatures(json_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0.addFeatures(features_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0);
var lyr_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0, 
                style: style_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0,
                popuplayertitle: 'KOTA PALU — ADMINISTRASIKABKOTA_AR_50K',
                interactive: true,
    title: 'KOTA PALU — ADMINISTRASIKABKOTA_AR_50K<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKABKOTA_AR_50K_0_0.png" /> Donggala<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKABKOTA_AR_50K_0_1.png" /> Kota Palu<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKABKOTA_AR_50K_0_2.png" /> Sigi<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKABKOTA_AR_50K_0_3.png" /> <br />' });
var format_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1 = format_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: 'KOTA PALU — ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
    title: 'KOTA PALU — ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_0.png" /> <br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_1.png" /> Banawa Selatan<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_2.png" /> Dolo<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_3.png" /> Kinovaro<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_4.png" /> Mantikulore<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_5.png" /> Marawola<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_6.png" /> Marawola Barat<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_7.png" /> Palu Barat<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_8.png" /> Palu Selatan<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_9.png" /> Palu Timur<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_10.png" /> Palu Utara<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_11.png" /> Sigi Biromaru<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_12.png" /> Tanantovea<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_13.png" /> Tatanga<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_14.png" /> Tawaeli<br />\
    <img src="styles/legend/KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1_15.png" /> Ulujadi<br />' });
var format_KOTAPALUPEMERINTAHAN_AR_50K_2 = new ol.format.GeoJSON();
var features_KOTAPALUPEMERINTAHAN_AR_50K_2 = format_KOTAPALUPEMERINTAHAN_AR_50K_2.readFeatures(json_KOTAPALUPEMERINTAHAN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTAPALUPEMERINTAHAN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTAPALUPEMERINTAHAN_AR_50K_2.addFeatures(features_KOTAPALUPEMERINTAHAN_AR_50K_2);
var lyr_KOTAPALUPEMERINTAHAN_AR_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOTAPALUPEMERINTAHAN_AR_50K_2, 
                style: style_KOTAPALUPEMERINTAHAN_AR_50K_2,
                popuplayertitle: 'KOTA PALU — PEMERINTAHAN_AR_50K',
                interactive: true,
    title: 'KOTA PALU — PEMERINTAHAN_AR_50K<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_0.png" /> Asrama Militer<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_1.png" /> Badan Lingkungan Hidup<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_2.png" /> Badan Penanggulangan Bencana<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_3.png" /> Badan Pusat Statistik<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_4.png" /> DEPKES RI Kabupaten Donggala<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_5.png" /> Dinas Energi Dan Sumber Daya Mineral<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_6.png" /> Dinas Kehutanan<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_7.png" /> Dinas Kelautan Dan Perikanan<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_8.png" /> Dinas Kesehatan<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_9.png" /> Dinas Pendidikan<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_10.png" /> Dinas Tenaga Kerja<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_11.png" /> DPRD Sulawesi Tengah<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_12.png" /> Gubernur Sulawesi Tengah<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_13.png" /> Gudang Bulog Tondo<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_14.png" /> Kantor Badan Narkotika Nasional<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_15.png" /> Kantor Banwaslu<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_16.png" /> Kantor BPPND<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_17.png" /> Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_18.png" /> Kantor Dinas Pendidikan Daerah<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_19.png" /> Kantor Dinas Perindustrian Perdagangan Dan Kopera*<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_20.png" /> Kantor Kerukunan Keluarga<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_21.png" /> Kantor KONI<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_22.png" /> Kantor Pajak Pratama<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_23.png" /> Kantor Perpajakan<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_24.png" /> Kantor Satpol PP<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_25.png" /> KONI Sarinindi<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_26.png" /> Korem Tadulako<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_27.png" /> Pangkalan TNI AL Palu<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_28.png" /> Pengadilan Negri Kelas Satu A<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_29.png" /> Polda Sulawesi Tengah<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_30.png" /> Rumah Penyimpanan Benda Sitaan negara<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_31.png" /> SAMSAT<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_32.png" /> SAT BRIMOB POLDA SULTENG<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_33.png" /> TNI AL<br />\
    <img src="styles/legend/KOTAPALUPEMERINTAHAN_AR_50K_2_34.png" /> <br />' });
var format_KOTAPALURUMAHSAKIT_AR_50K_3 = new ol.format.GeoJSON();
var features_KOTAPALURUMAHSAKIT_AR_50K_3 = format_KOTAPALURUMAHSAKIT_AR_50K_3.readFeatures(json_KOTAPALURUMAHSAKIT_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTAPALURUMAHSAKIT_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTAPALURUMAHSAKIT_AR_50K_3.addFeatures(features_KOTAPALURUMAHSAKIT_AR_50K_3);
var lyr_KOTAPALURUMAHSAKIT_AR_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOTAPALURUMAHSAKIT_AR_50K_3, 
                style: style_KOTAPALURUMAHSAKIT_AR_50K_3,
                popuplayertitle: 'KOTA PALU — RUMAHSAKIT_AR_50K',
                interactive: true,
    title: 'KOTA PALU — RUMAHSAKIT_AR_50K<br />\
    <img src="styles/legend/KOTAPALURUMAHSAKIT_AR_50K_3_0.png" /> <br />\
    <img src="styles/legend/KOTAPALURUMAHSAKIT_AR_50K_3_1.png" /> RS Bayangkara<br />\
    <img src="styles/legend/KOTAPALURUMAHSAKIT_AR_50K_3_2.png" /> RS Undata<br />\
    <img src="styles/legend/KOTAPALURUMAHSAKIT_AR_50K_3_3.png" /> RSU Budi Agung<br />\
    <img src="styles/legend/KOTAPALURUMAHSAKIT_AR_50K_3_4.png" /> Rumah Sakit Anutapura<br />' });
var format_KOTAPALUJALAN_LN_50K_4 = new ol.format.GeoJSON();
var features_KOTAPALUJALAN_LN_50K_4 = format_KOTAPALUJALAN_LN_50K_4.readFeatures(json_KOTAPALUJALAN_LN_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTAPALUJALAN_LN_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTAPALUJALAN_LN_50K_4.addFeatures(features_KOTAPALUJALAN_LN_50K_4);
var lyr_KOTAPALUJALAN_LN_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KOTAPALUJALAN_LN_50K_4, 
                style: style_KOTAPALUJALAN_LN_50K_4,
                popuplayertitle: 'KOTA PALU — JALAN_LN_50K',
                interactive: true,
    title: 'KOTA PALU — JALAN_LN_50K<br />\
    <img src="styles/legend/KOTAPALUJALAN_LN_50K_4_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/KOTAPALUJALAN_LN_50K_4_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/KOTAPALUJALAN_LN_50K_4_2.png" /> Jalan Lain<br />\
    <img src="styles/legend/KOTAPALUJALAN_LN_50K_4_3.png" /> Jalan Lokal<br />\
    <img src="styles/legend/KOTAPALUJALAN_LN_50K_4_4.png" /> Jalan Setapak<br />\
    <img src="styles/legend/KOTAPALUJALAN_LN_50K_4_5.png" /> <br />' });

        var lyr_OpenStreetMap_5 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0.setVisible(true);lyr_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_KOTAPALUPEMERINTAHAN_AR_50K_2.setVisible(true);lyr_KOTAPALURUMAHSAKIT_AR_50K_3.setVisible(true);lyr_KOTAPALUJALAN_LN_50K_4.setVisible(true);lyr_OpenStreetMap_5.setVisible(true);
var layersList = [lyr_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0,lyr_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1,lyr_KOTAPALUPEMERINTAHAN_AR_50K_2,lyr_KOTAPALURUMAHSAKIT_AR_50K_3,lyr_KOTAPALUJALAN_LN_50K_4,lyr_OpenStreetMap_5];
lyr_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KOTAPALUPEMERINTAHAN_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KOTAPALURUMAHSAKIT_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KOTAPALUJALAN_LN_50K_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KOTAPALUPEMERINTAHAN_AR_50K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KOTAPALURUMAHSAKIT_AR_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_KOTAPALUJALAN_LN_50K_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_KOTAPALUADMINISTRASIKABKOTA_AR_50K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KOTAPALUADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KOTAPALUPEMERINTAHAN_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KOTAPALURUMAHSAKIT_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KOTAPALUJALAN_LN_50K_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_KOTAPALUJALAN_LN_50K_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});