import{c as N}from"./chunk-B2KYQ7DF.js";import{Ba as p,Eb as f,Ra as o,S as h,Sa as s,Va as u,_a as r,ab as c,ka as d,mb as l,nb as b,ta as a}from"./chunk-WQUZ3S52.js";var x=(()=>{class i{#e;constructor(){this.#e=h(f),this.contactsResource=N.text("./assets/data/contacts.vcf"),this.phoneNumbers=d(new Set),this.phoneNumbersToAdd=this.#e.allPhoneNumbers,this.phoneNumbersThatAreNotInContacts=l(()=>{let t=this.phoneNumbers(),e=this.phoneNumbersToAdd();return!t.size||!e.size?new Set:e.difference(t)}),b(()=>{let t=this.contactsResource.value();if(!t)return;let e=this.#t(t);this.phoneNumbers.set(new Set(e))})}downloadPhoneNumbersToAdd(){let t=this.phoneNumbersThatAreNotInContacts(),e=[];for(let m of t)e.push(this.#e.getVCard(m));let n=new Blob([e.join(`
`)],{type:"text/vcard"});this.#e.downloadFile(n,`phone-numbers-to-add-${this.#e.createDateStr()}.vcf`)}#t(t){return t.match(/^TEL;CELL:(.*)$/gm)?.map(e=>e.split(":")[1].trim())||[]}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=p({type:i,selectors:[["app-phone-numbers"]],decls:9,vars:3,consts:[[3,"click"]],template:function(e,n){e&1&&(o(0,"div"),r(1),s(),o(2,"div"),r(3),s(),o(4,"div"),r(5),s(),o(6,"div")(7,"button",0),u("click",function(){return n.downloadPhoneNumbersToAdd()}),r(8,"Download phone numbers to add"),s()()),e&2&&(a(),c("total phone numbers: ",n.phoneNumbers().size,""),a(2),c("total phone numbers to add: ",n.phoneNumbersToAdd().size,""),a(2),c("phone numbers that are not in contacts: ",n.phoneNumbersThatAreNotInContacts().size,""))},encapsulation:2,changeDetection:0})}}return i})();export{x as PhoneNumbersComponent};
