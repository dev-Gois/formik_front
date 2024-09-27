function setupSelectListeners() {
    let selects = document.querySelectorAll('.form-type');
    console.log(selects);
    selects.forEach(select => {
        select.removeEventListener('change', handleSelectChange);
        select.addEventListener('change', handleSelectChange);
    });
}

function handleSelectChange(e) {
    let value = e.target.value;
    let input = e.target.nextElementSibling;
    let addOption = e.target.closest('.form-field').querySelector('.add-option');
    let clones = input.closest('.form-field').querySelectorAll('.field-input[data-clone="true"]');
    let removeButtons = input.closest('.form-field').querySelectorAll('.remove-option');

    removeButtons.forEach(button => {
        button.remove();
    });

    clones.forEach(clone => {
        clone.remove();
    });

    if (value === 'short_answer') {
        input.setAttribute('placeholder', 'Resposta curta');
        input.setAttribute('disabled', 'true');
        input.removeAttribute('class');
        input.removeAttribute('required');
        input.setAttribute('class', 'short-answer field-input');
        addOption.style.display = 'none';
    } else if (value === 'long_answer') {
        input.setAttribute('placeholder', 'Parágrafo');
        input.setAttribute('disabled', 'true');
        input.removeAttribute('class');
        input.setAttribute('class', 'long-answer field-input');
        input.removeAttribute('required');
        addOption.style.display = 'none';
    } else if (value === 'multiple_choice') {
        input.setAttribute('placeholder', 'Opção');
        input.removeAttribute('disabled');
        input.removeAttribute('class');
        input.setAttribute('class', 'multiple-choice field-input');
        input.setAttribute('required', 'true');
        addOption.style.display = 'flex';
    } else {
        input.setAttribute('placeholder', 'Opção');
        input.removeAttribute('disabled');
        input.removeAttribute('class');
        input.setAttribute('class', 'single_choice field-input');
        input.setAttribute('required', 'true');
        addOption.style.display = 'flex';
    }
}

window.setupSelectListeners = setupSelectListeners;

setupSelectListeners();