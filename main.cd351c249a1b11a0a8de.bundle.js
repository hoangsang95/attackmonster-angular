webpackJsonp([1],{"+h1B":function(l,n,t){"use strict";var u=t("/oeL"),e=t("aR8+"),o=t("wQAS"),a=t("q4dy"),r=t("qbdv"),i=t("fc+i");t.d(n,"a",function(){return c});var c=u.b(e.a,[o.a],function(l){return u.c([u.d(512,u.e,u.f,[[8,[a.a]],[3,u.e],u.g]),u.d(5120,u.h,u.i,[[3,u.h]]),u.d(4608,r.a,r.b,[u.h]),u.d(4608,u.j,u.j,[]),u.d(5120,u.k,u.l,[]),u.d(5120,u.m,u.n,[]),u.d(5120,u.o,u.p,[]),u.d(4608,i.b,i.c,[r.c]),u.d(6144,u.q,null,[i.b]),u.d(4608,i.d,i.e,[]),u.d(5120,i.f,function(l,n,t,u){return[new i.g(l),new i.h(n),new i.i(t,u)]},[r.c,r.c,r.c,i.d]),u.d(4608,i.j,i.j,[i.f,u.r]),u.d(135680,i.k,i.k,[r.c]),u.d(4608,i.l,i.l,[i.j,i.k]),u.d(6144,u.s,null,[i.l]),u.d(6144,i.m,null,[i.k]),u.d(4608,u.t,u.t,[u.r]),u.d(4608,i.n,i.n,[r.c]),u.d(4608,i.o,i.o,[r.c]),u.d(512,r.d,r.d,[]),u.d(1024,u.u,i.p,[]),u.d(1024,u.v,function(l,n){return[i.q(l,n)]},[[2,i.r],[2,u.w]]),u.d(512,u.x,u.x,[[2,u.v]]),u.d(131584,u.y,u.y,[u.r,u.z,u.A,u.u,u.e,u.x]),u.d(2048,u.B,null,[u.y]),u.d(512,u.C,u.C,[u.B]),u.d(512,i.s,i.s,[[3,i.s]]),u.d(512,e.a,e.a,[])])})},0:function(l,n,t){l.exports=t("cDNt")},NhKt:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=[""]},"aR8+":function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){}return l}()},cDNt:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t("/oeL"),e=t("p5Ee"),o=t("+h1B"),a=t("fc+i");e.a.production&&t.i(u.a)(),t.i(a.a)().bootstrapModuleFactory(o.a)},djXl:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=["section[_ngcontent-%COMP%]{margin:0 110px}.log[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0}.text-center[_ngcontent-%COMP%]{text-align:center}.healthbar[_ngcontent-%COMP%]{width:80%;height:40px;background-color:#eee;margin:auto;transition:width .5s}.controls[_ngcontent-%COMP%], .log[_ngcontent-%COMP%]{margin-top:30px;text-align:center;padding:10px;border:1px solid #ccc;box-shadow:0 3px 6px #ccc}.log[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;font-weight:700;text-transform:uppercase}.log[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:5px}.log[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:20px}.playerLog[_ngcontent-%COMP%]{color:blue;background-color:#e4e8ff}.monsterLog[_ngcontent-%COMP%]{color:red;background-color:#ffc0c1}.healLog[_ngcontent-%COMP%]{color:green;background-color:#cff9d1}label[_ngcontent-%COMP%]{left:20%;opacity:0;position:absolute;font-size:2em;color:red;-webkit-animation:fade 1s ease-in;animation:fade 1s ease-in;top:20px}@-webkit-keyframes fade{0%{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:1;-webkit-transform:translateY(-20px);transform:translateY(-20px)}}@keyframes fade{0%{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:1;-webkit-transform:translateY(-20px);transform:translateY(-20px)}}"]},fzly:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){this.healthPlayer=100,this.healthMonster=100,this.disableSpecialAttack=!1,this.disableHeal2=!1,this.isRunning=!1,this.showDamageMonster=[],this.showDamagePlayer=[],this.showHeal=[],this.logs=[]}return l.prototype.startGame=function(){this.healthMonster=100,this.healthPlayer=100,this.isRunning=!0,this.showDamageMonster=[],this.showDamagePlayer=[],this.showHeal=[],this.logs=[],this.disableSpecialAttack=!1,this.disableHeal2=!1},l.prototype.giveUp=function(){this.isRunning=!1},l.prototype.attack=function(){this.checkWin();var l=this.randomDamage(3,10),n=this.monsterHitPlayer();this.healthMonster-=l,this.healthPlayer-=n,this.showDamageMonster.push(n),this.showDamagePlayer.push(l),this.log(l,n)},l.prototype.log=function(l,n){this.logs.unshift({textHeal:"",textPlayer:"Player hits Monster for "+l,textMonster:"Monster hits player for "+n})},l.prototype.monsterHitPlayer=function(){return this.randomDamage(5,12)},l.prototype.specialAttack=function(){this.checkWin();var l=this.randomDamage(10,18),n=this.monsterHitPlayer();this.healthMonster-=l,this.healthPlayer-=n,this.showDamageMonster.push(n),this.showDamagePlayer.push(l),this.log(l,n),this.disableSpecialAttack=!0},Object.defineProperty(l.prototype,"disableHeal",{get:function(){if(this.healthPlayer>90)return!0},enumerable:!0,configurable:!0}),l.prototype.heal=function(){var l=this.randomDamage(5,10);this.healthPlayer+=l,this.showHeal.push(l),this.logs.unshift({textHeal:"You is healed "+l+" health",textPlayer:"",textMonster:""}),this.disableHeal2=!0},l.prototype.checkWin=function(){var l=this;setTimeout(function(){return l.healthMonster<=0?(confirm("You won! New game?")?l.startGame():l.isRunning=!1,!0):l.healthPlayer<=0?(confirm("You lost! New game?")?l.startGame():l.isRunning=!1,!0):void 0},500)},l.prototype.randomDamage=function(l,n){return Math.floor(Math.random()*(n-l)+l)},l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},p5Ee:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u={production:!0}},q4dy:function(l,n,t){"use strict";function u(l){return a._12(0,[(l()(),a._13(0,null,null,1,"app-monster",[],null,null,null,r.a,r.b)),a._14(114688,null,0,i.a,[],null,null)],function(l,n){l(n,1,0)},null)}function e(l){return a._12(0,[(l()(),a._13(0,null,null,1,"app-root",[],null,null,null,u,_)),a._14(49152,null,0,c.a,[],null,null)],null,null)}var o=t("NhKt"),a=t("/oeL"),r=t("zz/H"),i=t("fzly"),c=t("wQAS");t.d(n,"a",function(){return h});var s=[o.a],_=a._11({encapsulation:0,styles:s,data:{}}),h=a._15("app-root",c.a,e,{},{},[])},qtrl:function(l,n){function t(l){throw new Error("Cannot find module '"+l+"'.")}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="qtrl"},wQAS:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){this.title="app"}return l}()},"zz/H":function(l,n,t){"use strict";function u(l){return f._12(0,[(l()(),f._13(0,null,null,1,"label",[["style","color:green"]],null,null,null,null,null)),(l()(),f._16(null,["+",""]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function e(l){return f._12(0,[(l()(),f._13(0,null,null,1,"label",[],null,null,null,null,null)),(l()(),f._16(null,["-",""]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function o(l){return f._12(0,[(l()(),f._13(0,null,null,1,"label",[],null,null,null,null,null)),(l()(),f._16(null,["-",""]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function a(l){return f._12(0,[(l()(),f._13(0,null,null,7,"section",[["class","row controls"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t"])),(l()(),f._13(0,null,null,4,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.startGame()&&u}return u},null,null)),(l()(),f._16(null,["START NEW GAME"])),(l()(),f._16(null,["\n\t"])),(l()(),f._16(null,["\n"]))],null,null)}function r(l){return f._12(0,[(l()(),f._13(0,null,null,16,"section",[["class","row controls"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t"])),(l()(),f._13(0,null,null,13,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,1,"button",[["class","btn btn-danger"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.attack()&&u}return u},null,null)),(l()(),f._16(null,["ATTACK"])),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,1,"button",[["class","btn btn-warning"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.specialAttack()&&u}return u},null,null)),(l()(),f._16(null,["SPECIAL ATTACK"])),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,1,"button",[["class","btn btn-success"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.heal()&&u}return u},null,null)),(l()(),f._16(null,["HEAL"])),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,1,"button",[["class","btn btn-default"]],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.giveUp()&&u}return u},null,null)),(l()(),f._16(null,["GIVE UP"])),(l()(),f._16(null,["\n\t"])),(l()(),f._16(null,["\n"]))],null,function(l,n){var t=n.component;l(n,7,0,t.disableSpecialAttack),l(n,10,0,t.disableHeal||t.disableHeal2)})}function i(l){return f._12(0,[(l()(),f._13(0,null,null,10,"li",[],null,null,null,null,null)),(l()(),f._16(null,["\n\t\t\t\t"])),(l()(),f._13(0,null,null,1,"p",[["class","healLog"]],null,null,null,null,null)),(l()(),f._16(null,["",""])),(l()(),f._16(null,["\n\t\t\t\t"])),(l()(),f._13(0,null,null,1,"p",[["class","playerLog"]],null,null,null,null,null)),(l()(),f._16(null,["",""])),(l()(),f._16(null,["\n\t\t\t\t"])),(l()(),f._13(0,null,null,1,"p",[["class","monsterLog"]],null,null,null,null,null)),(l()(),f._16(null,["",""])),(l()(),f._16(null,["\n\t\t\t"]))],null,function(l,n){l(n,3,0,n.context.$implicit.textHeal),l(n,6,0,n.context.$implicit.textPlayer),l(n,9,0,n.context.$implicit.textMonster)})}function c(l){return f._12(0,[(l()(),f._13(0,null,null,10,"section",[["class","row log"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t"])),(l()(),f._13(0,null,null,7,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),f._16(null,["\n\t\t\t"])),(l()(),f._17(16777216,null,null,1,null,i)),f._14(802816,null,0,d.g,[f._2,f._3,f.m],{ngForOf:[0,"ngForOf"]},null),(l()(),f._16(null,["\n\t\t"])),(l()(),f._16(null,["\n\t"])),(l()(),f._16(null,["\n"]))],function(l,n){l(n,7,0,n.component.logs)},null)}function s(l){return f._12(0,[(l()(),f._13(0,null,null,38,"section",[["class","row"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t"])),(l()(),f._13(0,null,null,18,"div",[["class","col-xs-12 col-sm-6 col-md-6"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,1,"h1",[["class","text-center"]],null,null,null,null,null)),(l()(),f._16(null,["YOU"])),(l()(),f._16(null,["\n\t\t"])),(l()(),f._17(16777216,null,null,1,null,u)),f._14(802816,null,0,d.g,[f._2,f._3,f.m],{ngForOf:[0,"ngForOf"]},null),(l()(),f._16(null,["\n\t\t"])),(l()(),f._17(16777216,null,null,1,null,e)),f._14(802816,null,0,d.g,[f._2,f._3,f.m],{ngForOf:[0,"ngForOf"]},null),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,6,"div",[["class","healthbar"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t\t\t"])),(l()(),f._13(0,null,null,3,"div",[["class","healthbar text-center"],["style","background-color: green; margin: 0; color: white;"]],null,null,null,null,null)),f._14(278528,null,0,d.h,[f.o,f.Z,f._0],{ngStyle:[0,"ngStyle"]},null),f._18({width:0,backgroundColor:1}),(l()(),f._16(null,["\n\t\t\t\t","\n\t\t\t"])),(l()(),f._16(null,["\n\t\t"])),(l()(),f._16(null,["\n\t"])),(l()(),f._16(null,["\n\t"])),(l()(),f._13(0,null,null,15,"div",[["class","col-xs-12 col-sm-6 col-md-6"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,1,"h1",[["class","text-center"]],null,null,null,null,null)),(l()(),f._16(null,["MONSTER"])),(l()(),f._16(null,["\n\t\t"])),(l()(),f._17(16777216,null,null,1,null,o)),f._14(802816,null,0,d.g,[f._2,f._3,f.m],{ngForOf:[0,"ngForOf"]},null),(l()(),f._16(null,["\n\t\t"])),(l()(),f._13(0,null,null,6,"div",[["class","healthbar"]],null,null,null,null,null)),(l()(),f._16(null,["\n\t\t\t"])),(l()(),f._13(0,null,null,3,"div",[["class","healthbar text-center"],["style","margin: 0; color: white;"]],null,null,null,null,null)),f._14(278528,null,0,d.h,[f.o,f.Z,f._0],{ngStyle:[0,"ngStyle"]},null),f._18({width:0,backgroundColor:1}),(l()(),f._16(null,["\n\t\t\t\t","\n\t\t\t"])),(l()(),f._16(null,["\n\t\t"])),(l()(),f._16(null,["\n\t"])),(l()(),f._16(null,["\n"])),(l()(),f._16(null,["\n"])),(l()(),f._17(16777216,null,null,1,null,a)),f._14(16384,null,0,d.i,[f._2,f._3],{ngIf:[0,"ngIf"]},null),(l()(),f._16(null,["\n"])),(l()(),f._17(16777216,null,null,1,null,r)),f._14(16384,null,0,d.i,[f._2,f._3],{ngIf:[0,"ngIf"]},null),(l()(),f._16(null,["\n"])),(l()(),f._17(16777216,null,null,1,null,c)),f._14(16384,null,0,d.i,[f._2,f._3],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,8,0,t.showHeal),l(n,11,0,t.showDamageMonster),l(n,16,0,l(n,17,0,t.healthPlayer+"%",t.healthPlayer<30?"red":"green")),l(n,28,0,t.showDamagePlayer),l(n,33,0,l(n,34,0,t.healthMonster+"%",t.healthMonster<30?"red":"green")),l(n,41,0,!t.isRunning),l(n,44,0,t.isRunning),l(n,47,0,t.logs.length>0)},function(l,n){var t=n.component;l(n,18,0,t.healthPlayer),l(n,35,0,t.healthMonster)})}function _(l){return f._12(0,[(l()(),f._13(0,null,null,1,"app-monster",[],null,null,null,s,m)),f._14(114688,null,0,g.a,[],null,null)],function(l,n){l(n,1,0)},null)}var h=t("djXl"),f=t("/oeL"),d=t("qbdv"),g=t("fzly");t.d(n,"b",function(){return m}),n.a=s;var p=[h.a],m=f._11({encapsulation:0,styles:p,data:{}});f._15("app-monster",g.a,_,{},{},[])}},[0]);