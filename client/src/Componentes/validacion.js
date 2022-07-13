export const validacion = (input) => {
  const RegExDire = /(?=.*[a-zA-Z])(.*?\d){4,}/;
  const RegExCoord =/^((\-?|\+?)?\d+(\.\d+)?),\s*((\-?|\+?)?\d+(\.\d+)?)$/;
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
        if (!RegExDire.test(input[p])) {
          errs[p] = `Una dirección debe llevar el nombre de su calle y su altura correspondiente`;
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
        if (!RegExCoord.test(input[p])) {
          errs[p] = `Las coordenadas son dos valores separados por una coma (,). La X: entre -180 y 180, la Y: entre -90 y 90. (X,Y)`;
          errs.block = true;
        }
      }
    }
  }
  return errs;
};
