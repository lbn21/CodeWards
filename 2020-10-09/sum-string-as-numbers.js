const sumStrings=(c,d,e="",f=0)=>{c.length<d.length&&(c=c.padStart(d.length,"0")),d.length<c.length&&(d=d.padStart(c.length,"0"));for(let a=c.length-1;0<=a;a--){const b=+c[a]+ +d[a]+f;f=0,9<b?(f=1,e=b%10+e):e=b+e}return(0<f?f+e:e).replace(/^0*/,"")};

