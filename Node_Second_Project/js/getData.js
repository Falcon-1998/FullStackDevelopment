import path from'node:path';
import fs from'node:fs/promises';

export async function getData()
{
    try {const data = await fs.readFile(path.join(import.meta.dirname,'data.json'),'utf8');
    return JSON.parse(data);}
    catch (error) {
        console.error('Error reading data file:', error);
        return [];
    }
}
export async function postData(data)
{
    try {
        await fs.writeFile(path.join(import.meta.dirname,'data.json'),JSON.stringify(data, null, 2),'utf8');
    } catch (error) {
        console.error('Error writing data file:', error);
    }
}