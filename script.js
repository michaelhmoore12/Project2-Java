async function fetchdata() {
    try {
        let response = await fetch ("https://api.giphy.com/v1/gifs/search?api_key=yyOB3Qs8UhtFdx5qKVB51PPZt5Xvi8v4&q=funny+cat&limit=5&offset=0&rating=g&lang=en");
        let giphyJson = await response.json();
        let giphyData = giphyJson.data;
        console.log(giphyData);

        giphyArray.forEach(element => {
            let newImage = document.createElement('img');
            newImage.src = element.images.original.url;
            document.getElementById('giphyimages').appendChild(newImage);
        });

    }
    catch (error) {
        console.error('Error:', error);
    }
}
document.getElementById('buttonSeach').addEventListener('click', fetchdata)


