(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(4),i=a.n(l),c=(a(14),a(1)),r=a(5),u=a(6),o=a(2),h=a(8),d=a(7),m=(a(15),a(16),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={inputValue:"",formulaDisplayValue:"",indexOfLastOperator:-1,expParserArr:[],calculationWasDone:!1},n.btnref=s.a.createRef(),n.handleBtnPress=n.handleBtnPress.bind(Object(o.a)(n)),n.calculateOutput=n.calculateOutput.bind(Object(o.a)(n)),n}return Object(u.a)(a,[{key:"handleBtnPress",value:function(e){var t=e.target.innerHTML,a=this.state.inputValue;if("AC"!=t){if(this.state.formulaDisplayValue.length>0&&this.setState({formulaDisplayValue:""}),("0"!=t||1!=a.length)&&(!["+","x","\xf7","."].includes(t)||0!=a.length)){if(["+","-"].includes(t)&&["+","-"].includes(a[a.length-1]))t="-",this.setState((function(e,t){return{inputValue:e.inputValue.slice(0,e.inputValue.length-1)}}));else if(["+","-","x","\xf7","."].includes(t)&&["+","-","*","/","."].includes(a[a.length-1]))return;if("."!=t||!this.state.inputValue.slice(this.state.indexOfLastOperator+1,this.state.inputValue.length).includes(".")){if("x"==t?t="*":"\xf7"==t&&(t="/"),"\u2190"==t)this.setState((function(e,t){return{inputValue:e.inputValue.slice(0,e.inputValue.length-1)}}));else if(this.state.calculationWasDone&&"1234567890".includes(t))this.setState((function(e,a){return{inputValue:t}}));else{var n="1234567890.".includes(t)?this.state.indexOfLastOperator:this.state.inputValue.length;this.setState((function(e,a){return{inputValue:e.inputValue+t,indexOfLastOperator:n}}))}this.state.calculationWasDone&&this.setState({calculationWasDone:!1})}}}else this.setState({inputValue:"",formulaDisplayValue:"",expParserArr:[],calculationWasDone:!1,indexOfLastOperator:-1})}},{key:"calculateOutput",value:function(){var e=this.state,t=e.inputValue,a=e.expParserArr,n=-1;t.split("").map((function(e,s){if(("+*/-".includes(e)||s==t.length-1)&&0!=s)if(s==t.length-1){var l=Number(t.slice(n+1,s+1));a.push(l),n=s}else{var i=Number(t.slice(n+1,s));a.push(i),a.push(e),n=s}}));for(var s=0;s<a.length;)"*"!=a[s]?"/"!=a[s]?s++:a=[].concat(Object(c.a)(a.slice(0,s-1)),[a[s-1]/a[s+1]],Object(c.a)(a.slice(s+2))):a=[].concat(Object(c.a)(a.slice(0,s-1)),[a[s-1]*a[s+1]],Object(c.a)(a.slice(s+2)));for(s=0;s<a.length;)"+"!=a[s]?"-"!=a[s]?s++:a=[].concat(Object(c.a)(a.slice(0,s-1)),[a[s-1]-a[s+1]],Object(c.a)(a.slice(s+2))):a=[].concat(Object(c.a)(a.slice(0,s-1)),[a[s-1]+a[s+1]],Object(c.a)(a.slice(s+2)));for(var l=a[0]%1>0?String(a[0].toFixed(4)):String(a[0]),i=l.slice(0),r=l.length-1;r>=l.length-3&&"0"==l[r];r--)i=l.slice(0,r);l=i.slice(0),this.setState((function(e,t){return{inputValue:l,formulaDisplayValue:e.inputValue,expParserArr:[],indexOfLastOperator:-1,calculationWasDone:!0}}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"calculator"},s.a.createElement("div",{className:"display"},s.a.createElement("p",{className:"formula-display ".concat(this.state.formulaDisplayValue.length>0?".formula-display-has-value":"")},this.state.formulaDisplayValue),s.a.createElement("p",{className:"input-display"},this.state.inputValue)),s.a.createElement("div",{className:"numpad"},s.a.createElement("div",{className:"btn btn-ac",onClick:this.handleBtnPress},"AC"),s.a.createElement("div",{className:"btn btn-round btn-divide ",onClick:this.handleBtnPress},"\xf7")," ",s.a.createElement("div",{className:"btn btn-round btn-delete",onClick:this.handleBtnPress},"\u2190")," ",s.a.createElement("div",{className:"btn",value:"7",onClick:this.handleBtnPress},"7"),s.a.createElement("div",{className:"btn",onClick:this.handleBtnPress},"8"),s.a.createElement("div",{className:"btn",onClick:this.handleBtnPress},"9"),s.a.createElement("div",{className:"btn btn-round btn-multiply",onClick:this.handleBtnPress},"x"),s.a.createElement("div",{className:"btn",onClick:this.handleBtnPress},"4"),s.a.createElement("div",{className:"btn",onClick:this.handleBtnPress},"5"),s.a.createElement("div",{className:"btn",onClick:this.handleBtnPress},"6"),s.a.createElement("div",{className:"btn btn-round btn-minus",onClick:this.handleBtnPress},"-"),s.a.createElement("div",{className:"btn",onClick:this.handleBtnPress},"1"),s.a.createElement("div",{className:"btn",onClick:this.handleBtnPress},"2"),s.a.createElement("div",{className:"btn",onClick:this.handleBtnPress},"3"),s.a.createElement("div",{className:"btn btn-round",onClick:this.handleBtnPress},"+"),s.a.createElement("div",{className:"btn btn-dot",onClick:this.handleBtnPress},"."),s.a.createElement("div",{className:"btn",onClick:this.handleBtnPress},"0"),s.a.createElement("div",{className:"btn btn-equal",onClick:this.calculateOutput},"="))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8d80b15f.chunk.js.map