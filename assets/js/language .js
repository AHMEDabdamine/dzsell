const languages = {

ar:{
documentation: 'وثائق '


}


}
const lngselct = document.querySelector('select');
lngselct.addEventListener("change",(event) => {
setLanguage (event.target.vlaue);


});
const setlng = (language) => {

    const elments = document.querySelectorAll ('[data-i18n] ')
    elments.forEach((elments) => {
        const trasnkey = elments.getAttribute('data-i18n');
        elements.textContent - languages[language][trasnkey]

    })
}