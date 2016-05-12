function getRandomIdxArr(n) {
   var idx = [];
	for (i = 0; i < n; i++)
	{
		nid = Math.floor(Math.random() * imgs.length);
		while (idx.indexOf(nid) > -1)
		{
	   	nid = Math.floor(Math.random() * imgs.length);
		}
		idx[i] = nid;
	}
   return idx;
}

function getImg(id) {
   return imgcdn+imgs[id];
}

function show(id)
{
	var l = document.getElementById(id);
	if ( l.style.display != 'inline' ) {
		l.style.display = 'inline';
	}
	else {
		l.style.display = 'none';
	}
}

function getParam(name)
{
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function format(n)
{
	return(("0000" + n).slice(-4));
}

function gen_emoji(reload)
{
	var c=document.getElementById("canv");
	var ctx=c.getContext("2d");


	var num = getParam("e");
	var idx = [];
	if ((num === null) || (reload == "1") || (num == ""))
	{
		idx = getRandomIdxArr(6);
		num = (format(idx[0]) + format(idx[1]) + format(idx[2]) + format(idx[3]) + format(idx[4]) + format(idx[5])  );
	}
	else
	{
		idx = [ num.substring(1, 4), num.substring(5, 8), num.substring(9, 12), num.substring(13, 16), num.substring(17, 20), num.substring(21, 24)];

	}
	document.getElementById("url").value = location.protocol + '//' + location.host + location.pathname + "?e="+num;
	document.getElementById("url").name = num;

	ctx.clearRect(0, 0, c.width, c.height);

	var i1 = new Image();
	var i2 = new Image();
	var i3 = new Image();
	var i4 = new Image();
	var i5 = new Image();
	var i6 = new Image();

	i1.src = getImg(parseInt(idx[0]));
	i1.onload = function()
	{
       	ctx.drawImage(i1, 0, 0);
		i2.src = getImg(parseInt(idx[1]));
		i2.onload = function()
		{
          	ctx.drawImage(i2, 64, 0);
			i3.src = getImg(parseInt(idx[2]));
			i3.onload = function()
			{
      	    	ctx.drawImage(i3, 128, 0);
				i4.src = getImg(parseInt(idx[3]));
				i4.onload = function()
				{
      		    	ctx.drawImage(i4, 192, 0);
					i5.src = getImg(parseInt(idx[4]));
					i5.onload = function()
					{
      			    	ctx.drawImage(i5, 256, 0);
						i6.src = getImg(parseInt(idx[5]));
						i6.onload = function()
						{
      				    	ctx.drawImage(i6, 320, 0);
   					    };
					};
  				};
   		    };
   	    };
  	};
}
