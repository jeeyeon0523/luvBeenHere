// import '../leaflet/leaflet.css';
import 'leaflet/dist/leaflet.css';
import '../dist/Maps.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


function Maps() {

    const [lat, setLat] = useState('37.576429');
    const [lng, setLng] = useState('126.904376');
    const [zoom, setZoom] = useState(13);
    const center = [37.56410648646213, 126.9851966669863];
    const position = [lat, lng];

    const position2 = [37.629889, 127.067015]; //


    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;
    return (
        <MapContainer style={{ width: '100%', height: '1000px' }} center={center} zoom={zoom}>
            <TileLayer
                attribution='<a href="https://maps.google.com/maps"></a>'
                url='http://mt0.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}'
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