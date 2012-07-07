<script>
/* 
** eTable **
A single function to build a table based on a JSON object
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license
https://github.com/tekrat/eTabl
*/
function eTab(a,b,c,d,e){var f="<table";if(typeof b=="undefined"){f+=' id="'+b+'"'}if(typeof c=="undefined"){f+=' class="'+c+'"'}f+="<tr>\r\n";for(var g in a.header){f+="	<th";if(typeof d=="undefined"){f+=' class="'+d+'"'}f+="	>"+a.header[g]+"</th>\r\n"}f+="</tr>\r\n";f+="<tbody>\r\n";for(x in a.rows){f+="<tr>\r\n";q=0;for(var g in a.header){f+="	<td";if(typeof e=="undefined"){f+=' class="'+e+'"'}f+=">"+a.rows[x][q]+"</td>\r\n";q++}f+="</tr>\r\n"}f+="</tbody>\r\n";f+="</table>\r\n";return f}
</script>