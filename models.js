window.ARModels=(()=>{
const C="#2CA8CC";
function el(tag,a={},kids=[]){let e=document.createElement(tag);Object.entries(a).forEach(([k,v])=>e.setAttribute(k,v));kids.forEach(k=>e.appendChild(k));return e}
function box(p,s,c=C){return el("a-box",{position:p,width:s[0],height:s[1],depth:s[2],color:c,roughness:.65})}
function sphere(p,r,c=C){return el("a-sphere",{position:p,radius:r,color:c,roughness:.6})}
function cyl(p,r,h,c=C,rot="0 0 0"){return el("a-cylinder",{position:p,radius:r,height:h,color:c,rotation:rot,roughness:.65})}
function cone(p,rb,h,c=C,rot="0 0 0"){return el("a-cone",{position:p,"radius-bottom":rb,"radius-top":"0",height:h,color:c,rotation:rot})}
function torus(p,r,t,c=C,rot="0 0 0"){return el("a-torus",{position:p,radius:r,"radius-tubular":t,color:c,rotation:rot})}
function group(parts){return el("a-entity",{},parts)}
const defs={
 rocket:(c)=>group([cyl("0 .52 0",.22,.72,c),cone("0 1.05 0",.23,.38,c),sphere("0 .68 -.2",.105,"#BDEBFA"),cone("-.25 .25 0",.18,.42,"#E76557","0 0 18"),cone(".25 .25 0",.18,.42,"#E76557","0 0 -18"),cone("0 .05 0",.16,.35,"#FFB52D","180 0 0")]),
 robot:(c)=>group([box("0 .62 0",[.55,.55,.38],c),box("0 1.08 0",[.46,.36,.4],"#DCE8EB"),sphere("-.13 1.12 -.21",.055,"#17262D"),sphere(".13 1.12 -.21",.055,"#17262D"),cyl("-.39 .65 0",.08,.52,c,"0 0 -12"),cyl(".39 .65 0",.08,.52,c,"0 0 12"),cyl("-.16 .17 0",.09,.38,"#566970"),cyl(".16 .17 0",.09,.38,"#566970")]),
 building:(c)=>group([box("0 .42 0",[1.15,.82,.75],c),box("0 .35 -.39",[.25,.55,.04],"#17313C"),box("-.35 .55 -.39",[.2,.2,.04],"#BDEBFA"),box(".35 .55 -.39",[.2,.2,.04],"#BDEBFA"),box("0 .92 0",[1.28,.12,.85],"#E8EEF0")]),
 tree:(c)=>group([cyl("0 .35 0",.12,.7,"#79553A"),sphere("0 .88 0",.42,c),sphere("-.25 .76 .05",.28,c),sphere(".25 .78 0",.3,c)]),
 dish:(c)=>group([cyl("0 .22 0",.22,.18,"#566970"),cyl("0 .58 0",.055,.72,"#566970"),sphere("0 .9 0",.28,c),box("0 .9 .18",[.48,.08,.12],c)]),
 planet:(c)=>group([sphere("0 .55 0",.42,c),torus("0 .55 0",.62,.055,"#FFB52D","70 0 0")]),
 energy:(c)=>group([cyl("0 .38 0",.3,.72,"#283A42"),sphere("0 .82 0",.24,c),torus("0 .82 0",.34,.045,"#FFB52D","90 0 0")]),
 module:(c)=>group([box("0 .4 0",[.85,.65,.7],c),box("0 .42 -.36",[.55,.22,.03],"#BDEBFA"),cyl("-.32 .08 0",.08,.16,"#566970","90 0 0"),cyl(".32 .08 0",.08,.16,"#566970","90 0 0")]),
 block:(c)=>box("0 .35 0",[.7,.7,.7],c),
 sphere:(c)=>sphere("0 .42 0",.42,c),
 cone:(c)=>cone("0 .42 0",.42,.84,c),
 ring:(c)=>torus("0 .52 0",.4,.12,c,"90 0 0"),
 screen:(c)=>group([box("0 .62 0",[.9,.55,.08],"#243840"),box("0 .62 -.05",[.75,.4,.02],c),cyl("0 .2 0",.06,.38,"#566970"),box("0 .05 0",[.5,.08,.35],"#566970")]),
 gate:(c)=>group([box("-.38 .5 0",[.18,1,.18],c),box(".38 .5 0",[.18,1,.18],c),box("0 1 0",[.94,.18,.18],c)])
};
function make(type,color){return (defs[type]||defs.block)(color||C)}
function types(){return Object.keys(defs)}
return{make,types}
})();