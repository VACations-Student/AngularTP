import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";
import { Lugar } from "../clases/lugar";
@modelOptions({
    schemaOptions:{
        collection: "reporte"
    }
})



class ReporteDeIncendioPorFecha{
    @prop()
    public id!: number

    @prop()
    public fecha!: string

    @prop()
    public estado!: string

    @prop()
    public lugar!: Lugar
}

export let modeloReporte = getModelForClass(ReporteDeIncendioPorFecha)