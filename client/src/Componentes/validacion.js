export const validacion = (input) => {
  const RegExAlfa = /^[A-Za-z]+$/;
  const RegExNum = /^[0-9]*$/;
  const RegExInt = /^[-+]?[1-9]\d*$/;
  let errs = {
    block: false,
  };
  const telefono = ["telefono"];
  const coordenadas = ["coordenadas"];
  const direccion = ["direccion"];
  const descripcion = ["descripcion"];
  for (const p in input) {
    if (telefono.includes(p)) {
      if (typeof input[p] === "string") {
        if (input[p].length < 10 || input[p].length > 13 ) {
          errs[p] = `Un numero de telefono valido tiene hasta 13 digitos si contamos el codigo de area.`;
          errs.block = true;
        }
      }
    }
    if (direccion.includes(p)) {
      if (typeof input[p] === "string") {
        if (input[p] === "") {
          errs[p] = `Este campo no puede quedar sin completar`;
          errs.block = true;
        }
        if (input[p] === "P") {
          errs[p] = `Este campo es la direccion 2`;
          errs.block = true;
        }
      }
    }

    if (descripcion.includes(p)) {
      if (typeof input[p] === "string") {
        if (input[p] === "") {
          errs[p] = `Este campo no puede quedar sin completar`;
          errs.block = true;
        }
      }
    }
    if (coordenadas.includes(p)) {
      if (typeof input[p] === "string") {
        if (input[p] === "") {
          errs[p] = `Este campo no puede quedar sin completar`;
          errs.block = true;
        }
      }
    }
  }
  return errs;
};
