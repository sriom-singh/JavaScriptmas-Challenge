function getValue(){
    document.getElementById('image').src="";
    const loading = document.querySelector('.loader')
    loading.classList.add('lds-facebook');
    const value =  document.getElementById('user-input').value
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
    query({"inputs": value}).then((response) => {
        const objectURL = URL.createObjectURL(response);
              document.getElementById('image').src = objectURL;
              loading.classList.remove('lds-facebook');
    });
    console.log(value)
    
}
