const selectBtn     = document.getElementById("select");
const btnReg        = document.getElementById("btn-reg");
const btnLog        = document.getElementById("btn-login");
const formReg       = document.getElementById("form-reg");
const formLog       = document.getElementById("form-login");
const forms         = document.getElementById("forms");
const container     = document.querySelector('.container');
const viewPsw       = document.querySelectorAll('.view-psw');

var inputs          = document.querySelectorAll("input");

document.addEventListener('DOMContentLoaded', function() {

    inputs.forEach(i => {
        if(i.getAttribute("type") == "file") {
            i.addEventListener('change', (e) => {
                if(i.files[0]) {
                    var file = new FileReader();

                    file.addEventListener('load', () => {
                        document.getElementById("result").style.backgroundImage = "url(" + file.result + ");";
                    }, false)

                    file.readAsDataURL(i.files[0]);
                }
            })
        }
    })

    // переключение кнопок

    btnReg.addEventListener('click', () => {
        selectBtn.classList.remove("selectLog");
        selectBtn.classList.add("selectReg");
        forms.classList.remove("formLog");
        forms.classList.add("formReg");
        container.classList.add("big-container");
    });

    btnLog.addEventListener('click', () => {
        selectBtn.classList.remove("selectReg");
        selectBtn.classList.add("selectLog");
        container.classList.remove("big-container");
        forms.classList.remove("formReg");
        forms.classList.add("formLog");
    });

    // показать/скрыть пароль
    viewPsw.forEach(v => {
        v.addEventListener('click', () => {
            v.classList.toggle("view");
            // соседний элемент сверху
            if(v.previousElementSibling.getAttribute("type") == "password") {
                v.previousElementSibling.setAttribute("type", "text");
            } else if (v.previousElementSibling.getAttribute("type") == "text") {
                v.previousElementSibling.setAttribute("type", "password");
            }
        })
    })

    // провека заполенности инпута
    inputs.forEach(i => {
        i.innerHTML = "";
        i.addEventListener('focusout', () => {
            var text = i.value;
            if(text != "") {
                i.classList.add("text");
            } else {
                i.classList.remove("text");
            }
        } )
    })
}, false);


