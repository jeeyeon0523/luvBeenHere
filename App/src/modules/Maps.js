import 'leaflet/dist/leaflet.css';
import '../Styles/dist/Maps.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


function MapHooks(){
    const map = useMap();
    // set map bounds
    const LeftTop = L.latLng(38.807100, 123.753453);
    const RightBottom = L.latLng(32.019165, 132.125035);
    const bounds = L.latLngBounds(LeftTop, RightBottom);
    map.setMaxBounds(bounds);
    return null;
}

function Maps(props) {
    const [lat, setLat] = useState('37.576429');
    const [lng, setLng] = useState('126.904376');
    const [zoom, setZoom] = useState(13);
    const center = [37.56410648646213, 126.9851966669863];
    const position = [lat, lng];

    const position2 = [37.629889, 127.067015]; //

    // set default marker Icons
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    const handleMarkerClick = () => {
        props.drawerOpen();
    }

    return (
        <MapContainer style={{ width: '100%', height: 'calc(100vh - 60px)' }} center={center} zoom={zoom} zoomControl={false} minZoom={7}>
            <MapHooks/>
            <TileLayer
                attribution='<a href="https://maps.google.com/maps"></a>'
                url='http://mt0.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}'
            />
            <ZoomControl position="bottomleft" />
            <Marker position={position} eventHandlers={{click : (e)=> {handleMarkerClick()}}} >
                <Tooltip><span>예쁜콩이네입니다.</span></Tooltip>
            </Marker>
            <Marker position={position2} eventHandlers={{click : (e)=> {handleMarkerClick()}}}>
                <Tooltip><span>뚱이네입니다.</span></Tooltip>
            </Marker>
        </MapContainer>


    )

}

export default Maps;