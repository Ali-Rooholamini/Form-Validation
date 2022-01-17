"use strict";

class formValidation{
    constructor(form){
        this.__form = form;
        this.focusHandler();
        this.submitHandler();
    }

    submitHandler(){
        this.__form.addEventListener("submit" , event => {
            event.preventDefault();
        });
    }

    focusHandler(){
        this.__form.addEventListener("focusout" , event => {
            if(event.target.tagName == "BUTTON"){
                return;
            }
            console.log(event.target);
            this.emptyValidation(event.target);
            if(event.target.dataset.validation){
                this[event.target.dataset.validation](event.target);
            }
        });
    }

    emptyValidation(elem){
        let span = elem.parentElement.nextElementSibling;
        if(elem.value.length === 0){
            span.textContent = "input is empty. please fill the input correctly";
        }else{
            span.textContent = "";
        }
    }
    nameValidation(elem){
        let span = elem.parentElement.nextElementSibling;
        if(span.textContent.length === 0){
            elem.nextElementSibling.classList.replace("fa-exclamation-circle" , "fa-check-circle");
            elem.nextElementSibling.style.display = "inline-block";
        }else{
            elem.nextElementSibling.classList.replace("fa-check-circle" , "fa-exclamation-circle");
            elem.nextElementSibling.style.display = "inline-block";
        }
    }
    emailValidation(elem){
        
    }
    passValidation(elem){}
    rePassValidation(elem){}

}
new formValidation(form);