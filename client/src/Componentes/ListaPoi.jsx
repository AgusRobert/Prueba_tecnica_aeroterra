import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPois } from "../store/actions";
import { DividerP, PaperLista, PaperListaP, Texto  } from "./MuiElements";
 
export default function ListaPoi(){
   let dispatch = useDispatch()
    let pois = useSelector((state) => state.pois);
    useEffect(() => {
        //Obtencion de los pois
        dispatch(getPois());
      }, []);
      return(
        <PaperLista>
           {pois.map((p)=>{
            return(
                <>
                <PaperListaP>
                    <Texto variant="h6">{p.descripcion}</Texto>
                    <Texto variant="h7">{p.direccion}</Texto>
                </PaperListaP>
                <DividerP/>
                </>
            )
           })}
        </PaperLista>
      )
}