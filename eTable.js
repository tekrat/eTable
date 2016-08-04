/*

** eTable **
A single function to build a table based on a JSON object

*Disclaimer*
This code is provided without warranty. While I strive to maintain backwards compatibility with previous versions, the code is still under active development. As this is the case, some revisions may break compatibility with earlier versions of the library. Please keep this in mind when using eTable.

*Copyright and Licensing*
Copyright (c) 2012, 2016 Ervin Kosch, released under the GPL 3 license

*Updated Source Code and Instructions:*
	https://github.com/tekrat/eTable

*/
function eTab(d,i,t,h,c){
	var r = "<table";
	if(typeof i != "undefined"){ r += ' id="' + i + '"'; }
	if(typeof t != "undefined"){ r += ' class="' + t + '"'; }
  r += ">\r\n"
  r += "<thead>\r\n"	
	r += "<tr>\r\n"	
	for (var k in d.header) {
		r += "	<th";
		if(typeof h != "undefined"){ r += ' class="' + h + '"'; }
		r += "	>" + d.header[k] + "</th>\r\n";
	}
	r += "</tr>\r\n"
	r += "</thead>\r\n"
	r += "<tbody>\r\n"
	for(x in d.rows){
		r += '<tr id="' + x + '">\r\n';		
		q = 0;
		for (var k in d.header) {			
			r += '	<td id="' + x + "_" + k  + '"';
			if(typeof c != "undefined"){ r += ' class="' + c + '"'; }
			r += ">" + d.rows[x][q] + "</td>\r\n";
			q++;
		}
		r += "</tr>\r\n";
	
	}	
	r += "</tbody>\r\n"
	r += "</table>\r\n"
	
	return r;
}



document.write(
  eTab({
    header:["a", "b", "c"],
        rows:{
            row1:["1", "2", "3"],
            row2:["q", "w", "e"]
        }
    })
);
