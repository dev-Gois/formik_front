import { getUserForms } from "./functions/getUserForms";
import { deleteForm } from "./functions/deleteForm";
const container = document.querySelector('.container');

getUserForms().then((forms) => {
    forms.forEach((form) => {
        const formElement = document.createElement('div');
        formElement.classList.add('form-card');
        formElement.onclick = function () {
            window.location.href = `/form?id=${form.id}`;
        }
        formElement.innerHTML = `
            <div class="delete-icon" onclick="callDeleteForm('${form.id}')">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </div>
            <h2>${form.title}</h2>
            <p>${form.description}</p>
        `;
        container.appendChild(formElement);
    })
})

window.callDeleteForm = async function (formId) {
    deleteForm(formId);
}
