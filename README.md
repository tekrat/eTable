eTable
======

A single function to build a table based on a JSON object

Example Usage
=====

<pre>
document.write(
  eTab({
	header:["a", "b", "c"],
		rows:{
			row1:["1", "2", "3"],
			row2:["q", "w", "e"]
		}
	})
);
</pre>

Function Parameter
=====
function eTab(
  * JSON Data Table - *Required*
  * Table ID - *Optional*
  * Table Class - *Optional*
  * Header Class - *Optional*
  * Individual Cell Class - *Optional*

)

JSON Data Table Structure
=====
<pre>
{
header:[Individual Column Headers],
	rows:{ // Rows object
		row1:["1", "2", "3"], // Individual rows, the row names can
		row2:["q", "w", "e"]  //   be anything as long as they unique
	}
}
</pre>


Disclaimer
=====
This code is provided without warranty. While I strive to maintain backwards compatibility with previous versions, the code is still under active development. As this is the case, some revisions may break compatibility with earlier versions of the library. Please keep this in mind when using eTable.

Copyright and Licensing
======
Copyright (c) 2012 Ervin Kosch, released under the GPL 3 license