import path from 'node:path';
import fs from 'node:fs/promises';

export async function getContent(baseDir,req)
{
   const htmlFolder = path.join(baseDir, (req.url.includes('html')|| req.url === '/') ?  'html' : '');
   const filePath = path.join(htmlFolder, req.url === '/' ? 'HomePage.html' : req.url);
   console.log(req.url);
   const content = await fs.readFile(filePath);
   return content;
}
export function sendResponse(req, res, content, contentType){
    res.statusCode = 200;
    res.setHeader('Content-Type',contentType);
    res.end(content);
}

export function getContentType(fileExt){
    const extToContentTypeMap = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.json': 'application/json',
        '.txt': 'text/plain'
    };
    return extToContentTypeMap[fileExt] || 'application/octet-stream';
}