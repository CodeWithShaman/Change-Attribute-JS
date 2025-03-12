function changeAttribute(){
    let image = document.getElementById("images");
    let newSrc =   document.getElementById('url-img').value
    let newAlt =  document.getElementById("inp-alt").value
    let newTitle =  document.getElementById("inp-text").value

    if (newSrc){ 
        image.src = newSrc;
    };
    if (newAlt){ 
        image.alt = newAlt;
    };
    if (newTitle){
         image.title = newTitle;
    };
};
