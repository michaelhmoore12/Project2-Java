


async function fetchData() {
    try {
        let response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=1P7wgMmOzmm8JIg5YybF4gX5ykAVQAwG&q=cat');
        let ApiJson = await response.json();

        // console.log (ApiJson)
        // console.log (ApiJson.data)

        let ApiArray = ApiJson.data
        console.log (ApiArray)

   
        for (let index=0; index< ApiArray.length; index++)  {
            //console.log (ApiArray[index])
            console.log (ApiArray[index].images.original.url)
            let newImage = document.createElement('img')
            newImage.src = ApiArray[index].images.original.url
            document.getElementById('gifContainer').append(newImage)
        }

    } catch (error) { 
        console.log (error)
    }
}
fetchData();

// async function FetchRandomImages() {
//        let response = await fetch ("https://api.giphy.com/v1/gifs/search?api_key=OcDmeBnKA0XvIap86uGBULrJ9YWddSbZ&q=cat")

//     let jsonGiphy = await response.json()

//     console.log (jsonGiphy.data)

// fetchData();
// }