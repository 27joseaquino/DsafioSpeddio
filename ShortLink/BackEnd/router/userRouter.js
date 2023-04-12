const router = require('express').Router()
const User = require("../models/User");

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post("/", async (req, res) => {

    const { name, email, password, confirmPassword } = req.body

    if (!name) {
        return res.status(422).json({ msg: 'Algum campo não foi preenchido' })

    }
    if (!email) {
        return res.status(422).json({ msg: 'Algum campo não foi preenchido' })

    }
    if (!password) {
        return res.status(422).json({ msg: 'Algum campo não foi preenchido' })

    }
    if (!confirmPassword) {
        return res.status(422).json({ msg: 'Algum campo não foi preenchido' })

    }
    if (confirmPassword != password) {
        return res.status(422).json({ msg: 'As senhas não correspondem' })

    }

    const userExist = await User.findOne({ email: email })
    if (userExist) {
        return res.status(422).json({ msg: 'Email já cadastrado' })
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({
        name,
        email,
        password: passwordHash,
    })

    try {

        await user.save()

        res.status(201).json({ msg: "Usuário Cadastrado com sucesso!" });

    } catch (error) {
        res.status(500).json({ error: error });
        return
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (!password) {
        return res.status(422).json({ error: 'Algum campo não foi preenchido' })

    }
    if (!email) {
        return res.status(422).json({ error: 'Algum campo não foi preenchido' })

    }
    const userExist = await User.findOne({ email: email })
    if (!userExist) {
        return res.status(404).json({ msg: 'Usuário não Encontrado' })
    }

    const checkPasword = await bcrypt.compare(password, userExist.password)

    if (!checkPasword) {
        return res.status(422).json({ msg: 'Senha inválida!' })
    }
    try {
        const secret = 'DPOMGOEWGEO6S45d5vvdoweggeom8d8v5rvbr7v8rb7vrbom'

        const token = jwt.sign(
            {
                id: userExist._id,
            },
            secret,)
        res.status(200).json({ msg: 'Usuário autenticado com sucesso', token })

    } catch (error) {
        res.status(500).json({ error: 'Internal  server Error' });
        return
    }
})

module.exports = router