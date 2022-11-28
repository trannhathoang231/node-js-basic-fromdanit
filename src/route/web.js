import express from "express";

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('index.ejs')
    })


    router.get('/about', (req, res)=> {
        res.send(`I'm Eric!`)
    })

    //only requests to `/` will be sent to our "router" 
    //-> để cho express hiểu được thì app.use -> ứng dụng website bắt đầu bằng /
    return app.use('/',router)
}

export default initWebRoute;