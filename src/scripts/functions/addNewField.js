let currentCount = 1;

const addNewField = () => {
    let addNewFieldButton = document.querySelector('.button-add-field');

    let newField = document.createElement('div');
    newField.classList.add('form-field');

    let removeButton = document.createElement('div');
    removeButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
    `;
    removeButton.setAttribute('class', 'remove-button');
    removeButton.addEventListener('click', function() {
        newField.remove();
    });

    let inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.placeholder = 'Nome do campo';
    inputName.name = `field-name-${currentCount}`;
    
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

    let inputResponse = document.createElement('input');
    inputResponse.type = 'text';
    inputResponse.placeholder = 'Resposta curta';
    inputResponse.classList.add('short_answer', 'field-input');
    inputResponse.disabled = true;
    inputResponse.name = `field-option-${currentCount}`;

    let addOptionButton = document.createElement('div');
    addOptionButton.classList.add('add-option');
    addOptionButton.setAttribute('onclick', 'addNewOption(event)');
    addOptionButton.hidden = true;

    addOptionButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
            <path d="M5 12h14"/><path d="M12 5v14"/>
        </svg>
    `;

    newField.appendChild(removeButton);
    newField.appendChild(inputName);
    newField.appendChild(selectType);
    newField.appendChild(inputResponse);
    newField.appendChild(addOptionButton);

    addNewFieldButton.before(newField);

    setupSelectListeners();

    currentCount++;
};
