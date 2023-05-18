import { ReporteDeIncendioPorFecha } from "../clases/reporteDeIncendioPorFecha";
import bodyParser from "body-parser";
import { Router } from "express";
export const rutaReporte = Router();
import { reportes } from "../..";
import { lugares } from "../..";
import BD from "../controladores/BD";
import { validacionDeToken } from "../lib/verificarToken";


rutaReporte.get("/", validacionDeToken,BD.getReportes)

rutaReporte.get("/:id", validacionDeToken,BD.getUnReporte)

rutaReporte.post("/", validacionDeToken,BD.añadirReporte)  

rutaReporte.delete("/:id", validacionDeToken,BD.borrarReporte)

rutaReporte.put("/:id", validacionDeToken,BD.ponerReportes)

rutaReporte.patch("/:id", validacionDeToken,BD.ponerReporte)

// mostrar incendios por lugar
rutaReporte.get("/reporteDeIncendio/:id/buscarIncendio", (_req,_res) => {
    const p = lugares.find(item => {
        return item.id == Number(_req.params.id)
    })
    const a = reportes.find(item =>{
        return item.lugar == p
    })

    _res.json(a)
})

// cuantos incendios hubo en una determinada fecha
rutaReporte.get("/incendios/:fecha/cantIncendiosEnUnaFecha", (_req,_res) => {
    let aux:Array<Date> = new Array<Date>
    reportes.forEach(element => {
      if(element.fecha == new Date(_req.params.fecha)){
        aux.push(element.fecha)
      }
    });
    _res.json("cantidad de incendios: " + aux.length)
})