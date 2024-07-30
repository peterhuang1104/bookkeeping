<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bookkeeping-form');
    const incomeList = document.createElement('ul');
    document.body.appendChild(incomeList);

    // Load saved data
    const savedData = JSON.parse(localStorage.getItem('bookkeepingData')) || [];
    savedData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Date: ${item.date}, Store: ${item.store}, Income: ${item.income}`;
        incomeList.appendChild(li);
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const store = document.getElementById('store').value;
        const income = document.getElementById('income').value;

        const newItem = { date, store, income };
        savedData.push(newItem);
        localStorage.setItem('bookkeepingData', JSON.stringify(savedData));

        const li = document.createElement('li');
        li.textContent = `Date: ${date}, Store: ${store}, Income: ${income}`;
        incomeList.appendChild(li);

        form.reset();
    });
});
</script>