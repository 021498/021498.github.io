let l=[],a=(r,o)=>{let i=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},l:o||0,lc:0,listen(n,u){return t.lc=i.push(n,u||t.l)/2,()=>{let e=i.indexOf(n);~e&&(i.splice(e,2),--t.lc||t.off())}},notify(n){let u=!l.length;for(let e=0;e<i.length;e+=2)l.push(i[e],i[e+1],t.value,n);if(u){for(let e=0;e<l.length;e+=4){let f;for(let s=e+1;!f&&(s+=4)<l.length;)l[s]<l[e+1]&&(f=l.push(l[e],l[e+1],l[e+2],l[e+3]));f||l[e](l[e+2],l[e+3])}l.length=0}},off(){},set(n){t.value!==n&&(t.value=n,t.notify())},subscribe(n,u){let e=t.listen(n,u);return n(t.value),e},value:r};return t};const h=a(!1);export{h as s};