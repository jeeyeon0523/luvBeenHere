import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


function Maps() {

    const [lat ,setLat] = useState('51.505');
    const [lng, setLng] = useState('-0.09');
    const [zoom, setZoom] = useState(13);

    const position = [lat, lng];

    return(
        <div>
            <MapContainer style={{ height: "560px" }} center={position} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={position}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        
    )

}

export default Maps;