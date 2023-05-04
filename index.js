const http = require('http');
const fs = require('fs');

const getImages = async (index) => {
  const imageUrl = `http://dzs.hongkewangluo.com/books/3965a637933d7965e/${index}.jpg`;
  const outputFilePath = `./image/${index}.png`;

  http.get(imageUrl, (response) => {
    response.pipe(fs.createWriteStream(outputFilePath));
  }).on('error', (error) => {
    console.error(`Failed to download image: ${error}`);
  });
}

for (let i = 1; i < 97; i++) {
  await getImages(i)
}