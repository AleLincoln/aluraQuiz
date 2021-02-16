import db from '../../db.json'


export default function dbHandler(req, res){
    if(req.method === 'OPTIONS'){
        res.status(200).end();
        return;
    }

    Response.setHeader('Access-Control-Allow-Credential', true)
    Response.setHeader('Access-Control-Allow-Origin', '*')
    Response.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS,PUT')




    res.json(db)
}