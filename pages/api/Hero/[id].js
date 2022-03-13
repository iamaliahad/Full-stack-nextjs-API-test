import dbConnect from '../../../db/dbconnect';

import Hero from '../../../models/Hero';

dbConnect()

//get a unique record, edit, delete
const HelloID = async (req, res) => {
    const{
        query: {id},
        method
    } = req;
    switch(method){
        case 'GET':
            try{
                const hero = await Hero.findById(id);
                if(!hero){
                    res.status(404).json({
                        success: false,
                        
                    })
                }
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
        case 'PUT':
            try{
                const hero = await Hero.findByIdAndUpdate(id, req.body, {new: true,
                    runValidators: true});
                if(!hero){
                    res.status(404).json({
                        success: false,
                        
                    })
                }
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
        case 'DELETE':
            try{
                const hero = await Hero.findByIdAndDelete({_id:id});
                if(!hero){
                    res.status(404).json({
                        success: false,
                        
                    })
                }
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
        default:
            res.status(500).json({
                success: false,
                message: err.message
            })
            break;
        }


    }
    export default HelloID;