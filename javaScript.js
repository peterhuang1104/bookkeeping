document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookkeeping-form');
    const incomeList = document.createElement('ul');
    document.body.appendChild(incomeList);

    // Load saved data
    const savedData = JSON.parse(localStorage.getItem('bookkeepingData')) || [];
    savedData.forEach((item, index) => {
        addItemToList(item, index);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        const store = document.getElementById('store').value;
        const income = document.getElementById('income').value;

        const newItem = { date, store, income };
        savedData.push(newItem);
        localStorage.setItem('bookkeepingData', JSON.stringify(savedData));

        addItemToList(newItem, savedData.length - 1);

        form.reset();
    });

    function addItemToList(item, index) {
        const li = document.createElement('li');
        li.innerHTML = `Date: ${item.date}, Store: ${item.store}, Income: ${item.income} 
                        <button onclick="editItem(${index})">Edit</button>
                        <button onclick="deleteItem(${index})">Delete</button>`;
        incomeList.appendChild(li);
    }

    window.editItem = function(index) {
        const item = savedData[index];
        document.getElementById('store').value = item.store;
        document.getElementById('income').value = item.income;
        savedData.splice(index, 1);
        localStorage.setItem('bookkeepingData', JSON.stringify(savedData));
        renderList();
    };

    window.deleteItem = function(index) {
        savedData.splice(index, 1);
        localStorage.setItem('bookkeepingData', JSON.stringify(savedData));
        renderList();
    };

    function renderList() {
        incomeList.innerHTML = '';
        savedData.forEach((item, index) => {
            addItemToList(item, index);
        });
    }
});