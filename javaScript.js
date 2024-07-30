document.getElementById('bookkeeping-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const store = document.getElementById('store').value;
    const income = document.getElementById('income').value;

    const table = document.getElementById('bookkeeping-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const dateCell = newRow.insertCell(0);
    const storeCell = newRow.insertCell(1);
    const incomeCell = newRow.insertCell(2);

    dateCell.textContent = date;
    storeCell.textContent = store;
    incomeCell.textContent = income;

    document.getElementById('bookkeeping-form').reset();
});