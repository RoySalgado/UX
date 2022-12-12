var areaChartOptions = {
    series: [{
        name: 'Ganancias',
        data: [0, 10000, 4000, 9400, 6000, 9000]
    }],
    chart: {
        height: 200,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    colors: ["#549857"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    markers: {
        size: 0
    },
    yaxis: [

    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart1"), areaChartOptions);
areaChart.render();

var areaChartOptions = {
    series: [{
        name: 'Ventas',
        data: [0, 10000, 6000, 9000, 1000]
    }],
    chart: {
        height: 200,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    colors: ["#3E709D"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    markers: {
        size: 0
    },
    yaxis: [

    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart2"), areaChartOptions);
areaChart.render();

var areaChartOptions = {
    series: [{
        name: 'Perdidas',
        data: [0, 600, 400, 1000, 400]
    }],
    chart: {
        height: 200,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    colors: ["#BC3737"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    markers: {
        size: 0
    },
    yaxis: [

    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart3"), areaChartOptions);
areaChart.render();

var areaChartOptions = {
    series: [{
        name: 'Total',
        data: [15000, 10000, 14000, 20000, 19000]
    }],
    chart: {
        height: 200,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    colors: ["#808080"],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    markers: {
        size: 0
    },
    yaxis: [

    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart4"), areaChartOptions);
areaChart.render();


var areaChartOptions = {
    series: [{
        name: 'Ganancias',
        data: [0, 10000, 4000, 9400, 6000]
    }, {
        name: 'Ventas',
        data: [0, 10000, 6000, 9000, 1000]
    }, {
        name: 'Perdidas',
        data: [0, 600, 400, 1000, 400]
    }, {
        name: 'Total',
        data: [15000, 10000, 14000, 20000, 10000]
    }],
    chart: {
        height: 200,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    colors: ["#549857", "#3E709D", "#BC3737", "#808080",],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul"],
    markers: {
        size: 0
    },
    yaxis: [

    ],
    tooltip: {
        shared: true,
        intersect: false,
    }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart5"), areaChartOptions);
areaChart.render();


document.querySelectorAll('#wizard .lista a').forEach((elemento) => {
    elemento.addEventListener('click', () => {
        document.querySelector('#wizard .activo');
        elemento.parentElement.classList.add('activo');

    });
});