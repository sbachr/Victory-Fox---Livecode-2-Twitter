const User = require('../models/User')
const hash = require('../helpers/hashHelper')

module.exports      = {

    signup: (req, res) => {
        let objUser = {
            name    : req.body.name,
            username: req.body.username,
            email   : req.body.email,
            password: req.body.password
        }
        User.create(objUser)
        .then( response => res.status(201).json({response}))
        .catch( err => {
            res.status(500).json(err)
        })
    },

    signin : (req, res) => {
        let email           = req.body.email
        // let username        = req.body.username
        let password        = req.body.password

        User.findOne({email: email})
        // console.log(username)
        .then( user => {
            if(hash.bcdecode(password, user.password)) { 
                res.status(200).json({
                    err:false,
                    name: user.name,
                    token:hash.jwtencode({
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    })
                })
            } else {
                res.status(400).json({message:"Password is wrong"})
            }
        })
        .catch(err => {
            res.status(500).json({err:true})
        })
    },

    getOne: (req, res) => {
        User.findById({_id: req.decoded.id})
        .then( response => res.status(200).json(response))
        .catch( err => res.status(500).json(err))
    },

    getAllUser : (req,res) => {
        User.find()
        .then(user => {
            res.status(200).json({
                user
            })
        })
        .catch(err => {
            res.status(500).json({
                err
            })
        })
    }
}