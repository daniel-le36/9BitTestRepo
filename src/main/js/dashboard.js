/**
 * Created by Nikita on 2017-03-01.
 */
// Load the Visualization API and the corechart package and table package
google.charts.load('current', {'packages': ['corechart', 'table']});


// Set a callback to run when the Google Visualization API is loaded (this is for the pie chart and bar chart)
google.charts.setOnLoadCallback(drawChart);

// set a callback for the tables
google.charts.setOnLoadCallback(drawTableChart);
google.charts.setOnLoadCallback(drawTableChart2);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    // Set chart options
    var options = {
        'title': 'Number of Recent Transactions By Type',
        'width': 600,
        'height': 400
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
    chart.draw(data, options);
    barchart.draw(data, options);
}

// callback that draws table chart
function drawTableChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Salary');
    data.addColumn('boolean', 'Full Time Employee');
    data.addRows([
        ['Mike', {v: 10000, f: '$10,000'}, true],
        ['Jim', {v: 8000, f: '$8,000'}, false],
        ['Alice', {v: 12500, f: '$12,500'}, true],
        ['Bob', {v: 7000, f: '$7,000'}, true]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: true, width: '600', height: '200'});
}

function drawTableChart2() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Salary');
    data.addColumn('boolean', 'Full Time Employee');
    data.addRows([
        ['Mike', {v: 10000, f: '$10,000'}, true],
        ['Jim', {v: 8000, f: '$8,000'}, false],
        ['Alice', {v: 12500, f: '$12,500'}, true],
        ['Bob', {v: 7000, f: '$7,000'}, true]
    ]);

    var table = new google.visualization.Table(document.getElementById('table_div2'));

    table.draw(data, {showRowNumber: true, width: '600', height: '200'});
}