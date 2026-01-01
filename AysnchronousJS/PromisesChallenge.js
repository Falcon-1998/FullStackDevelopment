function getPromise(url){
    return new Promise((resolve, reject) => {
       const img = new Image();
       img.src = url;
       img.alt = 'a beautiful scenery';
       img.addEventListener('load', () => resolve(img));
       img.addEventListener('error', () => reject(new Error('Failed to load image at ' + url)));
    });
}

const images = [
    'https://scrimba.com/links/advancedjs-resources-images-scenic1',
    'https://scrimba.com/links/advancedjs-resources-images-scenic2',
    'https://scrimba.com/links/advancedjs-resources-images-scenic3'
];

async function loadAndDisplayImages(imageUrls) {
    const container = document.getElementById('dataContainer');
    // const promiseOne = getPromise(images[0]);
    // const promiseTwo = getPromise(images[1]);
    // const promiseThree = getPromise(images[2]);

    const promises = imageUrls.map(url => getPromise(url)); // this is a better way to create array of promises
    try {
    var results = await Promise.all(promises);
    //     for( let img of results){
    //     container.appendChild(img);
    //  }

    results.forEach(img => container.appendChild(img)); // better way to append images
    }
    catch (error) {
        console.error('Error loading images:', error);
    }


}

document.getElementById('loadDataBtn').addEventListener('click', () => {
    loadAndDisplayImages(images);
});