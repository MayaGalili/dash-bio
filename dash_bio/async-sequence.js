(window.webpackJsonpdash_bio=window.webpackJsonpdash_bio||[]).push([[9],{176:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},177:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},443:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(1),i=l(o),s=(l(n(0)),n(444)),a=l(n(447));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var u=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.handleChange=r.handleChange.bind(r),r.handleRef=r.handleRef.bind(r),n.selection&&n.selection.length>0&&n.coverage&&n.coverage.length>0&&console.warn("The selection and coverage options are not compatible with each other."),r._seqObj=new a.default(r.props.sequence),r._div=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.callRender=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.props,o=n.selection,i=c(n,["selection"]),s=this._div;null!==s&&null!==this.props.sequence&&(this._seqObj.render("#"+s.id,r({},i,t)),this.props.coverage.length>0&&this._seqObj.coverage(this.props.coverage),this.props.legend.length>0&&this._seqObj.addLegend(this.props.legend),o.length>0&&(e=this._seqObj).selection.apply(e,o))},t.prototype.componentDidMount=function(){document.addEventListener("change",this.handleChange),this.callRender(),this._seqObj.onSubpartSelected(this.props.onSubpartSelected),this._seqObj.onMouseSelection(this.props.onMouseSelection)},t.prototype.componentWillReceiveProps=function(e){this.props.sequence!==e.sequence&&(this._seqObj=new a.default(e.sequence))},t.prototype.componentDidUpdate=function(e,t){this.props!==e&&this.callRender()},t.prototype.componentWillUnmount=function(){document.removeEventListener("change",this.handleChange)},t.prototype.handleChange=function(e){var t=e.target;(" "+t.className+" ").indexOf(" "+this.props.seqLenClass+" ")>-1&&this.callRender({charsPerLine:t.value})},t.prototype.handleRef=function(e){this._div=e},t.prototype.render=function(){var e=this.props,t=(e.id,e.sequence,e.className);return i.default.createElement("div",{className:t,id:this.props.id,ref:this.handleRef})},t}(o.Component);t.default=u,u.propTypes={},u.defaultProps={id:(0,s.v4)(),coverage:[],legend:[],selection:[],seqLenClass:"CPLChoice",onMouseSelection:function(e){},onSubpartSelected:function(e){},className:""},e.exports=t.default},444:function(e,t,n){var r=n(445),o=n(446),i=o;i.v1=r,i.v4=o,e.exports=i},445:function(e,t,n){var r,o,i=n(176),s=n(177),a=0,l=0;e.exports=function(e,t,n){var c=t&&n||0,u=t||[],p=(e=e||{}).node||r,d=void 0!==e.clockseq?e.clockseq:o;if(null==p||null==d){var h=i();null==p&&(p=r=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==d&&(d=o=16383&(h[6]<<8|h[7]))}var f=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:l+1,v=f-a+(g-l)/1e4;if(v<0&&void 0===e.clockseq&&(d=d+1&16383),(v<0||f>a)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=f,l=g,o=d;var b=(1e4*(268435455&(f+=122192928e5))+g)%4294967296;u[c++]=b>>>24&255,u[c++]=b>>>16&255,u[c++]=b>>>8&255,u[c++]=255&b;var y=f/4294967296*1e4&268435455;u[c++]=y>>>8&255,u[c++]=255&y,u[c++]=y>>>24&15|16,u[c++]=y>>>16&255,u[c++]=d>>>8|128,u[c++]=255&d;for(var m=0;m<6;++m)u[c+m]=p[m];return t||s(u)}},446:function(e,t,n){var r=n(176),o=n(177);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var a=0;a<16;++a)t[i+a]=s[a];return t||o(s)}},447:function(e,t,n){$=n(143);var r=n(448);n(450).mixin(r.prototype),e.exports=r},448:function(e,t,n){var r,o=(r=n(449),function(e,t){var n,o=this;this.events={MOUSE_SELECTION_EVENT:"sequence-viewer-mouse-selection",SEQUENCE_SELECTED_EVENT:"sequence-viewer-substring-selected"},n=void 0!==t?t:"",console.log(n),e=e;var s,a,l="",c="",u={data:[],start:null,end:null,hlColor:null},p={};function d(e){return e+~~(e/10)+4*~~(e/p.charsPerLine)}this.render=function(t,h){if("string"!=typeof t)throw new Error("Div identifier must be a string");if(s=t,null===(a=document.getElementById(t.substring(1))))throw new Error("Cannot find element with id: "+t.substring(1));h||(h={}),p.showLineNumbers=void 0===h.showLineNumbers||h.showLineNumbers,p.wrapAminoAcids=void 0===h.wrapAminoAcids||h.wrapAminoAcids,p.sequenceMaxHeight=void 0===h.sequenceMaxHeight?"400px":h.sequenceMaxHeight,p.title=void 0===h.title?"Protein Sequence":h.title,p.charsPerLine=void 0===h.charsPerLine?30:h.charsPerLine,p.search=void 0!==h.search&&h.search,p.toolbar=void 0!==h.toolbar&&h.toolbar,p.badge=void 0===h.badge||h.badge,p.fasta=void 0===h.fasta||h.fasta,p.apiURL=void 0===h.apiURL||h.apiURL,p.blast=void 0===h.blast||h.blast,p.header=h.header?{display:void 0===h.header.display||h.header.display,searchInTitle:void 0===h.header.searchInTitle||h.header.searchInTitle,unit:void 0===h.header.unit?"Char":h.header.unit,showCpl:void 0===h.header.showCpl||h.header.showCpl,badgeWithUnit:void 0!==h.header.badgeWithUnit&&h.header.badgeWithUnit}:{display:!0,searchInTitle:!0,unit:"Char",showCpl:!0,badgeWithUnit:!1};var v='<div style="display:inline-block;"><span class="badge" style="border-radius:70%;border: 2px solid black;color:#C50063;padding:8px 5px;background-color:white;margin-right:10px;vertical-align:middle;min-width:32px;">'+e.length+"</span></div>",b='<div style="display:inline-block;"><span class="badge" style="border-radius:70%;border: 2px solid black;color:#C50063;padding:5px 5px;background-color:white;margin-right:10px;vertical-align:middle;min-width:32px;font-size:11px;">'+e.length+"<div style='margin-top:-2px;font-size:9px;color:black;text-transform:lowercase;'>"+p.header.unit+"</div></span></div>",y=p.badge?p.header.badgeWithUnit?b:v:"",m=(p.header.display?'<div class="sequenceHeader row" style="border-bottom: 1px solid #E7EAEC;padding-bottom:5px;margin:0px 0px 10px">'+y+'<h4 style="display:inline-block;vertical-align:middle;">'+p.title+"</h4></div>":"")+'<div class="sequenceBody" style="margin-top: 5px;"><div class="scroller" style="max-height:'+p.sequenceMaxHeight+';overflow:auto;white-space: nowrap;padding-right:20px;margin-right:10px;"><div class="charNumbers" style="font-family: monospace;font-size: 13px;display:inline-block;text-align:right; padding-right:5px; border-right:1px solid LightGray;"></div><div class="fastaSeq" display-option="'+p.charsPerLine+'" style="font-family: monospace;font-size: 13px;display:inline-block;padding:5px;">'+e+'</div></div><div class="coverageLegend" style="margin-top: 10px;margin-left:15px;"></div></div>';if($(t).html(m),p.wrapAminoAcids?function(e){var t=parseInt($(e).attr("display-option"));t=(t+t/10).toString();var n=$(e).html();n=n.toString().match(/.{1,10}/g).join(" ").match(new RegExp(".{1,"+t+"}","g")).join("<br>"),c=n,$(e).html(n)}(t+" .fastaSeq"):$(t+" .scroller").css("overflow-x","auto"),p.showLineNumbers&&function(e,t){for(var n=$(e).html().split("<br>"),r=parseInt($(e).attr("display-option")),o=[],i=0,s=0;s<n.length;s++)o.push(i+1+"<br>"),i+=r;$(t).html(o.join(""))}(t+" .fastaSeq",t+" .charNumbers"),p.toolbar&&(p.header.showCpl?function(){var e=n?"hidden-xs":"",t='<form class="form-inline" style="margin-bottom:5px;"><div class="form-group form-group-sm sequenceToolbar" style=""> <label class="control-label charPerLine-label '+e+"\" for='"+s.substring(1)+"-cpl' style='margin-right:5px;'>"+p.header.unit+' per line</label><select class="CPLChoice form-control '+e+"\" id='"+s.substring(1)+"-cpl' style='display:inline-block;width:auto;margin-right:10px;'><option>Select</option><option value=50>50</option><option value=60>60</option><option value=70>70</option><option value=80>80</option><option value=90>90</option><option value=100>100</option></select></div></form>";$(s+" .sequenceBody").prepend(t),$(s+" .CPLChoice").change((function(){var e;e=this,p.charsPerLine=e.value,o.render(s,p),u.data.length&&o.coverage(u.data,u.start,u.end,u.hlColor),$(s+" .CPLChoice option:selected").text($(this).val())}))}():$(s+" .sequenceBody").prepend('<form class="form-inline" style="margin-bottom:5px;"><div class="form-group form-group-sm sequenceToolbar" style=""> </div></form>'),""!==n)){if(p.fasta){var x="https://www.nextprot.org";p.apiURL&&(x=p.apiURL),$(s+" .sequenceToolbar").append('<a class="btn btn-default btn-sm fasta-link" href="'+x+"/isoform/"+n+".fasta\" target='_blank'>View FASTA</a>")}p.blast&&$(s+" .sequenceToolbar").append('<a class="btn btn-default btn-sm" href="/blast/'+n+'" style="margin-left:5px;">Blast sequence</a><a id="selectionBlast" class="btn btn-default btn-sm" href="/blast/'+n+'" style="margin-left:5px;"> Blast selection</a>')}p.search&&function(t){t?$(s+" .sequenceHeader").append('<input class="inputSearchSeq form-control pull-right" type="text" style="width:40%;margin-top: 3px;" placeholder="Search in sequence.. (Regex supported)">'):$(s+" .sequenceBody").prepend('<input class="inputSearchSeq form-control" type="text" style="width:100%;margin:3px auto 10px;" placeholder="Search in sequence.. (Regex supported)">'),$(s+" .inputSearchSeq").keyup(r((function(){var t=$(this).val();if(/\S/.test(t)){for(var n,r=new RegExp(t,"gi"),o=[];null!=(n=r.exec(e));)o.push({start:n.index,end:n.index+n[0].length});o.sort((function(e,t){return t.start-e.start})),f(o),function(e,t,n){(new Date).getTime(),0===e.length&&$(s+" .fastaSeq").html(l);var r=l.toString(),o=0,a=0;for(i in e)o=d(e[i].start),a=d(e[i].end),r=r.substring(0,o)+"<span class='stringsSelected' style=\"background:"+t+';color:white;">'+r.substring(o,a)+"</span>"+r.substring(a,r.length);$(s+" .fastaSeq").html(r)}(o,"#C50063")}else $(s+" .fastaSeq").html(c),g([])}),250))}(p.header.searchInTitle),l=$(t+" .fastaSeq").html(),$(s+" .fastaSeq").mouseup((function(){var e=function(){var e,t=window.getSelection().toString().replace(/\s+/g,""),n=window.getSelection(),r=$(s+" .fastaSeq")[0],o=$(s+" .fastaSeq").text(),i=n.getRangeAt(0),a=i.cloneRange();a.selectNodeContents(r),a.setEnd(i.endContainer,i.endOffset),e=a.toString().length;var l=o.substring(0,e).replace(/\s+/g,"").length,c=l-(t.length-1);return{text:t,start:c,end:l}}();e&&(function(e){if(CustomEvent){var t=new CustomEvent(o.events.MOUSE_SELECTION_EVENT,{detail:{selection:e.text,start:e.start,end:e.end}});a.dispatchEvent(t)}else console.warn("CustomEvent is not defined....");o.trigger&&o.trigger(o.events.MOUSE_SELECTION_EVENT,{selection:e})}(e),p.blast&&$("#selectionBlast").attr("href","/blast/"+n+"/"+e.start+"/"+e.end+"/"))}))},this.selection=function(e,t,r,o){var i=[e,t],a=l;f([{start:e,end:t}]),i[0]=i[0]+~~(i[0]/10)+4*~~(i[0]/p.charsPerLine),i[1]=i[1]+~~(i[1]/10)+4*~~(i[1]/p.charsPerLine),a=a.substring(0,i[0])+"<span class='stringSelected' style=\"background:"+r+';color:white;">'+a.substring(i[0],i[1])+"</span>"+a.substring(i[1],a.length),$(s+" .fastaSeq").html(a),p.blast&&$("#selectionBlast").attr("href","/blast/"+n+"/"+(e+1)+"/"+t+"/")},this.addLegend=function(e){for(var t=0;t<e.length;t++)!0===e[t].underscore?$(s+" .coverageLegend").append('<div style="display:inline-block;background:'+e[t].color+';width:20px;height:20px;vertical-align:middle;margin:0px 5px 0px 10px;border-radius:50%; border: 1px solid grey;text-align:center; line-height:0.8;">_</div><p style="display:inline-block;font-weight:bold;font-size:11px;font-style:italic;margin:0;padding-top:3px;vertical-align:top;">'+e[t].name+"</p></div>"):$(s+" .coverageLegend").append('<div style="display:inline-block;background:'+e[t].color+';width:20px;height:20px;vertical-align:middle;margin:0px 5px 0px 10px;border-radius:50%;"></div><p style="display:inline-block;font-weight:bold;font-size:11px;font-style:italic;margin:0;padding-top:3px;vertical-align:top;">'+e[t].name+"</p>")};var h=function(e){e=e||{};for(var t=1;t<arguments.length;t++){var n=arguments[t];if(n)for(var r in n)n.hasOwnProperty(r)&&("object"==typeof n[r]?e[r]=h(e[r],n[r]):e[r]=n[r])}return e};function f(t){var n=function(e,t){var n=[];return e.length&&e.forEach((function(e){n.push({start:e.start+1,end:e.end,sequence:t.substring(e.start,e.end)})})),n}(t,e);n&&g(n)}function g(e){if(CustomEvent){var t=new CustomEvent(o.events.SEQUENCE_SELECTED_EVENT,{detail:e});a.dispatchEvent(t)}else console.warn("CustomEvent is not defined....");o.trigger&&o.trigger(o.events.SEQUENCE_SELECTED_EVENT,e)}this.coverage=function(t,n,r,o){u.data=h([],t),u.start=n,u.end=r,u.hlColor=o,t.sort((function(e,t){return e.start-t.start})),t=function(t){for(var n=t.slice(),r=0;r<=t.length-1;r++)0===r?(t[0].start>0&&n.unshift({start:0,end:t[0].start,color:"black",underscore:!1}),r===t.length-1&&n.push({start:t[r].end,end:e.length,color:"black",underscore:!1})):r===t.length-1?(t[r-1].end<t[r].start&&n.push({start:t[r-1].end,end:t[r].start,color:"black",underscore:!1}),t[r].end<e.length-1&&n.push({start:t[r].end,end:e.length,color:"black",underscore:!1})):t[r-1].end<t[r].start&&n.push({start:t[r-1].end,end:t[r].start,color:"black",underscore:!1}),0!==r&&t[r-1].end>t[r].start&&console.warn("WARNING (error): Some positions in the coverage list are overlapping");return n.sort((function(e,t){return e.start-t.start})),n}(t),(new Date).getTime(),n||(n=0),r||(r=0),o||(o="#FFE5A3");for(var i="",a="",p=0;p<t.length;p++){var f="";void 0!==t[p].tooltip&&(f=' title="'+t[p].tooltip+'"');var g="";void 0!==t[p].bgcolor&&(g="background:"+t[p].bgcolor+";");var v="",b="";void 0!==t[p].onclick&&(v=' onclick=" return '+p+';" ',b="cursor: pointer;"),t[p].underscore?i+=a='<span style="text-decoration:underline;color:'+t[p].color+";"+g+b+'"'+f+v+">":i+=a='<span style="color:'+t[p].color+";"+g+b+'"'+f+v+">",r?n>=t[p].start&&n<t[p].end&&r>=t[p].start&&r<t[p].end?(i+=l.substring(d(t[p].start),d(n))+'<span class="peptideHighlighted" style="background:'+o+';">'+l.substring(d(n),d(r+1)),i+="</span>"+l.substring(d(r+1),d(t[p].end))+"</span>"):n>=t[p].start&&n<t[p].end?i+=l.substring(d(t[p].start),d(n))+'</span><span class="peptideHighlighted" style="background:'+o+';">'+a+l.substring(d(n),d(t[p].end))+"</span>":r>=t[p].start&&r<t[p].end?i+=l.substring(d(t[p].start),d(r+1))+"</span></span>"+a+l.substring(d(r+1),d(t[p].end))+"</span>":i+=l.substring(d(t[p].start),d(t[p].end))+"</span>":i+=l.substring(d(t[p].start),d(t[p].end))+"</span>"}var y=$(s+" .fastaSeq");y.html(i),c=i;var m=$("[onclick]",y);for(p=0;p<m.length;p++){var x=m[p].onclick();m[p].onclick=t[x].onclick}},this.onMouseSelection=function(e){a.addEventListener(o.events.MOUSE_SELECTION_EVENT,e)},this.onSubpartSelected=function(e){a.addEventListener(o.events.SEQUENCE_SELECTED_EVENT,e)}});"object"==typeof e.exports&&(e.exports=o)},449:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")(),u=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return c.Date.now()};function f(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(f(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=f(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var a=o.test(e);return a||i.test(e)?s(e.slice(2),a?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,s,a,l,c=0,u=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,s=e.apply(i,n)}function m(e){return c=e,a=setTimeout(w,t),u?y(e):s}function x(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=i}function w(){var e=h();if(x(e))return E(e);a=setTimeout(w,function(e){var n=t-(e-l);return v?d(n,i-(e-c)):n}(e))}function E(e){return a=void 0,b&&r?y(e):(r=o=void 0,s)}function S(){var e=h(),n=x(e);if(r=arguments,o=this,l=e,n){if(void 0===a)return m(l);if(v)return a=setTimeout(w,t),y(l)}return void 0===a&&(a=setTimeout(w,t)),s}return t=g(t)||0,f(n)&&(u=!!n.leading,i=(v="maxWait"in n)?p(g(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=o=a=void 0},S.flush=function(){return void 0===a?s:E(h())},S}}).call(this,n(54))},450:function(e,t,n){var r=n(451);r.onAll=function(e,t){return this.on("all",e,t),this},r.oldMixin=r.mixin,r.mixin=function(e){r.oldMixin(e);for(var t=["onAll"],n=0;n<t.length;n++){var o=t[n];e[o]=this[o]}return e},e.exports=r},451:function(e,t,n){e.exports=n(452)},452:function(e,t,n){!function(){var n=Array.prototype.forEach,r=Object.prototype.hasOwnProperty,o=Array.prototype.slice,i=0;var s,a={keys:Object.keys||function(e){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("keys() called on a non-object");var t,n=[];for(t in e)e.hasOwnProperty(t)&&(n[n.length]=t);return n},uniqueId:function(e){var t=++i+"";return e?e+t:t},has:function(e,t){return r.call(e,t)},each:function(e,t,r){if(null!=e)if(n&&e.forEach===n)e.forEach(t,r);else if(e.length===+e.length)for(var o=0,i=e.length;o<i;o++)t.call(r,e[o],o,e);else for(var s in e)this.has(e,s)&&t.call(r,e[s],s,e)},once:function(e){var t,n=!1;return function(){return n?t:(n=!0,t=e.apply(this,arguments),e=null,t)}}};s={on:function(e,t,n){return c(this,"on",e,[t,n])&&t?(this._events||(this._events={}),(this._events[e]||(this._events[e]=[])).push({callback:t,context:n,ctx:n||this}),this):this},once:function(e,t,n){if(!c(this,"once",e,[t,n])||!t)return this;var r=this,o=a.once((function(){r.off(e,o),t.apply(this,arguments)}));return o._callback=t,this.on(e,o,n)},off:function(e,t,n){var r,o,i,s,l,u,p,d;if(!this._events||!c(this,"off",e,[t,n]))return this;if(!e&&!t&&!n)return this._events={},this;for(l=0,u=(s=e?[e]:a.keys(this._events)).length;l<u;l++)if(e=s[l],i=this._events[e]){if(this._events[e]=r=[],t||n)for(p=0,d=i.length;p<d;p++)o=i[p],(t&&t!==o.callback&&t!==o.callback._callback||n&&n!==o.context)&&r.push(o);r.length||delete this._events[e]}return this},trigger:function(e){if(!this._events)return this;var t=o.call(arguments,1);if(!c(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&u(n,t),r&&u(r,arguments),this},stopListening:function(e,t,n){var r=this._listeners;if(!r)return this;var o=!t&&!n;for(var i in"object"==typeof t&&(n=this),e&&((r={})[e._listenerId]=e),r)r[i].off(t,n,this),o&&delete this._listeners[i];return this}};var l=/\s+/,c=function(e,t,n,r){if(!n)return!0;if("object"==typeof n){for(var o in n)e[t].apply(e,[o,n[o]].concat(r));return!1}if(l.test(n)){for(var i=n.split(l),s=0,a=i.length;s<a;s++)e[t].apply(e,[i[s]].concat(r));return!1}return!0},u=function(e,t){var n,r=-1,o=e.length,i=t[0],s=t[1],a=t[2];switch(t.length){case 0:for(;++r<o;)(n=e[r]).callback.call(n.ctx);return;case 1:for(;++r<o;)(n=e[r]).callback.call(n.ctx,i);return;case 2:for(;++r<o;)(n=e[r]).callback.call(n.ctx,i,s);return;case 3:for(;++r<o;)(n=e[r]).callback.call(n.ctx,i,s,a);return;default:for(;++r<o;)(n=e[r]).callback.apply(n.ctx,t)}};a.each({listenTo:"on",listenToOnce:"once"},(function(e,t){s[t]=function(t,n,r){return(this._listeners||(this._listeners={}))[t._listenerId||(t._listenerId=a.uniqueId("l"))]=t,"object"==typeof n&&(r=this),t[e](n,r,this),this}})),s.bind=s.on,s.unbind=s.off,s.mixin=function(e){return a.each(["on","once","off","trigger","stopListening","listenTo","listenToOnce","bind","unbind"],(function(t){e[t]=this[t]}),this),e},e.exports&&(t=e.exports=s),t.BackboneEvents=s}()},46:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(1),o=n.n(r),i=n(443),s=n.n(i),a=n(19);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?d(e):t}(this,p(t).call(this,e))).onMouseSelection=n.onMouseSelection.bind(d(n)),n.onSubpartSelected=n.onSubpartSelected.bind(d(n)),n.getOnClick=n.getOnClick.bind(d(n)),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"onMouseSelection",value:function(e){e.detail&&this.props.setProps({mouseSelection:e.detail})}},{key:"onSubpartSelected",value:function(e){e.detail&&this.props.setProps({subpartSelected:e.detail})}},{key:"shouldComponentUpdate",value:function(e,t){var n=this.props,r=n.showLineNumbers,o=n.wrapAminoAcids,i=n.charsPerLine,s=n.toolbar,a=n.search,l=n.sequence,c=n.title,u=n.sequenceMaxHeight,p=n.badge,d=n.coverage,h=n.coverageClicked,f=n.selection,g=n.legend;return r!==e.showLineNumbers||o!==e.wrapAminoAcids||i!==e.charsPerLine||s!==e.toolbar||a!==e.search||c!==e.title||u!==e.sequenceMaxHeight||p!==e.badge||h!==e.coverageClicked||g!==e.legend||l!==e.sequence||f.length!==e.selection.length||!!Object.keys(f).some((function(t){return f[t]!==e.selection[t]}))||!(d.length===e.coverage.length&&!d.some((function(t,n){return Object.keys(t).some((function(t){return d[n][t]!==e.coverage[n][t]}))})))}},{key:"getOnClick",value:function(e){var t=this;return function(n){t.props.setProps({coverageClicked:e})}}},{key:"render",value:function(){var e=this,t={id:this.props.id,selection:this.props.selection,setProps:this.props.setProps,showLineNumbers:this.props.showLineNumbers,wrapAminoAcids:this.props.wrapAminoAcids,charsPerLine:this.props.charsPerLine,toolbar:this.props.toolbar,search:this.props.search,title:this.props.title,sequenceMaxHeight:this.props.sequenceMaxHeight,badge:this.props.badge,onMouseSelection:this.onMouseSelection,onSubpartSelected:this.onSubpartSelected,legend:this.props.legend},n=this.props.coverage.map((function(t,n){return Object.assign({},t,{onclick:e.getOnClick(n)})}));return o.a.createElement(s.a,c({sequence:this.props.sequence,coverage:n},t))}}])&&u(n.prototype,r),i&&u(n,i),t}(r.Component);f.defaultProps=a.b,f.propTypes=a.c}}]);