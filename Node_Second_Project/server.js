import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs/promises';
import { getData } from './js/getData.js';
import { handleGet, handlePost , handleEvents} from './handlers/routeHandlers.js';
import { getContent, sendResponse, getContentType} from './js/sendRespone.js';
const PORT = 3000;
// __dirname
const __dirname = import.meta.dirname;


const server = http.createServer(async (req,res)=>{
    if (req.url.includes('api'))
    {
        if (req.method === 'GET')
        {
           return await handleGet(req,res);
        }
        if (req.method === 'POST')
        {
            console.log('POST request received at /api');
            return await handlePost(req, res);
        }
    }
    else if (req.url === '/events')
    {
        handleEvents(req,res);
    }
    else 
    {
        const content = await getContent(__dirname, req);
        const fileExt = path.extname(req.url === '/' ? 'HomePage.html' : req.url);
        const contentType = getContentType(fileExt);
        sendResponse(req, res, content, contentType);
    }
});
server.listen(PORT, ()=>{ 
    console.log('Server is listening on port 3000');
});
