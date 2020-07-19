const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors');

const Budget = require('../db/schema')


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')
        const decoded = jwt.verify(token, process.env.SECRET)
        if(decoded.username === req.params.name) {
            return next()
        }
        res.status(404).json({
            msg : 'Please Authenticate' 
        })
    }
    catch(e) {
        res.status(400).json({
            error : e
        })
    }
}

module.exports = auth

router.post('/addUser',cors(),async(req,res) => {
    const user = new Budget({
        _id : new mongoose.Types.ObjectId,
        username : req.body.username.trim(),
        password : await bcrypt.hash(req.body.password.trim(),8),
    })
    try {
        const newUSer = await user.save()
        const token = jwt.sign({ username : req.body.username }, process.env.SECRET, { expiresIn : '1h' });
        res.status(201).json({
            msg : 'Created',
            username : req.body.username,
            token : token
        })
    } catch (error) {
        res.status(400).json({
            error : error
        })
    }
})

router.post('/login',cors(),async(req,res) => {
    try {
        const user = await Budget.findOne({ username : req.body.username })
        if(user) {
            isAuth = await bcrypt.compare(req.body.password,user.password)
            if(isAuth) {
                return res.status(200).json({
                    msg : 'Authenticated',
                    username : req.body.username,
                    token : jwt.sign({ username : req.body.username },process.env.SECRET, { expiresIn : '1h' })
                })
            } else {
                return res.status(400).json({
                    error : 'Invalid Credentials'
                })
            }
        }
        res.status(404).json({
            error : 'not found'
        })
    } catch(error) {
        res.status(500).json({
            error : error
        })
    }
})

router.get('/getData/:name',auth,async(req,res)=>{
    try {
        const data = await Budget.findOne({username : req.params.name})
        if(data) {
            return res.status(200).json({
               totalCredit : data.totalCredit,
               totalDebit : data.totalDebit,
               credit : data.credit,
               debit : data.debit
            })
        }
        res.status(404).json({
            error : 'not found'
        })
    } catch (error) {
        res.status(400).json({
            error : error
        })
    }
})

router.patch('/updateData/:name',cors(),auth,async(req,res) => {
    try {
        const user = await Budget.findOne({username : req.params.name})
        if(!user) {
            return res.status(404).json({
                error : 'not found'
            })
        }
        const newUser = {
            ...user._doc,
            ...req.body.user
        }
        await Budget.replaceOne({ username : req.params.name },newUser);
        res.status(200).json({
            msg : 'updated',
            totalCredit : newUser.totalCredit,
            totalDebit : newUser.totalDebit,
            credit : newUser.credit,
            debit : newUser.debit
        })
    } catch (error) {
        res.status(500).json({
            error : error
        })
    }
})

router.delete('/deleteUser/:name',cors(),auth,async(req,res) => {
    try {
        await Budget.deleteOne({ username : req.params.name })
        res.status(200).json({
            msg : 'updated'
        })
    } catch (error) {
        res.status(500).json({
            error : error
        })
    }
})

module.exports = router;