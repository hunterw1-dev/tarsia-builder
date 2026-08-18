window.TarsiaGeometry=(()=>{
const key=(a,b)=>{const A=`${a.x.toFixed(4)},${a.y.toFixed(4)}`,B=`${b.x.toFixed(4)},${b.y.toFixed(4)}`;return A<B?A+'|'+B:B+'|'+A};
function triangle(n){let cells=[];const s=560/n,h=s*Math.sqrt(3)/2,x0=120,y0=610;for(let r=0;r<n;r++){for(let c=0;c<=r;c++){let x=x0+(n-r-1)*s/2+c*s,y=y0-r*h;cells.push([{x,y},{x:x+s,y},{x:x+s/2,y:y-h}]);if(c<r)cells.push([{x:x+s,y},{x:x+1.5*s,y:y-h},{x:x+s/2,y:y-h}])}}return cells}
function square(n){let a=[],s=520/n,x0=140,y0=90;for(let r=0;r<n;r++)for(let c=0;c<n;c++){let x=x0+c*s,y=y0+r*s;if((r+c)%2)a.push([{x,y},{x:x+s,y},{x,y:y+s}],[{x:x+s,y},{x:x+s,y:y+s},{x,y:y+s}]);else a.push([{x,y},{x:x+s,y},{x:x+s,y:y+s}],[{x,y},{x:x+s,y:y+s},{x,y:y+s}])}return a}
function transform(cells,fn){return cells.map(t=>t.map(fn))}
function cellsFor(shape,pairs){let n=Math.max(2,Math.ceil(Math.sqrt((pairs+4)/2)));if(shape==='triangle'){n=Math.max(2,Math.ceil(Math.sqrt(pairs+1)));return triangle(n)}let cells=square(n);if(shape==='diamond')return transform(cells,p=>({x:400+(p.x-400)*.72-(p.y-350)*.72,y:350+(p.x-400)*.72+(p.y-350)*.72}));if(shape==='hexagon'){return cells.filter(t=>{let cx=t.reduce((s,p)=>s+p.x,0)/3,cy=t.reduce((s,p)=>s+p.y,0)/3,dx=Math.abs(cx-400),dy=Math.abs(cy-350);return dx<260&&dy<225&&dx+dy*.58<310})}return cells}
function edges(cells){let map=new Map();cells.forEach((t,ti)=>t.forEach((p,i)=>{let a=p,b=t[(i+1)%3],k=key(a,b);if(!map.has(k))map.set(k,[]);map.get(k).push({ti,ei:i,a,b})}));let internal=[];map.forEach(v=>{if(v.length===2)internal.push(v)});return internal}
return{cellsFor,edges};})();
