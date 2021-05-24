const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});

// from the code snapshot
router.get('/aquarium', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/aquarium.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './pubic/index.html'));
});


module.exports = router;