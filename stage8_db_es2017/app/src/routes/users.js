import { Router } from 'express';
import UserController from '../controllers/users';

const routes = Router();
const usercontroller = new UserController();


routes.get('/', (req, res) => {
    usercontroller.getUsers(res);
});

routes.post('/', (req, res) => 
    {console.log(req.body);
    if (req.body.name != null){
      usercontroller.createUser(req.body.name)
      res.statusCode = 201;
      res.send();
    }
    else {
      res.statusCode = 400;
      res.send();
    }
});

export default routes;