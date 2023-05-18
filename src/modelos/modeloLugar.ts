import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions:{
        collection: "lugar"
    }
})

class Lugar{
    @prop()
    public id!: number

    @prop()
    public nombre!: string

    @prop()
    public latitud!: number
    
    @prop()
    public longitud!: number
}

export let modeloLugar = getModelForClass(Lugar)