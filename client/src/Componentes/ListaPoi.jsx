import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delPoi, getPois } from "../store/actions";
import { DeleteBtn, DividerP, PaperLista, PaperListaP, Texto  } from "./MuiElements";
 
export default function ListaPoi(){
   let dispatch = useDispatch()
    let pois = useSelector((state) => state.pois);
    useEffect(() => {
        //Obtencion de los pois
        dispatch(getPois());
      }, [delPoi]);
    //   useEffect(() => {
    //     //Obtencion de los pois
    //     dispatch(getPois());
    //   }, [handleDelete]);
      const handleDelete=(e) => {
        dispatch(delPoi(e.target.value))
      }
      return(
        <PaperLista>
           {pois.map(p =>{
            return(
                <>
                <PaperListaP key={p.coordenadas}>
                    <Texto key={p.descripcion} variant="h6">{p.descripcion}</Texto>
                    <Texto  key={p.direccion} variant="h7">{p.direccion}</Texto>
                    <DeleteBtn  onClick={handleDelete} value={p.coordenadas}>X</DeleteBtn>
                </PaperListaP>
                
                <DividerP/>
                </>
            )
           })}
        </PaperLista>
      )
}