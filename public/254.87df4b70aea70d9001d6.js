(self.webpackChunkangularcourse=self.webpackChunkangularcourse||[]).push([[254],{3254:(t,e,n)=>{"use strict";n.r(e),n.d(e,{StudentdetailsModule:()=>l});var a=n(1116),s=n(3319),r=n(8619),i=n(5584);function u(t,e){if(1&t&&(r.TgZ(0,"ul"),r.TgZ(1,"li"),r._uU(2),r.qZA(),r.TgZ(3,"li"),r._uU(4),r.qZA(),r.TgZ(5,"li"),r._uU(6),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(2),r.Oqu(t.dataStudent.firstname),r.xp6(2),r.Oqu(t.dataStudent.lastname),r.xp6(2),r.Oqu(t.dataStudent.email)}}function d(t,e){1&t&&(r.TgZ(0,"div",6),r._uU(1,"We don't have this student in our database"),r.qZA())}const c=[{path:"",component:(()=>{class t{constructor(t,e){this.aroute=t,this.ds=e,this.aroute.params.subscribe(t=>this.id=t.id)}ngOnInit(){this.ds.getOnestudent(this.id).subscribe(t=>this.dataStudent=t)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(s.gz),r.Y36(i.D))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-studentdetails"]],decls:8,vars:2,consts:[[1,"w3-main",2,"margin-left","340px","margin-right","40px"],["id","contact",1,"w3-container",2,"margin-top","75px"],[1,"w3-xxxlarge","w3-text-red"],[1,"w3-round",2,"width","50px","border","5px solid red"],[4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"alert","alert-danger"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"h1",2),r.TgZ(3,"b"),r._uU(4,"Student details"),r.qZA(),r.qZA(),r._UZ(5,"hr",3),r.YNc(6,u,7,3,"ul",4),r.YNc(7,d,2,0,"div",5),r.qZA(),r.qZA()),2&t&&(r.xp6(6),r.Q6J("ngIf",e.dataStudent),r.xp6(1),r.Q6J("ngIf",!e.dataStudent))},directives:[a.O5],styles:[""]}),t})()}];let o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.Bz.forChild(c)],s.Bz]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[a.ez,o]]}),t})()}}]);