import 'leaflet/dist/leaflet.css';
import '../Styles/dist/Maps.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useQuery } from '@apollo/client';
import { SEE_VISITS_QUERY } from '../graphql/visits';


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


    // set default marker Icons
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    const handleMarkerClick = () => {
        props.drawerOpen();
    }

    const { loading, error, data } = useQuery(SEE_VISITS_QUERY, {
        variables: { 
          xRngFrom: 0,
          xRngTo: 999,
          yRngFrom: 0,
          yRngTo: 999,
         },
    });
    if(!loading){
        console.log(data);
    }

    return (
        <MapContainer style={{ width: '100%', height: 'calc(100vh - 60px)' }} center={center} zoom={zoom} zoomControl={false} minZoom={7}>
            <MapHooks/>
            <TileLayer
                attribution='<a href="https://maps.google.com/maps"></a>'
                url='http://mt0.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}'
            />
            <ZoomControl position="bottomleft" />
            {loading? null : data.seeVisits.map(e=>
                (
                    <Marker key={e.id} position={[e.posX,e.posY]} eventHandlers={{click : (e)=> {handleMarkerClick()}}} >
                        <Tooltip><span>{e.name}</span></Tooltip>
                    </Marker>
                ) 
            )}
            
        </MapContainer>


    )

}

export default Maps;