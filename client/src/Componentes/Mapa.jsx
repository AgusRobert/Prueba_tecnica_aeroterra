
import React, { useRef, useEffect} from "react";
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import Graphic from '@arcgis/core/Graphic'
import popupTemplate from "@arcgis/core/PopupTemplate";
import { useSelector } from "react-redux";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
export const Mapa = () => {
    let pois = useSelector((state) => state.pois)
    const mapRef = useRef(null);
    useEffect(() => {
        const map = new Map({
            basemap: 'dark-gray-vector'
        });
        const graphicsLayer = new GraphicsLayer();
 map.add(graphicsLayer)
        pois.map(p=>{
           let coord = p.coordenadas
            const point = {
                type: "point",
                longitude: Number(coord[0]),
                latitude: Number(coord[1])
            }
            const markerSymbol = {
            type: "simple-marker", 
            color: [255, 206, 22],
            outline: {
             
              color: [174, 174, 255],
              width: 2
            }
          };
          const pointGraphic = new Graphic({
            geometry: point,
            symbol: markerSymbol,
            popupTemplate: {
                // autocasts as new PopupTemplate()
                title: `${p.descripcion}`,
                content: [
                  {
                    type: "fields",
                    fieldInfos: [
                      {
                        fieldName: "Dirección: " + `${p.direccion}`
                      },
                      {
                        fieldName: "Teléfono: "  + `${p.telefono}`
                      },
                      {
                        fieldName: "Coordenadas: "  + `${p.coordenadas}`
                      },
                      {
                        fieldName: "Categoría: "  + `${p.categoria}`
                      }
                    ]
                  }
                ]
              }
          });
          graphicsLayer.add(pointGraphic)
        })
        
       
        const view = new MapView({
            container: mapRef.current,
            map:map,
            center:[-58.370403,-34.608303],
            zoom: 15
        });
        return () => {view && view.destroy(); }
        }, [pois]
    )
    
    return <div ref={mapRef} style={{height:"100vh", width:'100%',marginTop:40}}/>
}