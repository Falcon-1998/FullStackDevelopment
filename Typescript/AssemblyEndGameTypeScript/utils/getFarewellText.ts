export function getFarewellText(language : string) : string {
   const farewells : { [key: string]: string } = {
        'HTML': 'Goodbye, HTML! Keep structuring the web!',
        'CSS': 'Farewell, CSS! Keep styling the world!',
        'Javascript': 'See you later, JavaScript! Keep making things interactive!',
        'React': 'Adieu, React! Keep building amazing UIs!',
        'Typescript': 'Goodbye, TypeScript! Keep adding type safety to the web!',
        'Node.js': 'Farewell, Node.js! Keep powering server-side applications!',
        'Python': 'See you later, Python! Keep being versatile and powerful!',
        'Assembly': 'Adieu, Assembly! Keep being close to the metal!'
    };
    return farewells[language] || `Goodbye, ${language}!`;
}