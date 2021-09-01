import '../css/custom-leaflet.css';
import '../Styles/dist/Maps.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, ZoomControl, useMapEvents, useMap } from 'react-leaflet';
import L, { DivIcon, divIcon, Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useQuery } from '@apollo/client';
import { SEE_VISITS_QUERY } from '../graphql/visits';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';
import DefaultTooltip from '../Component/ClusterTooltip';
import ClusterTooltip from '../Component/ClusterTooltip';
import MarkerTooltip from '../Component/MarkerTooltip';
import { chooseRandom } from '../Util/RandomUtil';
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

    const [tooltipVisibility, setTooltipVisibility] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState([0,0])
    const [tooltipInfo, setTooltipInfo] = useState(
        {
            file:[],
            place: "",
            photoCount: 0
        }
    )
    function OnClusterMouseOver(e){
        if(!tooltipVisibility){
            var starSum = 0;
            var place = "";
            var file = [];
            var photoCount = 0;
            const markers = e.layer.getAllChildMarkers();
            markers.map(marker => {
                starSum += marker.options.rating.rating
                photoCount += marker.options.photos.length;
            })
            const chosenMarkers = chooseRandom(markers,2);
            place = `'${chosenMarkers[0].options.name}' 외 ${markers.length-1}번 방문`
            file = file.concat(...chosenMarkers.map(cm => 
                cm.options.photos.map(photo => photo.file)
            ));
            setTooltipVisibility(true);
            setTooltipPosition([e.containerPoint.y,e.containerPoint.x]);
            setTooltipInfo({
                file,
                place,
                photoCount
            })
        }
    }
    
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
        <>
        {tooltipVisibility ? (<ClusterTooltip abs={"absolute"} posY={tooltipPosition[0]} posX={tooltipPosition[1]} {...tooltipInfo}/>) : null }
        
        <MapContainer style={{ width: '100%', height: 'calc(100vh - 60px)' }} center={center} zoom={zoom} zoomControl={false} minZoom={7} >
            <MapHooks/>
            <TileLayer
                attribution='<a href="https://maps.google.com/maps"></a>'
                url='http://mt0.google.com/vt/lyrs=m&hl=kr&x={x}&y={y}&z={z}'
            />
            <ZoomControl position="bottomleft" />

            <MarkerClusterGroup zoomToBoundsOnClick={false} eventHandlers={{clustermouseover : OnClusterMouseOver, clustermouseout: (e) => setTooltipVisibility(false)}} >
                {
                    loading? null : data.seeVisits.map(e=>
                        (
                            <Marker key={e.id} {...e} position={[e.posX,e.posY]} eventHandlers={{click : (e)=> {handleMarkerClick()}}} >
                                <Tooltip direction="top" opacity={1} offset={[10, 0]} >
                                    <MarkerTooltip datetime={e.date.yyyymmdd} datename={e.date.name} file={e.photos[0].file} rating={e.rating.rating} caption={e.name} location={"서울시 무슨구 무슨동"} photoCount={e.photos.length} />
                                 </Tooltip>
                            </Marker>
                        ) 
                    )
                }
            </MarkerClusterGroup>

        </MapContainer>
        </>


    )

}

export default Maps;