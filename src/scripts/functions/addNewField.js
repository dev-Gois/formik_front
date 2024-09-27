let currentCount = 1;

const addNewField = () => {
    let addNewFieldButton = document.querySelector('.button-add-field');

    let newField = document.createElement('div');
    newField.classList.add('form-field');

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

    newField.appendChild(inputName);
    newField.appendChild(selectType);
    newField.appendChild(inputResponse);
    newField.appendChild(addOptionButton);

    addNewFieldButton.before(newField);

    setupSelectListeners();

    currentCount++;
};
