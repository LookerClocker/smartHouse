$(document).ready(function () {
    function  showTemperature() {
        var smoothie = new SmoothieChart();
        //smoothie.streamTo(document.getElementById("mycanvas"));
        smoothie.streamTo(document.getElementById("temperature"), 1000 /*delay*/);

        // Data
        var line1 = new TimeSeries();

        // Add a random value to each line every second

        setInterval(function () {

            line1.append(new Date().getTime(), $("#rangeinput").val() / 100);

        }, 1000);

        smoothie.addTimeSeries(line1,
          { strokeStyle: 'rgb(0, 255, 0)', fillStyle: 'rgba(0, 255, 0, 0.4)', lineWidth: 3 });

    }

    function showLight() {
        var smoothieSecond = new SmoothieChart();

        smoothieSecond.streamTo(document.getElementById("light"), 1000);

        var lightLine = new TimeSeries();

        setInterval(function() {

            lightLine.append(new Date().getTime(), $('#rangeinputClimate').val() / 100);

        }, 1000);

        smoothieSecond.addTimeSeries(lightLine,
        { strokeStyle: 'rgb(255, 0, 255)', fillStyle: 'rgba(255, 0, 255, 0.3)', lineWidth: 3 });

    }

    showTemperature();
    showLight();
});