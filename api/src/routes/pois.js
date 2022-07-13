const { Router } = require("express");
const { Poi } = require("../db");
const router = Router();
const { Op } = require("sequelize");
// router.get("/", (req, res) => {
//   res.send("Soy el get ;)");
// });
// Si esto no funciona intentar un try catch

router.get("/", async (req, res, next) => {
  const { descripcion } = req.body;
  let result = null;
  try {
    if (descripcion) {
      result = await Poi.findAll({
        where: {
          descripcion: {
            [Op.iLike]: "%" + descripcion + "%",
          },
        },
        order: [["descripcion", "ASC"]],
      });
      res.json(result);
      if (result.length === 0) {
        return res.send({ error: `El POI ${descripcion} no existe.` });
      }
    } else {
      const response = await Poi.findAll({
        order: [["descripcion", "ASC"]],
      });

      res.json(response);
    }
  } catch (error) {
    next(error);
  }
});

router.post("/addPoi", async (req, res, next) => {
  try {
    const { descripcion, direccion, telefono, coordenadas, categoria } =
      req.body;
    if (descripcion && direccion && coordenadas && categoria) {
      const [poi, created] = await Poi.create({
        descripcion,
        direccion,
        coordenadas,
        categoria,
        telefono,
        //form
      });

      return res.send("Actividad creada con exito");
    } else {
      res.json({ error: "Falta un elemento del form" });
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/delPoi", async (req, res, next) => {
  const { coordenadas } = req.body;
  try {
    if (coordenadas) {
      const elimPoi = await Poi.findOne({
        where: {
          coordenadas,
        },
      });

      if (elimPoi) {
        await elimPoi.destroy();
        return res.json({ message: "POI eliminado correctamente" });
      }
    } else {
      res.json({ error: "No se encontró este POI" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
