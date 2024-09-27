import { postForm } from "./functions/postForm";
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

    postForm(formObject);
});
