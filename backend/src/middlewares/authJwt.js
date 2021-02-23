import jwt from 'jsonwebtoken';
import config from '../config';
import db from '../database';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({
            message: "Es Necesario un token"
        })

        const decoded = jwt.verify(token, config.SECRET)
        await db.query('SELECT * FROM user WHERE rut = ?', [decoded.id], (err,rows)=>{
            if (err) throw err;
            req.userId = decoded.id;
            next()
        })
        
    } catch (error) {
        res.json({message: "No autorizado"})
    }
}


export const isModerator = async (req, res, next) => {
    await db.query('SELECT * FROM user WHERE rut = ?',[req.userId], (err, rows) =>{
        if (err) throw err;
        if(rows[0].rol === "Moderador"){
            next()
        }else{
            res.json({message: "No posee privilegios de moderador"})
            return;
        }
        
    })    
    
}
export const isAdmin = async (req, res, next) => {
    await db.query('SELECT * FROM user WHERE rut = ?',[req.userId], (err, rows) =>{
        if (err) throw err;
        if(rows[0].rol === "Administrador"){
            next()
        }else{
            res.json({message: "No posee privilegios de Administrador"})
            return;
        }
        
    })  
}