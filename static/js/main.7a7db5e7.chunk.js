(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{13:function(t,e,o){},14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var a=o(0),n=o.n(a),i=o(3),s=o.n(i),r=(o(13),o(4)),u=o(5),h=o(1),l=o(7),c=o(6),d=(o(14),function(t){Object(l.a)(o,t);var e=Object(c.a)(o);function o(t){var a;return Object(r.a)(this,o),(a=e.call(this,t)).state={colors:["red","orange","yellow","green","blue","indigo","violet"],color:0,quotes:[{quote:"Life isn\u2019t about getting and having, it\u2019s about giving and being.",author:"Kevin Kruse"},{quote:"Whatever the mind of man can conceive and believe, it can achieve.",author:"Napoleon Hill"},{quote:"Strive not to be a success, but rather to be of value.",author:"Albert Einstein"},{quote:"Two roads diverged in a wood, and I\u2014I took the one less traveled by, And that has made all the difference.",author:"Robert Frost"},{quote:"I attribute my success to this: I never gave or took any excuse.",author:"Florence Nightingale"},{quote:"You miss 100% of the shots you don\u2019t take.",author:"Wayne Gretzky"},{quote:"The most difficult thing is the decision to act, the rest is merely tenacity.",author:"Amelia Earhart"},{quote:"Every strike brings me closer to the next home run.",author:"Babe Ruth"},{quote:"Definiteness of purpose is the starting point of all achievement.",author:"W. Clement Stone"},{quote:"We must balance conspicuous consumption with conscious capitalism.",author:"Kevin Kruse"},{quote:"Life is what happens to you while you\u2019re busy making other plans.",author:"John Lennon"},{quote:"We become what we think about.",author:"Earl Nightingale"}],quote:0,tweet:"https://twitter.com/intent/tweet?text="},a.setColor=a.setColor.bind(Object(h.a)(a)),a.setQuote=a.setQuote.bind(Object(h.a)(a)),a.setTweet=a.setTweet.bind(Object(h.a)(a)),a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(u.a)(o,[{key:"setColor",value:function(){this.setState({color:Math.floor(Math.random()*this.state.colors.length)})}},{key:"setQuote",value:function(){this.setState({quote:Math.floor(Math.random()*this.state.quotes.length)})}},{key:"setTweet",value:function(){this.setState({tweet:"https://twitter.com/intent/tweet?text="+this.state.quotes[this.state.quote].quote+" - "+this.state.quotes[this.state.quote].author})}},{key:"handleClick",value:function(t){t.preventDefault(),this.setColor(),this.setQuote()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App",style:{borderColor:this.state.colors[this.state.color]}},n.a.createElement("div",{id:"quote-box"},n.a.createElement("div",{id:"parent"},n.a.createElement("h1",{id:"text"},'"',this.state.quotes[this.state.quote].quote,'"',n.a.createElement("br",null),n.a.createElement("br",null)," - ",this.state.quotes[this.state.quote].author))),n.a.createElement("a",{onClick:this.setTweet,id:"tweet-quote",href:this.state.tweet,"data-text":"hello",target:"_blank",rel:"noopener noreferrer"},"Tweet this quote"),n.a.createElement("button",{id:"new-quote",onClick:this.handleClick,style:{backgroundColor:this.state.colors[this.state.color]}},"New Quote"))}}]),o}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,o){t.exports=o(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7a7db5e7.chunk.js.map