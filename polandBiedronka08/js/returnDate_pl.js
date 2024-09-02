function returnDate(format, print){
	var out;
      
    var curDate = new Date();
    var year = curDate.getFullYear();
    var month = curDate.getMonth();
    var day = curDate.getDate();
    var dayofweek = curDate.getDay();
    var hour = curDate.getHours();
      
    var daysofweek = new Array('Niedziela', 'Poniedziałek', 'Wtorek', 'Środa','Czwartek','Piątek','Sobota');
    var months = new Array('stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia');
      
    if(format == "timeofday"){
        if (hour < 12) out = "rano";
        else if (hour < 17) out = "po południu";
        else out = "wieczorem";
    }
    else if(format == "dayofweek"){
        out = daysofweek[dayofweek];
    }
    else if(format == "day"){
        out = day;
    }
    else if(format == "month"){
        out = months[month];
    }
	else if(format == "year"){
        out = year;
    }
    else{
        out = day+' '+months[month]+' '+year;
    }
	if ( print ) 
		document.write( out );
	else
		return out;
}