import { Router } from 'express';

const routes = Router();

/**
 * GET home page
 */

// http://localhost:8080/user/foo

routes.get('/foo', (req, res) => {
  res.send("foobar");
});

export default routes;