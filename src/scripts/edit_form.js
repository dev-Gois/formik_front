import { loadForm } from "./functions/loadForm";
import { editForm } from "./functions/editForm";
let currentCount = 0;
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

loadForm(id).then(formData => {
    if (formData) {
        const titleInput = document.getElementById('title');
        const descriptionTextarea = document.getElementById('description');

        titleInput.value = formData.title;
        descriptionTextarea.value = formData.description;

        const formContent = document.querySelector('.form-content');

        formData.fields.forEach(field => {
            let addNewFieldButton = document.querySelector('.button-add-field');

            let newField = document.createElement('div');
            newField.classList.add('form-field');
        
            let inputName = document.createElement('input');
            inputName.type = 'text';
            inputName.placeholder = 'Nome do campo';
            inputName.name = `field-name-${currentCount}`;
            inputName.value = field.name;

            let selectType = document.createElement('select');
            selectType.classList.add('form-type');
            selectType.name = `field-type-${currentCount}`;
            
            const options = [
                { value: 'short_answer', text: 'Resposta curta' },
                { value: 'long_answer', text: 'Parágrafo' },
                { value: 'single_choice', text: 'Múltipla escolha' },
                { value: 'multiple_choice', text: 'Caixa de seleção' }
            ];
        
            options.forEach(optionData => {
                let option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.text;
                selectType.appendChild(option);
            });

            selectType.value = field.type;
        
            let inputResponse = document.createElement('input');

            switch (field.type) {
                case 'short_answer':
                    inputResponse.setAttribute('placeholder', 'Resposta curta');
                    inputResponse.setAttribute('disabled', 'true');
                    inputResponse.setAttribute('class', 'short-answer field-input');
                    break;
                case 'long_answer':
                    inputResponse.setAttribute('placeholder', 'Parágrafo');
                    inputResponse.setAttribute('disabled', 'true');
                    inputResponse.setAttribute('class', 'long-answer field-input');
                    break;
            }
        
            
            let addOptionButton = document.createElement('div');
            addOptionButton.classList.add('add-option');
            addOptionButton.setAttribute('onclick', 'addNewOption(event)');
            addOptionButton.hidden = true;
        
            addOptionButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                    <path d="M5 12h14"/><path d="M12 5v14"/>
                </svg>
            `;
        
            newField.appendChild(inputName);
            newField.appendChild(selectType);
            if (field.type !== 'single_choice' && field.type !== 'multiple_choice') {
                newField.appendChild(inputResponse);
            }


            if (field.options) {
                let count = 0;
                field.options.forEach(option => {
                    let inputContainer = document.createElement('div');
                    inputContainer.setAttribute('class', 'input-container');
                    inputContainer.style.position = 'relative';

                    let newOption = document.createElement('input');
                    newOption.type = 'text';
                    newOption.placeholder = 'Opção';
                    newOption.value = option.name;
                    newOption.setAttribute('required', 'true');
                    newOption.setAttribute('class', 'field-input');
                    newOption.setAttribute('data-clone', 'true');

                    inputContainer.appendChild(newOption);

                    let removeButton = document.createElement('div');

                    removeButton.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                    `;
                    removeButton.setAttribute('class', 'remove-option');
                    removeButton.addEventListener('click', function() {
                        inputContainer.remove();
                    });

                    if (count > 0) {
                        inputContainer.appendChild(removeButton);
                    }

                    newField.appendChild(inputContainer);
                    count++;
                });
            }

            newField.appendChild(addOptionButton);
        
            addNewFieldButton.before(newField);

            currentCount++;
        });
    }
}).then(() => {
    setupSelectListeners();
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    let formObject = {
        title: formData.get('title'),
        description: formData.get('description'),
        fields: []
    };

    let currentField = null;
    let options = [];

    formData.forEach((value, key) => {
        if (key.startsWith('field-name')) {
            if (currentField) {
                if (options.length > 0) {
                    currentField.options = options;
                    options = [];
                }
                formObject.fields.push(currentField);
            }

            currentField = {
                name: value,
                type: '',
                required: false
            };

        } else if (key.startsWith('field-type')) {
            if (currentField) {
                currentField.type = value;
            }

        } else if (key.startsWith('field-option')) {
            options.push({ name: value });
        }
    });

    if (currentField) {
        if (options.length > 0) {
            currentField.options = options;
        }
        formObject.fields.push(currentField);
    }

    editForm(formObject, id);
});
