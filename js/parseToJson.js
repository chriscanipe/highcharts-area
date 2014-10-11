var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var theData = [];


$.getJSON( "data/unemployment_us_raw.json", function( data ) {
    
    $.each(data, function(i, item) {
        
        $.each(months, function(j, month) {

            var obj = {"year" : item.Year, "month" : month, "monthNum" : j+1, "val" : item[month]};

            theData.push(obj);

        });
    });

    console.log(JSON.stringify(theData));
});
