import sanitizeHtml from 'sanitize-html';
export  function sanitizeInput(input) {
    const sanitizedInput = {};
    
    for (const [key,value] in Object.entries(input)) 
    {
        if (typeof value === 'string') 
        {
            sanitizedInput[key] = sanitizeHtml(value, {
                allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'br'],
                allowedAttributes: {}
            });
        } 
        else 
        {
            sanitizedInput[key] = value;
        }
    }
    return sanitizedInput;
}