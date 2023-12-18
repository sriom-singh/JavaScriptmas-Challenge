const dialogModal = document.getElementById('dialog-modal')
dialogModal.show()

document.addEventListener('submit', function(e) {
    e.preventDefault()
    const imageDescription = document.getElementById('user-input').value
    dialogModal.close()
    generateImage(imageDescription)
})
function generateImage(imageDescription){
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        return result;
    }
    query({"inputs": imageDescription}).then((response) => {
        const objectURL = URL.createObjectURL(response);
              document.querySelector('img').src = objectURL;
            generateAltText(response)   
         });
}

 function generateAltText(imageUrl) {
    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: data,
            }
        );
        const result = await response.json();
        return result;
    }
    
    query(imageUrl).then((response) => {
        renderImage(response)
        console.log(JSON.stringify(response));
    });
    
}

function renderImage(altText) {
    const text = altText;
    console.log(text[0].generated_text)
    document.getElementById('alt-text').innerHTML=text[0].generated_text;
}



