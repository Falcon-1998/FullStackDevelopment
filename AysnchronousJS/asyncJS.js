// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
// .then(res => res.json())
// .then(data =>  {
//     const imgEl = document.createElement('img');
//     imgEl.src = data.message;
//     document.body.appendChild(imgEl);
// })
// .catch(err => console.error('Error fetching dog image:', err)) 
// .finally(() => console.log('Fetch attempt finished'));

// async function fetchDogImage() {
//     try {
//     const res = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random');
//     if(!res.ok){
//         console.error('HTTP error', res.status);
//         return;
//     } // check for HTTP errors
//     const data = await res.json();
//     const imgEl = document.createElement('img');
//     imgEl.src = data.message;
//     document.body.appendChild(imgEl);
//     } catch (err) {
//         console.error('Error fetching dog image:', err);
//     } finally {
//         console.log('Fetch attempt finished');
//     }
// }

// fetchDogImage();
// const promise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;
//     if (success) {
//         resolve("Promise resolved successfully!");
//     } else { 
//         reject(new Error("Promise rejected!"));
//     }
// });

// for (let i = 0; i < 19; i++) { 
//   console.log('Promisse Response ::: ', i);
//   try {
//     const message = await promise;
//     console.log(message);
//     }
//     catch (err) {
//     console.error(err);
//     }
// }

// try {
//     const results = await preLoadImg('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg');
//     console.log(results);
//     document.body.appendChild(results);
// }
// catch (err) {
//     console.error('Image failed to load:', err);
// }
// async function preLoadImg(url) {
//  return new Promise((resolve,reject) => {
//     const img  = new Image();
//     img.src = url;
//     img.alt = 'a beautiful scenery';
//     img.addEventListener('load', () => resolve(img));
//     img.addEventListener('error', () => reject(new Error('Failed to load image at ' + url)));
//  });
// }


// Using promisis to escape callback hell

function uploadFile(callback){
    console.log('Step 1 : Uploading file...');
    setTimeout(() => {
        console.log('File uploaded.');
        callback();
    }, 1000);
}

function processFile(callback){
    console.log('Step 2 : Processing file...');
    setTimeout(() => {
        console.log('File processed.');
        callback();
    }, 1000);
}

function notifyUser(callback){
    console.log('Step 3 : Notifying user...');
    setTimeout(() => {
        console.log('User notified.');
        callback();
    }, 1000);
}

function uploadFile(){
    return new Promise((resolve, reject) => {
        console.log('Step 1 : Uploading file...');
        setTimeout(() => {
            console.log('File uploaded.');
            resolve();
        }, 1000);
    });
}

function processFile(){
    return new Promise((resolve, reject) => {
        console.log('Step 2 : Processing file...');
        setTimeout(() => {
            console.log('File processed.');
            resolve();
        }, 1000);
    });
}


function notifyUser(){
    return new Promise((resolve, reject) => {
        console.log('Step 3 : Notifying user...');
        setTimeout(() => {
            console.log('User notified.');
            resolve();
        }, 1000);
    });
}

uploadFile(()=> {
    processFile(() => {
        notifyUser(() => {
            console.log('All steps completed (callback hell).');
        });
    });
});

async function doFileOperations(){
    try {
        await uploadFile();
        await processFile();
        await notifyUser();
        console.log('All steps completed (using async/await).');
    }
    catch (err) {
        console.error('Error during file operations:', err);
    }
}

doFileOperations();

// Promise.all example , to run multiple promises in parallel
