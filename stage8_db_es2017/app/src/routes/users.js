import { Router } from 'express';
import * as Users from '../controllers/users';

const routes = Router();

let user_list = ["Anna", "Bob"];

routes.get('/', (req, res) => {
    Users.getUsers(res);
});

routes.post('/create', (req, res) => 
    {console.log(req.body);
    if (req.body.name != null){
      Users.createUser(req.body.name)
      res.statusCode = 201;
      res.send();
    }
    else {
      res.statusCode = 400;
      res.send();
    }
});

export default routes;