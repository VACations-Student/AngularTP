import { Lugar } from "../clases/lugar";
import bodyParser from "body-parser";
import { Router } from "express";
export const rutaLugar = Router();
import { lugares } from "../..";
import { validacionDeToken } from "../lib/verificarToken";
import BD from "../controladores/BD";

rutaLugar.get("/", validacionDeToken,BD.getLugares)

rutaLugar.get("/:id", validacionDeToken,BD.getUnLugar)

rutaLugar.post("/añadirLugar", validacionDeToken,BD.añadirLugar)  

rutaLugar.delete("/:id", validacionDeToken,BD.borrarLugar)

rutaLugar.put("/:id", validacionDeToken,BD.ponerLugares)

rutaLugar.patch("/:id", validacionDeToken,BD.ponerLugar)

// mostrar nombre por coordenadas
rutaLugar.get("/incendios/:latitud/:longitud/buscarPorCoordenadas", (_req,_res) => {
    const p = lugares.find(item => {
      return item.latitud == Number(_req.params.latitud) && item.longitud == Number(_req.params.longitud)
    })
    if(p){
      _res.json(p.nombre)
    }
})