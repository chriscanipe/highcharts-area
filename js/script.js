
var unemploymentUS;


$(document).ready(function() {
    
	setData();

});



function setData() {
	$.getJSON("data/unemployment_us.json", function(data) {
		
		var usData = [];

		$.each(data, function(i, item) {


			var dataPoint = [Date.UTC(item.year, item.monthNum, 1), item.val];

			usData.push(dataPoint);



			//[Date.UTC(1970,  9, 27), 0   ],


		});

		drawChart(usData);

	});
}


function drawChart(usData) {


    $('.chart').highcharts({
        /*
        chart: {
            zoomType: 'x'
        },*/
        title: {
            text: 'US Unemployment Since 1948'
        },
        /*
        subtitle: {
            text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' :
                    'Pinch the chart to zoom in'
        },
        */
        xAxis: {
            type: 'datetime'
            //minRange: 14 * 24 * 3600000 // fourteen days
        },
        yAxis: {
            title: {
                text: 'Percent unemployed'
            }
        },
        plotOptions: {
            area: {
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Percent unemployed',
            //pointInterval: 24 * 3600 * 1000,
            //pointStart: Date.UTC(2006, 0, 1),
            data: usData
        }]
    });


}

