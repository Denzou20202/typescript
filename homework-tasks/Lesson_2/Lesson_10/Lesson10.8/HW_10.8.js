var tableForm = document.forms.namedItem('tableForm');
var table = document.getElementById('table');
tableForm.onsubmit = function (evt) {
    table.innerText = '';
    evt.preventDefault();
    var rowsValue = Number(tableForm.rows.value);
    var columnsValue = Number(tableForm.columns.value);
    var dataValue = tableForm.data.value;
    console.log(rowsValue, columnsValue, dataValue);
    for (var i = 0; i < rowsValue; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < columnsValue; j++) {
            var td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};
