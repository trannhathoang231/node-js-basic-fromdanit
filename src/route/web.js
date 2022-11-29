import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/about', (req, res)=> {
        res.send(`I'm Eric!`)
    })

    //only requests to `/` will be sent to our "router" 
    //-> để cho express hiểu được thì app.use -> ứng dụng website bắt đầu bằng /
    return app.use('/',router)
}

export default initWebRoute;