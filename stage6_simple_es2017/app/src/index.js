import { app as meineapp } from './app';

const { PORT = 8080 } = process.env;

const out = function(){console.log(`Listening on port ${PORT}`)};
out.bind(this);


meineapp.listen(PORT, out); // eslint-disable-line no-console