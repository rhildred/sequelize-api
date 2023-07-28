import {app} from './src/app.js';

const server = app.listen(8080, ()=>{
    console.log(`listening on ${server.address().port}`);
})