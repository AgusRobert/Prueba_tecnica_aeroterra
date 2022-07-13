
import React, { useRef, useEffect } from "react";
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
export const Mapa = () => {
    const mapRef = useRef(null);
    useEffect(() => {
        const map = new Map({
            basemap: 'dark-gray'
        });
        const view = new MapView({
            container: mapRef.current,
            map:map,
            center:[-34.608303, -58.370403],
            zoom: 15
        });
        return () => {view && view.destroy(); }
        },[]
    )
    
    return <div ref={mapRef} style={{height:"100vh", width:'100%',marginTop:40}}/>
}