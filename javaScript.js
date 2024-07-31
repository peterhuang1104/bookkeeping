document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookkeeping-form');
    const incomeList = document.createElement('ul');
    document.body.appendChild(incomeList);

    const savedDataContainer = document.getElementById('saved-data-container');

    // Load saved data
    const savedData = JSON.parse(localStorage.getItem('bookkeepingData')) || [];
    savedData.forEach((item) => {
        addItemToList(item);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        const store = document.getElementById('store').value;
        const income = document.getElementById('income').value;

        const newItem = { date, store, income };
        savedData.push(newItem);
        localStorage.setItem('bookkeepingData', JSON.stringify(savedData));

        addItemToList(newItem);

        form.reset();
    });

    function addItemToList(item) {
        const li = document.createElement('li');
        li.textContent = `Date: ${item.date}, Store: ${item.store}, Income: ${item.income}`;
        incomeList.appendChild(li);
    }

    // 顯示儲存的資料
    function displaySavedData() {
        savedDataContainer.innerHTML = ''; // 清空容器
        savedData.forEach(item => {
            const div = document.createElement('div');
            div.textContent = `Date: ${item.date}, Store: ${item.store}, Income: ${item.income}`;
            savedDataContainer.appendChild(div);
        });
    }

    // 初始化顯示儲存的資料
    displaySavedData();
});