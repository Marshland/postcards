import{c as f}from"./chunk-KHEQNM6W.js";import{Ba as u,Eb as g,Ra as a,S as h,Sa as o,Va as d,_a as n,ab as l,ka as p,mb as c,nb as v,ta as s}from"./chunk-WAS7E2AU.js";var x=(()=>{class r{#e;constructor(){this.#e=h(g),this.emailsResource=f.text("./assets/data/all-emails.csv"),this.emails=p(new Set),this.emailsToAdd=this.#e.allEmails,this.emailsWithGoodAverage=this.#e.emailsWithGoodAverage,this.emailsThatAreNotInContacts=c(()=>{let t=this.emails(),e=this.emailsToAdd();return!t.size||!e.size?new Set:e.difference(t)}),this.emailsWithGoodAverageThatAreNotInContacts=c(()=>{let t=this.emails(),e=this.emailsWithGoodAverage();return!t.size||!e.size?new Set:e.difference(t)}),v(()=>{let t=this.emailsResource.value();if(!t)return;let e=this.#t(t);this.emails.set(new Set(e))})}downloadEmailsToAdd(){let t=this.emailsThatAreNotInContacts(),e="";for(let m of t)e+=`${m}
`;let i=new Blob([e],{type:"text/csv"});this.#e.downloadFile(i,`emails-to-add-${this.#e.createDateStr()}.csv`)}downloadEmailsToAddWithGoodAverage(){let t=this.emailsWithGoodAverageThatAreNotInContacts(),e="";for(let m of t)e+=`${m}, `;e=e.slice(0,-2);let i=new Blob([e],{type:"text/txt"});this.#e.downloadFile(i,`emails-to-add-with-good-average-${this.#e.createDateStr()}.txt`)}#t(t){let e=t.split(`
`).map(i=>i.split(";")[0]);return e.shift(),e}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275cmp=u({type:r,selectors:[["app-unique-emails"]],decls:17,vars:5,consts:[[3,"click"]],template:function(e,i){e&1&&(a(0,"div"),n(1),o(),a(2,"div")(3,"p"),n(4),o(),a(5,"p"),n(6),o()(),a(7,"div")(8,"p"),n(9),o(),a(10,"p"),n(11),o()(),a(12,"div")(13,"button",0),d("click",function(){return i.downloadEmailsToAdd()}),n(14,"Download emails to add"),o(),a(15,"button",0),d("click",function(){return i.downloadEmailsToAddWithGoodAverage()}),n(16,"Download emails to add (good average)"),o()()),e&2&&(s(),l("total emails: ",i.emails().size,""),s(3),l("total emails to add: ",i.emailsToAdd().size,""),s(2),l("emails that are not in contacts: ",i.emailsThatAreNotInContacts().size,""),s(3),l("total emails with good average: ",i.emailsWithGoodAverage().size,""),s(2),l("emails with good average that are not in contacts: ",i.emailsWithGoodAverageThatAreNotInContacts().size,""))},styles:[`app-unique-emails{display:block}app-unique-emails button+button{margin-left:1rem}app-unique-emails div{margin-bottom:1rem}app-unique-emails p{margin:0}
`],encapsulation:2,changeDetection:0})}}return r})();export{x as UniqueEmailsComponent};
