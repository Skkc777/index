const portfolItems = document.querySelectorAll('.portofolio-item-wrapper');


portfolItems.forEach(portItem => {
            
    portItem.addEventListener('mouseover', () => {
         console.log(portItem.childNodes[3].classList);
         portItem.childNodes[3].classList.add('img-darken');
    });

    portItem.addEventListener('mouseout', () => {
        
        portItem.childNodes[3].classList.remove('img-darken');
   });

});