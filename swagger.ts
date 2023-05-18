import { ReporteDeIncendioPorFecha } from "./src/clases/reporteDeIncendioPorFecha";
import swaggerJSDoc, {OAS3Definition,OAS3Options} from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'My Express API',
    version: '1.0.0',
    description: 'API documentation for My Express API'
  },
  servers: [
    {
      url: 'http://localhost:3000'
    }
  ],
  components:{
  schemas:{
    lugar: {
        type: "object",
        required: ["id","nombre","latitud","longitud"],
        properties: {
            id: {
                type: "number",
            },
            nombre: {
                type: "string",
            },
            latitud: {
                type: "number",
            },
            longitud: {
                type: "number",
            },
            items: {
                $ref: "#/components/schemas/lugar"
            }
        }
    },
    reporteDeIncendioPorFecha: {
        type: "object",
        required: ["id", "fecha", "estado", "lugar"],
        properties: {
            id: {
                type: "number",
            },
            fecha: {
                type: "Date",
            },
            estado: {
                type: "string",
            },
            lugar: {
                type: "Lugar",
            },
        }
    },
    usuario: {
        type: "object",
        required: ["username", "password"],
        properties: {
            username: {
                type: "string",
            },
            password: {
                type: "stirng",
            }
        }
    }
  },
},
  paths: {
    "/reporte": {
        get: {
            tag:["reporte"],
            description: "devuelve todos los reportes",
        }
    },
    "/reporte/{id}": {
        get: {
            tag:["reporte"],
            description: "devuelve un reporte en especifico",
            parameters: [
                {
                name: "id",
                in: "path",
                description: "devuelve un reporte",
                }
            ],
            responses: {
                200: {
                    description: "OK"
                },
                404: {
                    description: "NOT FOUND - No se encuentra el reporte"
                }
            }
        },
        delete: {
            tag:["reporte"],
            description: "borra un reporte en especifico",
            parameters: [
                {
                name: "id",
                in: "path",
                description: "borra un reporte",
                }
            ],
            responses: {
                200: {
                    description: "OK"
                },
                404: {
                    description: "NOT FOUND - No se encuentra el reporte"
                }
            }
        },
        put: {
            tag:["reporte"],
            description: "añade un reporte",
            parameters: [
                {
                name: "id",
                in: "path",
                description: "añade por reporte",
                }
            ],
            requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/reporteDeIncendioPorFecha"
                    }
                  }
                }
              },
            responses: {
                200: {
                    description: "OK"
                },
                404: {
                    description: "NOT FOUND - No se encuentra el reporte"
                }
            }
        },
        patch: {
            tag:["reporte"],
            description: "añade en especifico",
            parameters: [
                {
                name: "id",
                in: "path",
                description: "añade un reporte",
                }
            ],
            requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/reporteDeIncendioPorFecha"
                    }
                  }
                }
              },
            responses: {
                200: {
                    description: "OK"
                },
                404: {
                    description: "NOT FOUND - No se encuentra el reporte"
                }
            }
        }
    },
    "/reporte/":{
        post:{
            description:"crea un reporte",
            requestBody:{
                required: true,
                description:"crea un reporte",
                content:{
                    "aplication/json":{
                        schema:{
                            type: "object",
                            properties:{
                                id: {
                                    type: "number",
                                },
                                fecha: {
                                    type: "string",
                                },
                                estado: {
                                    type: "string",
                                },
                                lugar: {
                                    type: "object",
                                    properties:{
                                        id: {
                                            type: "number"
                                        },
                                        nombre: {
                                            type: "string"
                                        },
                                        latitud: {
                                            type: "number"
                                        },
                                        longitud: {
                                            type: "number"
                                        }
                                    }
                                }
                            }
                            
                        }
                    }
                    
                }
            }
        }
    },
    "/reporteDeIncendio/:id/buscarIncendio":{
        get:{
            tag:["reporte"],
            description: "devuelve un reporte en especifico",
         parameters: [
            {
            name: "id",
            in: "path",
            description: "devuelve un reporte",
            }
        ],
        responses: {
            200: {
                description: "OK",
                content:{
                    "application/json": {
                        schema: {
                          type: "array",
                          items:{
                            type: "object",
                            properties: {
                                fecha: {
                                    type: "Date",
                                },
                                estado: {
                                    type: "string",
                                },
                                lugar: {
                                    type: "Lugar",
                                },
                            }
                          }
                        }
                      }
                }
            },
            404: {
                description: "NOT FOUND - No se encuentra el reporte"
            }
        }
        }
    }, 

    "/incendios/:fecha/cantIncendiosEnUnaFecha":{
        get:{
            tag:["reporte"],
            description: "devuelve la cantidad de incendios de una fecha",
         parameters: [
            {
            name: "fecha",
            in: "path",
            schema:{
                type: "Date"
            },
            description: "devuelve la cantidad de incendios de una fecha",
            }
        ],
        responses: {
            200: {
                description: "OK",
            },
            404: {
                description: "NOT FOUND"
            }
        }
        }
    },

    "/lugar": {
        get: {
            tag:["lugar"],
            description: "devuelve todos los reportes",
        }
    },
    "/lugar/añadirLugar":{
        post:{
            description:"crea un lugar",
            requestBody:{
                required: true,
                description:"crea un lugar",
                content:{
                    "aplication/json":{
                        schema:{
                            type:"object",
                            properties:{
                                id: {
                                    type: "number",
                                },
                                nombre: {
                                    type: "string",
                                },
                                latitud: {
                                    type: "number",
                                },
                                longitud: {
                                    type: "number",
                                },
                            }
                        }
                    }
                    
                }
            }
        }
    },
    "/lugar/{id}": {
        get: {
            tag:["lugar"],
            description: "devuelve un lugar en especifico",
            parameters: [
                {
                name: "id",
                in: "path",
                description: "devuelve un lugar",
                }
            ],
            responses: {
                200: {
                    description: "OK"
                },
                404: {
                    description: "NOT FOUND - No se encuentra el lugar"
                }
            }
        },
        delete: {
            tag:["lugar"],
            description: "borra un lugar en especifico",
            parameters: [
                {
                name: "id",
                in: "path",
                description: "borra un lugar",
                }
            ],
            responses: {
                200: {
                    description: "OK"
                },
                404: {
                    description: "NOT FOUND - No se encuentra el lugar"
                }
            }
        },
        put: {
            tag:["lugar"],
            description: "añade un lugar",
            parameters: [
                {
                name: "id",
                in: "path",
                description: "añade un lugar",
                }
            ],
            requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/lugar"
                    }
                  }
                }
              },
            responses: {
                200: {
                    description: "OK"
                },
                404: {
                    description: "NOT FOUND - No se encuentra el lugar"
                }
            }
        },
        patch: {
            tag:["lugar"],
            description: "añade un lugar en especifico",
            parameters: [
                {
                name: "id",
                in: "path",
                description: "añade un lugar",
                }
            ],
            requestBody: {
                required: true,
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/lugar"
                    }
                  }
                }
              },
            responses: {
                200: {
                    description: "OK"
                },
                404: {
                    description: "NOT FOUND - No se encuentra el lugar"
                }
            }
        },
    },
    "/incendios/{latitud}/{longitud}/buscarPorCoordenadas":{
        get:{
            tag:["reporte"],
            description: "devuelve el nombre de un lugar",
         parameters: [
            {
            name: "latitud", 
            in: "path",
            description: "devuelve el nombre de un lugar",
            },
            {
                name: "longitud", 
                in: "path",
                description: "devuelve un reporte",
            }
        ],
        responses: {
            200: {
                description: "OK",
                content:{
                    "application/json": {
                        schema: {
                          type: "array",
                          items:{
                            type: "object",
                            properties: {
                                nombre: {
                                    type: "string",
                                }
                            }
                          }
                        }
                      }
                }
            },
            404: {
                description: "NOT FOUND"
            }
        }
        }
    },
    "/login":{
        post:{
            description:"inicia sesion un usuario",
            requestBody:{
                required: true,
                description:"inicia sesion un usuario",
                content:{
                    "aplication/json":{
                        schema:{
                            type:"object",
                            properties:{
                                username: {
                                    type: "string",
                                },
                                password: {
                                    type: "string",
                                }
                            }
                        }
                    }
                    
                }
            }
        }
    }

  }
};

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["./routes/*.ts"]
}

export default swaggerJSDoc(swaggerOptions);