(self.webpackChunkangularcourse=self.webpackChunkangularcourse||[]).push([[592],{5584:(t,e,s)=>{"use strict";s.d(e,{D:()=>h});var a=s(2693),r=s(529),n=s(8619);let h=(()=>{class t{constructor(t){this.http=t,this.token=localStorage.getItem("token"),this.headerAdmin=(new a.WM).set("authorization",this.token).set("role","Admin"),this.params=(new a.LE).set("secret",r.N.secret).set("client",r.N.client),this.headerall=(new a.WM).set("authorization",this.token)}getAllstudents(){return this.http.get(`${r.N.urlBackend}students/`,{headers:this.headerall,params:this.params})}addstudent(t){return this.http.post(r.N.urlBackend+"addstudent/",t,{headers:this.headerAdmin,params:this.params})}deletestudent(t){return this.http.delete(r.N.urlBackend+"student/"+t,{headers:this.headerAdmin,params:this.params})}updateStudent(t,e){return this.http.patch(r.N.urlBackend+"student/"+t,e,{headers:this.headerAdmin,params:this.params})}getOnestudent(t){return this.http.get(r.N.urlBackend+"student/"+t,{headers:this.headerall,params:this.params})}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(a.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);