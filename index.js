const http = require('http');
const fs = require('fs');



const getImages = async (index, directory) => {
  const imageUrl = `http://dzs.hongkewangluo.com/books/${directory}/${index}.jpg`;
  const outputFilePath = `./${directory}/${index}.png`;

  http.get(imageUrl, (response) => {
    response.pipe(fs.createWriteStream(outputFilePath));
  }).on('error', (error) => {
    console.error(`Failed to download image: ${error}`);
  });
}

async function getAllImages() {
  const directory = '3965a637933d7965e'
  fs.mkdirSync(directory)
  const page = 3
  for (let i = 1; i < page; i++) {
    await getImages(i, directory)
  } 
}

getAllImages()