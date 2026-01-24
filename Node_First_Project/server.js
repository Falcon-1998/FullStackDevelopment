import http from 'node:http';
import { parse } from 'node:url';
import {getdata} from './db.js';
import { sendJSONResponse  as sjr} from './sendJSONResponse.js';
import { getDataByPathParams as gdbpp} from './getDataByPathParams.js';
import { getDataFromQueryParams as gdfqp } from './getDataFromQueryParams.js';
const Port = 3000;

const animal ={
    type : 'elephant',
    nickname : 'Elon Tusk'
}


const server = http.createServer(async (req,res)=>{ 

    const destinations = await getdata();
    const urlObj = new URL(req.url, `http://${req.headers.host}`);
        const queryParams = Object.fromEntries(urlObj.searchParams.entries());
        console.log('Query Parameters:', queryParams);
  
    if (urlObj.pathname === '/api' && req.method === 'GET') {
        
        const filteredData = gdfqp(queryParams, destinations);
        sjr(res, 200, filteredData);  
    }
    else if (req.url.startsWith('/api/continents') && req.method === 'GET') {
       const continent = req.url.split('/').pop();
       /*
         "/api/places/europe".split('/') → ['', 'api', 'places', 'europe']
          "/europe".split('/') → ['', 'europe']
          .pop() = grabs last item from array:
          ['', 'api', 'places', 'europe'] → 'europe'
          ['', 'europe'] → 'europe'
       */ 
      const filteredData =  gdbpp('continent', continent, destinations);
      sjr(res, 200, filteredData);
    }
    else if (req.url.startsWith('/api/country') && req.method === 'GET') {
        const country = req.url.split('/').pop();
        const filteredData = gdbpp('country', country, destinations);
        sjr(res, 200, filteredData);
    }
   
    else {
        sjr(res, 404, { message: 'Route not found' });
    }
 }
);
server.listen(Port, ()=>{
  console.log(`Server is listening on port ${Port}`);
});
25
