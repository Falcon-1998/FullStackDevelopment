import { getData , postData} from '../js/getData.js';
import { sendResponse } from '../js/sendRespone.js';
import { readBody } from '../js/readBody.js';
import { sanitizeInput } from '../js/sanitizeInput.js';
import { eventEmitter } from '../events/newSightingEvent.js';
export async function handleGet(req,res)
{
  const data = await getData();
  const content = JSON.stringify(data);
  sendResponse(req, res, content, 'application/json');
}
export async function handlePost(req,res)
{
    const parserBody =  await readBody(req);
    const body = sanitizeInput(parserBody);
    const data = await getData();
    const id = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;
    const newEntryObj = {id, ...JSON.parse(body)};
    data.push(newEntryObj);
    postData(data);
    eventEmitter.emit('newSightingEvent',newEntryObj.title, 'A new sighting has been reported.'
    )

    sendResponse(req, res, JSON.stringify({message: 'New sighting added successfully'}), 'application/json');
}

export function handleEvents(req,res)
{
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
    });
   setInterval(async () => {
        const data = await getData();
        const randomIndex = Math.floor(Math.random() * data.length);
        const latestEntry = data[randomIndex];
        res.write(`data: ${JSON.stringify({event : 'news-update', stroy: latestEntry.title})}\n\n`);
   }, 2000);
}