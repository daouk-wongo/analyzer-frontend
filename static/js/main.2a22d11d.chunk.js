(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=(n(15),n(5)),l=n(1),u=(n(17),n(2)),s=n.n(u);function h(){h=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),c=new R(r||[]);return a(i,"_invoke",{value:A(e,n,c)}),i}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var p="suspendedStart",m="suspendedYield",d="executing",y="completed",v={};function g(){}function b(){}function E(){}var w={};u(w,i,function(){return this});var j=Object.getPrototypeOf,x=j&&j(j(C([])));x&&x!==n&&r.call(x,i)&&(w=x);var O=E.prototype=g.prototype=Object.create(w);function k(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){function n(a,o,i,c){var l=f(e[a],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(s).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t(function(t,a){n(e,r,t,a)})}return o=o?o.then(a,a):a()}})}function A(t,n,r){var a=p;return function(o,i){if(a===d)throw new Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:e,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var l=D(c,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===p)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=d;var u=f(t,n,r);if("normal"===u.type){if(a=r.done?y:m,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(a=y,r.method="throw",r.arg=u.arg)}}}function D(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,D(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=f(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function C(t){if(t||""===t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=E,a(O,"constructor",{value:E,configurable:!0}),a(E,"constructor",{value:b,configurable:!0}),b.displayName=u(E,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,u(e,l,"GeneratorFunction")),e.prototype=Object.create(O),e},t.awrap=function(e){return{__await:e}},k(S.prototype),u(S.prototype,c,function(){return this}),t.AsyncIterator=S,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new S(s(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},k(O),u(O,l,"Generator"),u(O,i,function(){return this}),u(O,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=C,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return c.type="throw",c.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;_(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:C(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}var f=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(""),u=Object(l.a)(i,2),f=u[0],p=u[1],m=Object(r.useState)(""),d=Object(l.a)(m,2),y=d[0],v=d[1],g=Object(r.useState)(""),b=Object(l.a)(g,2),E=b[0],w=b[1],j=Object(r.useState)(""),x=Object(l.a)(j,2),O=x[0],k=x[1],S=Object(r.useState)(""),A=Object(l.a)(S,2),D=A[0],L=A[1],_=Object(r.useState)(""),R=Object(l.a)(_,2),C=R[0],F=R[1],T=Object(r.useState)(""),N=Object(l.a)(T,2),z=N[0],P=N[1],G=Object(r.useState)(""),I=Object(l.a)(G,2),V=I[0],M=I[1],q=Object(r.useState)(""),B=Object(l.a)(q,2),J=B[0],Y=B[1],W=function(e){return"\n      Average Daily Return: ".concat(e["Average Daily Return"],"\n      Average Daily STD: ").concat(e["Average Daily STD"],"\n      Average Daily Sharpe: ").concat(e["Average Daily Sharpe"],"\n\n      Daily Tracking Error: ").concat(e["Daily Tracking Error"],"\n      Annualized Tracking Error: ").concat(e["Annualized Tracking Error"],"\n\n      Daily Information Ratio: ").concat(e["Daily Information Ratio"],"\n      Annualized Information Ratio: ").concat(e["Annualized Information Ratio"],"\n\n      Daily Downside Deviation: ").concat(e["Daily Downside Deviation"],"\n      Annualized Downside Deviation: ").concat(e["Annualized Downside Deviation"],"\n\n      Daily Sortino: ").concat(e["Daily Sortino"],"\n      Annualized Sortino: ").concat(e["Annualized Sortino"],"\n\n      Max Drawdown: ").concat(e["Max Drawdown"],"\n\n      Annualized Calmar: ").concat(e["Annualized Calmar"],"\n\n      Alpha: ").concat(e.Alpha,"\n      Beta: ").concat(e.Beta,"\n\n      VAR 90: ").concat(e["VAR 90"],"\n      VAR 95: ").concat(e["VAR 95"],"\n      VAR 99: ").concat(e["VAR 99"],"\n\n      Monte Carlo VaR at ").concat(e["Confidence Level"],"% confidence level: ").concat(e["Monte Carlo VaR confidence level"],"\n\n\n      ")},H=function(){var e=Object(c.a)(h().mark(function e(t){return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return M(""),Y(""),t.preventDefault(),console.log("sending request"),P("sending request"),e.next=8,fetch("https://xmnqkamu62cpvtpjrs6lyqxsjq0beirh.lambda-url.us-east-1.on.aws/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"*/*"},body:JSON.stringify({tickers:n.split(" "),weights:f.split(" ").map(function(e){return parseFloat(e)}),start_date:y,end_date:E,risk_free_rate:parseFloat(O),benchmark:D.split(" "),mar:parseFloat(C)})}).then(function(e){return e.json()}).then(function(e){var t=JSON.parse(e.body);console.log(t),P(W(t)),M(s.a.encode(t.Plot)),Y(s.a.encode(t.Plot1))}).catch(function(e){console.log(e.message),P(e.message)});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Stock Analyzer"),a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"column"},a.a.createElement("form",{onSubmit:H},a.a.createElement("label",{htmlFor:"tickers"},"Tickers:"),a.a.createElement("br",null),a.a.createElement("input",{type:"text",id:"tickers",value:n,onChange:function(e){return o(e.target.value)},placeholder:"separate tickers with spaces"}),a.a.createElement("br",null),a.a.createElement("label",{htmlFor:"weights"},"Weights:"),a.a.createElement("br",null),a.a.createElement("input",{type:"text",id:"weights",value:f,onChange:function(e){return p(e.target.value)},placeholder:"separate weights with spaces"}),a.a.createElement("br",null),a.a.createElement("label",{htmlFor:"start_date"},"Start Date:"),a.a.createElement("br",null),a.a.createElement("input",{type:"text",id:"start_date",value:y,onChange:function(e){return v(e.target.value)},placeholder:"yyyy-mm-dd"}),a.a.createElement("br",null),a.a.createElement("label",{htmlFor:"end_date"},"End Date:"),a.a.createElement("br",null),a.a.createElement("input",{type:"text",id:"end_date",value:E,onChange:function(e){return w(e.target.value)},placeholder:"yyyy-mm-dd"}),a.a.createElement("br",null),a.a.createElement("label",{htmlFor:"risk_free_rate"},"Risk-free Rate:"),a.a.createElement("br",null),a.a.createElement("input",{type:"text",id:"risk_free_rate",onChange:function(e){return k(e.target.value)},value:O}),a.a.createElement("br",null),a.a.createElement("label",{htmlFor:"benchmark"},"Benchmark:"),a.a.createElement("br",null),a.a.createElement("input",{type:"text",id:"benchmark",value:D,onChange:function(e){return L(e.target.value)},placeholder:"single ticker to compare"}),a.a.createElement("br",null),a.a.createElement("label",{htmlFor:"mar"},"Mar:"),a.a.createElement("br",null),a.a.createElement("input",{type:"text",id:"mar",onChange:function(e){return F(e.target.value)},value:C}),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("button",{type:"submit"},"Submit"))),a.a.createElement("div",{class:"column"},z&&a.a.createElement("div",null,a.a.createElement("p",{class:"line-break"},z))),a.a.createElement("div",{class:"column"},V&&a.a.createElement("div",null,a.a.createElement("img",{src:"data:image/png;base64,".concat(V),onChange:function(e){return M(e.target.src)}})),a.a.createElement("div",null),J&&a.a.createElement("div",null,a.a.createElement("img",{src:"data:image/png;base64,".concat(J),onChange:function(e){return Y(e.target.src)}}))))))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)))},6:function(e,t,n){e.exports=n(19)}},[[6,2,1]]]);
//# sourceMappingURL=main.2a22d11d.chunk.js.map