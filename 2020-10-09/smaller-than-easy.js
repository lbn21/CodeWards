function smaller(a){const b=a.length,c=[0];let d=a[b-1];const e={};e[d]=0;for(let f=b-2;0<=f;f--){const b=a[f];if(b===d){c.unshift(e[d]);continue}if(b>d){e[b]=(e[b]||e[d])+1,c.unshift(e[b]),d=b;continue}if(b<d&&!e[b]){e[b]=0+f,c.unshift(0+f),d=b;continue}}return c}

