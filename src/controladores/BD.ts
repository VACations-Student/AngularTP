import { modeloLugar } from "../modelos/modeloLugar";
import express, { json } from "express";
import { modeloReporte } from "../modelos/modeloReporte";
//import { modeloUsuario } from "../modelos/modeloUsuario";

export default{
    getLugares: async(_req: express.Request, _res: express.Response) => {
        const asd = await modeloLugar.find()
        _res.status(200).send(asd);
    },
    
    getUnLugar: async(_req: express.Request, _res: express.Response) => {
      const asd = await modeloLugar.find({"id": _req.params.id})
      _res.status(200).send(asd)
    },

    añadirLugar: async(_req: express.Request, _res: express.Response) => {
        const asd = await modeloLugar.create(_req.body)
        _res.status(200).send(asd)
    },

    borrarLugar: async(_req: express.Request, _res: express.Response) => {
        const asd = await modeloLugar.findOneAndDelete({"id": _req.params.id})
        _res.status(200).send(asd)
    },

    ponerLugares: async(_req: express.Request, _res: express.Response) => {
        const asd = await modeloLugar.findOneAndReplace({"id": _req.params.id}, _req.body)
        _res.status(200).send(asd) // => put
    },

    ponerLugar:async (_req: express.Request, _res: express.Response) => {
        const asd = await modeloLugar.findOneAndUpdate({"id": _req.params.id}, _req.body)  
        _res.status(200).send(asd) // => patch      
    }, 

    getReportes: async(_req: express.Request, _res: express.Response) => {
        const asd = await modeloReporte.find()
        _res.status(200).send(asd);
    },

    getUnReporte: async(_req: express.Request, _res: express.Response) => {
        const asd = await modeloReporte.find({"id": _req.params.id})
        _res.status(200).send(asd)
    },

    añadirReporte: async(_req: express.Request, _res: express.Response) => {
        const asd = await modeloReporte.create(_req.body)
        _res.status(200).send(asd)
    },

    borrarReporte: async(_req: express.Request, _res: express.Response) => {
        const asd = await modeloReporte.findOneAndDelete({"id": _req.params.id})
        _res.status(200).send(asd)
    },

    ponerReportes: async(_req: express.Request, _res: express.Response) => {
        const asd = await modeloLugar.findOneAndReplace({"id": _req.params.id}, _req.body)
        _res.status(200).send(asd) // => put
    },

    ponerReporte:async (_req: express.Request, _res: express.Response) => {
        const asd = await modeloReporte.findOneAndUpdate({"id": _req.params.id}, _req.body)
        _res.status(200).send(asd) // => patch        
    }, 
}