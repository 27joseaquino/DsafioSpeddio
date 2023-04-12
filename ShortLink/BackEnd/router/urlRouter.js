const router = require('express').Router()

const jwt = require('jsonwebtoken')
const dbName = 'BancoShotLink';
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const mongoUrl = 'mongodb+srv://matheus:B1b58u0OCw93Pvk6@cluster0.auaizug.mongodb.net/?retryWrites=true&w=majority';

const Urls = require('../models/Urls');


router.post('/', async (req, res) => {
    const { link, shortUrl, count, idUser } = req.body;

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const secret = 'DPOMGOEWGEO6S45d5vvdoweggeom8d8v5rvbr7v8rb7vrbom'
    let userId = ''
    if (token) {
        const decodedToken = jwt.verify(token, secret);
        userId = decodedToken.id
    }

    if (!link) {
        return res.status(400).json({ msg: 'Preencha com uma URL' });
    }
    const linkExist = await Urls.findOne({ link: link })
    if (linkExist) {
        return res.status(400).json({ msg: 'Url já está no banco' });
    }
    const url = {
        link,
        shortUrl: Math.random().toString(36).substring(2, 8),
        count,
        idUser: userId
    }
    try {
        await Urls.create(url)
        res.json({ url });
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await Urls.find().sort({ count: -1 }).limit(100)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.get('/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;

    const db = await mongoClient.connect(mongoUrl);
    const urls = db.db(dbName).collection('urls');
    try {

        const url = await urls.findOneAndUpdate(
            { shortUrl },
            { $inc: { count: +0 } },
            { returnOriginal: false }
        );

        if (!url) {
            res.status(404).json({ error: 'URL not found' });
            return
        }

        console.log("url curta", url.value);

        res.redirect(url.value.link);

        await urls.findOneAndUpdate(
            { shortUrl },
            { $inc: { count: +1 } }
        );
    } catch (error) {

        res.status(500).json({ error: 'Internal server error' });

    }

});
module.exports = router









