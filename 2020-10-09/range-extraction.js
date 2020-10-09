const solution=(a,b=[])=>a.reduce((a,c)=>((b[b.length-1]||0)+1!==c&&(b=[],a.push(b)),b.push(c),a),[]).map(a=>3<=a.length?`${a.shift()}-${a.pop()}`:`${a}`).join(",");

