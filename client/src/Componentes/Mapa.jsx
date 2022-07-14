import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import popupTemplate from "@arcgis/core/PopupTemplate";
import { useSelector } from "react-redux";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion";
import Search from "@arcgis/core/widgets/Search";
export const Mapa = () => {
  let pois = useSelector((state) => state.pois);
  const mapRef = useRef(null);
  useEffect(() => {
    const map = new Map({
      basemap: "dark-gray-vector",
    });
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);
    pois.map((p) => {
      let coord = p.coordenadas;
      const point = {
        type: "point",
        longitude: Number(coord[0]),
        latitude: Number(coord[1]),
      };
      const markerSymbol = {
        type: "simple-marker",
        color: [255, 206, 22],
        outline: {
          color: [174, 174, 255],
          width: 2,
        },
      };
      const pointGraphic = new Graphic({
        geometry: point,
        symbol: markerSymbol,
        popupTemplate: {
          // autocasts as new PopupTemplate()
          title: `${p.descripcion}`,
          content: `
                <ul>
                <li>Dirección: <b>${p.direccion}</b></li>
                <li>Tel.: ${p.telefono}</li>
                <li>Coordenadas: ${p.coordenadas}</li>
                <li>Categoria: ${p.categoria} </li>
                <ul>`,
        },
      });
      graphicsLayer.add(pointGraphic);
    });

    const view = new MapView({
      container: mapRef.current,
      map: map,
      center: [-58.370403, -34.608303],
      zoom: 15,
    });
    const search = new Search({  
      view: view
    });
    const ccWidget = new CoordinateConversion({
      view: view,
    });
    view.ui.add(ccWidget, "top-left");
    view.ui.add(search, "top-right")
    return () => {
      view && view.destroy();
    };
  }, [pois]);

  return (
    <div
      ref={mapRef}
      style={{ position:'relative', height: "85vh", width: "100%", marginTop: 90 }}
    />
  );
};
