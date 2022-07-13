import { useState } from "react";
import { useDispatch } from "react-redux";
import { validacion } from "./validacion";
import Swal from "sweetalert2";
import {
  ButtonStyle,
  InputStyle,
  LabelStyle,
  MenuItemStyle,
  PaperForm,
  SelectStyle,
  sxSelectStyle,
  TextoError,
} from "./MuiElements";
import { amber } from "@mui/material/colors";

export function PoiForm() {
  //para validacion de errores
  const [errores, setErrores] = useState({ block: true });
  //para campos de texto
  const [poiForm, setPoiForm] = useState({
    descripcion: "",
    direccion: "",
    telefono: "",
    coordenadas: [],
    categoria: "",
  });
  //constantes necesaria para el despacho de peticiones
  const dispatch = useDispatch();
  //manejo de cambios en los campos
  const handleOnChange = (e) => {
    setPoiForm({
      ...poiForm,
      [e.target.name]: e.target.value,
    });
    setErrores(
      validacion({
        ...poiForm,
        [e.target.name]: e.target.value,
      })
    );
  };
  //manejador de envio del formulario
  const onSubmit = async (e) => {
    e.preventDefault();
    const objResponse = {};
    // dispatch(postPoi(poiForm));
    setPoiForm({
      descripcion: "",
      direccion: "",
      telefono: "",
      coordenadas: [],
      categoria: "",
    });
    Swal.fire({
      title:
        "Formulario enviado correctamente. Tu punto de interes se cargará en el mapa &#x1F601",
      width: 600,
      timer: 4000,
      timerProgressBar: true,
      padding: "1em",
      icon: "success",
      color: "white",
      background:
        "linear-gradient(0deg, rgba(255,173,50,0.9108018207282913) 7%, rgba(0,0,0,0.804359243697479) 33%, rgba(34,29,29,0.927608543417367) 48%, rgba(0,0,0,0.8911939775910365) 87%)",
      backdrop: `
          rgba(0,0,123,0.2)0  `,
      confirmButtonText: "Entiendo",
    }).then(() => {
      window.location.replace("http://localhost:3000/");
    });
  };
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <PaperForm>
          {/* Descripcion */}
          <LabelStyle>Descripción *</LabelStyle>
          <InputStyle
            style={{ marginBottom: "20px" }}
            type="text"
            value={poiForm.descripcion}
            placeholder="Ej: Cafeteria Cafe Rico"
            name="descripcion"
            onChange={(e) => handleOnChange(e)}
            required
          />
          {errores?.descripcion && (
            <TextoError variant="h6" sx={{ color: "red" }}>
              {errores.descripcion}
            </TextoError>
          )}
          {/* Dirección */}
          <LabelStyle>Dirección *</LabelStyle>
          <InputStyle
            style={{ marginBottom: "10px" }}
            type="text"
            value={poiForm.direccion}
            name="direccion"
            placeholder="Ej: Santa Fe 1045"
            onChange={(e) => handleOnChange(e)}
            required
          />
          {errores?.direccion && (
            <TextoError variant="h6" sx={{ color: "red" }}>
              {errores.direccion}
            </TextoError>
          )}

          {/* Telefono */}
          <LabelStyle>Telefono</LabelStyle>
          <InputStyle
            style={{ marginBottom: "20px" }}
            type="text"
            value={poiForm.associateProducer}
            name="telefono"
            placeholder="Tel: ej: 1155112204"
            onChange={(e) => handleOnChange(e)}
          />
          {errores?.telefono && (
            <TextoError variant="h6" sx={{ color: "red" }}>
              {errores.telefono}
            </TextoError>
          )}

          {/* Coordenadas */}
          <LabelStyle>Coordenadas *</LabelStyle>
          <InputStyle
            style={{ marginBottom: "20px" }}
            type="text"
            value={poiForm.coordenadas}
            name="coordenadas"
            placeholder=" (X,Y) Ej: -39.421312,52.98423"
            onChange={(e) => handleOnChange(e)}
            required
          />
          {errores?.coordenadas && (
            <TextoError variant="h6" sx={{ color: "red" }}>
              {errores.coordenadas}
            </TextoError>
          )}

          {/* Categoria */}
          <LabelStyle>Categoría *</LabelStyle>
          <SelectStyle
            style={{ backgroundColor: amber[200] }}
            name="categoria"
            onChange={(e) => handleOnChange(e)}
            select
            variant="outlined"
            size="small"
            sx={sxSelectStyle}
            required
          >
            <MenuItemStyle hidden={true} disabled>
              Categoria
            </MenuItemStyle>
            <MenuItemStyle key={1} value="Comercial">
              Comercial
            </MenuItemStyle>
            <MenuItemStyle key={2} value="Residencial">
              Residencial
            </MenuItemStyle>
            <MenuItemStyle key={3} value="Mixto">
              Mixto
            </MenuItemStyle>
          </SelectStyle>
          {errores?.categoria && (
            <TextoError variant="h6" sx={{ color: "red" }}>
              {errores.categoria}
            </TextoError>
          )}
          <br></br>
          <ButtonStyle type="submit">Agregar POI</ButtonStyle>
        </PaperForm>
      </form>
    </>
  );
}
