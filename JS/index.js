const btn = document.querySelector('button');
const email = document.querySelector('input')
const emailBox = document.querySelector('.email-box')



btn.addEventListener('click', () =>{
    if(email.value.search("@") != -1 && email.value.search(".com") != -1 && email.value.length > 10){
        emailBox.classList.remove('error')
        email.value = ''
    } else{
        emailBox.classList.add('error')
    }
})