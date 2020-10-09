const humanReadable=a=>{var b=Math.floor;const c=("0"+b(a/3600)).slice(-2),d=("0"+b(a/60%60)).slice(-2),e=("0"+b(a%60)).slice(-2);return`${c}:${d}:${e}`};

