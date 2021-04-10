const {Router} = require('express');
const router = Router();



router.get ('/', (req, res)=>{
    res.send ('holaaa soy coco')
});



module.exports = router;