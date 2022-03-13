import dbConnect from '../../../db/dbconnect';

import Hero from '../../../models/Hero';

dbConnect()

// get all record, post all record
const Hello= async (req, res) => {
    const {method} = req
    switch(method){
        case 'GET':
            try{
                const hero = await Hero.find({});
                res.status(200).json({
                    success: true,
                    hero: hero
                })
            } catch(err){
                res.status(500).json({
                    success: false,
                    message: err.message
                })
            }
            break;
        case 'POST':
            try{
                const hero = await Hero.create(req.body);
                res.status(201).json({
                    success: true,
                    hero: hero
                })
            } catch(err){
                res.status(500).json({
                    success: false,
                    message: err.message
                })
            }
            break;
        default:
            break; 
        
    }
}

export default Hello;
