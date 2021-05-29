// import '../leaflet/leaflet.css';
import 'leaflet/dist/leaflet.css';
import '../dist/Maps.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


function Maps() {

    const [lat ,setLat] = useState('37.576429');
    const [lng, setLng] = useState('126.904376');
    const [zoom, setZoom] = useState(13);

    const position = [lat, lng];

    const position2 = [37.629889, 127.067015]; //


    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;

    //osm : // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    //attribution='<a href="http://osm.org/copyright"></a>'

    // L.tileLayer('https://mt0.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}', {
	// 		attribution: '&copy; <a target="_blank" href="https://maps.google.com/maps?ll=36.1358642,128.0785804&amp;z=13&amp;t=m&amp;hl=ko-KR&amp;gl=US&amp;mapclient=apiv3" title="Google 지도에서 이 지역을 보려면 클릭하세요." ><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google4.png" draggable="false"></a>' //화면 오른쪽 하단 attributors
	// 	}).addTo(mymap);

    // 37.576429, 126.904376
    //37.629889, 127.067015
    
    return(
        <MapContainer style={{ width: '100%', height: '1000px'}} center={position} zoom={zoom}>
            <TileLayer
                attribution='<a href="https://maps.google.com/maps"></a>'
                url = 'http://mt0.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}'
            />
            <Marker position={position}>
                <Popup>
                    <span>콩이네입니다.</span>
                </Popup>
            </Marker>
            <Marker position={position2}>
                <Popup>
                    <span>뚱이네입니다.</span>
                </Popup>
            </Marker>
        </MapContainer>
        
        
    )

}

export default Maps;