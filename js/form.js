let select = document.getElementById("badget");
let option = document.createElement("option");
let form = document.querySelector("form");
option.value = "other";
option.innerHTML  = "Другое";
select.appendChild(option);

select.addEventListener('change', function handleSelectChange(event){
    if(event.target.value === 'other'){
        let formContainer = document.createElement("div");
        formContainer.classList.add("form__group","form__other-input")
        let newInput = document.createElement("input");
        newInput.placeholder ="Введите ваш вариант";
        newInput.id = "newInput";
        newInput.type  = "text";
        formContainer.appendChild(newInput);
        let button = document.querySelector(".form__submit");
        button.before(formContainer);
     
} let otherInput = document.querySelector(".form__other-input");
     if(event.target.value !== 'other' && Boolean(otherInput)){
       
        form.removeChild(otherInput);

    }

});
