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
            if(document.querySelectorAll(".fa-check-circle").length == 4){
                this.__form.submit();
            }
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
        if(span.textContent.length === 0){
            elem.nextElementSibling.classList.replace("fa-exclamation-circle" , "fa-check-circle");
            elem.nextElementSibling.style.display = "inline-block";
        }else{
            elem.nextElementSibling.classList.replace("fa-check-circle" , "fa-exclamation-circle");
            elem.nextElementSibling.style.display = "inline-block";
        }
    }
    emailValidation(elem){
        let span = elem.parentElement.nextElementSibling;
        if(elem.value.length === 0){
            return;
        }
        if(elem.value.indexOf("@gmail.com") > -1 || elem.value.indexOf("@yahoo.com") > -1 || elem.value.indexOf("@outlook.com") > -1){
            span.textContent = "";
            elem.nextElementSibling.classList.replace("fa-exclamation-circle" , "fa-check-circle");
            elem.nextElementSibling.style.display = "inline-block";
        }else{
            span.textContent = "Your Email is not Correct";
            elem.nextElementSibling.classList.replace("fa-check-circle" , "fa-exclamation-circle");
            elem.nextElementSibling.style.display = "inline-block";
        }
    }
    passValidation(elem){
        if(elem.value.length === 0){
            return;
        }
        elem.onblur = event => {
            this.rePassValidation(rePass);
        }
    }
    rePassValidation(elem){
        if(elem.value.length === 0){
            return;
        }
        let span = elem.parentElement.nextElementSibling;
        if(pass.value.length == 0){
            elem.nextElementSibling.classList.replace("fa-check-circle" , "fa-exclamation-circle");
            elem.nextElementSibling.style.display = "inline-block";
            return span.textContent = "you must enter Password first";
        }
        if(elem.value === pass.value){
            span.textContent = "";
            elem.nextElementSibling.classList.replace("fa-exclamation-circle" , "fa-check-circle");
            elem.nextElementSibling.style.display = "inline-block";
        }else{
            span.textContent = "incorrect Password. Double Check your pass";
            elem.nextElementSibling.classList.replace("fa-check-circle" , "fa-exclamation-circle");
            elem.nextElementSibling.style.display = "inline-block";
        }
    }

}
new formValidation(form);