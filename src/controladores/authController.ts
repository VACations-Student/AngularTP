import { Request, Response } from "express";
import modeloUsuario, {IUser} from "../modelos/modeloUsuario";
import jwt from 'jsonwebtoken'; 

export const signup = async (req: Request, res: Response) => {
    const usuario : IUser = new modeloUsuario({
        username: req.body.username,
        password: req.body.password
    });
    usuario.password = await usuario.encryptPassword(usuario.password);
    const usuarioGuardado = await usuario.save();
    //token
    const token: string = jwt.sign({_id: usuarioGuardado._id}, process.env.TOKEN_SECRET || 'tokentest');
    res.header('authentication', token).json(usuarioGuardado);   
};

export const signin = async (req: Request, res: Response) => {
    const usuario = await modeloUsuario.findOne({username: req.body.username});
    if(!usuario) return res.status(400).json('Usuario o contraseña erroneas');
    
    const contraseñaCorrecta: boolean = await usuario.validatePassword(req.body.password);
    if(!contraseñaCorrecta) return res.status(400).json('Contraseña invalida');

    const token: string = jwt.sign({_id: usuario._id}, process.env.TOKEN_SECRET || 'tokentest',{
        expiresIn: 60 * 60 * 24
    });
    res.header('authentication', token).json(usuario); 

};

export const profile = async (req: Request, res: Response) => {
    const usuario = await modeloUsuario.findById(req.userId)
    if(!usuario) return res.status(404).json('Usuario no encontrado')
    res.json(usuario)
};