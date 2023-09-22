const express = require('express')
const app = express()

//http://localhost:3000/rocio/123
app.get('/:login/:user/:password', (req, res) =>{
    const {user, password} = req.params

    if (user === 'rocio' && password === '123'){
        res.json({msg: 'Inicio de sesión exitoso'})
        return
    }
    res.status(404).json({msg: 'Error en el usuario o la contraseña'})
})

//http://localhost:3000/login?user=rocio&password=123
app.get('/login/', (req, res) =>{
    const {user, password} = req.query

if (!user || !password){
        res.status(400).json({
            msg: 'You need to provide <user> and <password> paramenters'
        })
        return
    }

if (user === 'rocio' && password === '123'){
        res.json({msg: 'Inicio de sesión exitoso'})
        return
}
    res.status(404).json({msg: 'Error en el usuario o la contraseña'})
})

/*FUNCIONALIDAD*/

app.post('/', (req, res) =>{
    res.json({msg:'Hola POST'})
})

app.put('/', (req, res) =>{
    res.json({msg:'Hola PUT'})
})

app.patch('/', (req, res) =>{
    res.json({msg:'Hola PATCH'})
})

app.delete('/', (req, res)=>{
    res.json({msg:'Hola DELETE'})
})

//http://localhost:3000/
app.listen(3000, () =>{
    console.log('listening on port 3000')
})