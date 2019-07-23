const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const app = express();

app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', router);
// app.use(cors());

router.get('/', cors(), (req, res, next)=>{
    res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' });
});


app.listen(9000, ()=>{
    console.log('server listing on port 9000');
});