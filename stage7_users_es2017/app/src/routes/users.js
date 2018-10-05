import { Router } from 'express';

const routes = Router();

let user_list = ["Anna", "Bob"];

routes.get('/', (req, res) => {
    res.json(user_list);
});

routes.post('/', (req, res) => 
    {console.log(req.body);
    if (req.body.name != null){
      user_list.push(
        {"Name": req.body.name, "ID": user_list.length + 1}
      );
      res.statusCode = 201;
      res.send();
    }
    else {
      res.statusCode = 400;
      res.send();
    }
});

export default routes;