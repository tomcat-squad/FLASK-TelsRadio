const toggleNaik=document.querySelector(".toggle-naik");if(document.documentElement.clientWidth<800){function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?toggleNaik.style.display="block":toggleNaik.style.display="none"}window.onscroll=function(){scrollFunction()},toggleNaik.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})}const RenderBerita=document.querySelector("#renderberita"),RenderTerkini=document.querySelector("#berita-terkini-render"),RenderTrending=document.querySelector("#render-trending");fetch("https://api-tomcatsquad.herokuapp.com/api/v1/news/").then(e=>e.json()).then(e=>{RenderBerita.innerHTML="";let t=[];var n=[],r=[];for(console.log(e.results[0].author),i=0;i<=1;i++)t.push(e.results[i].title),n.push(e.results[i].thumbnail),r.push(e.results[i].url);RenderBerita.innerHTML+=`<div class="berita">\n    <a href="${r[0]}">\n        <img src="${n[0]}" alt="berita">\n        <p>${t[0]}</p>\n    </a>\n</div>`,RenderBerita.innerHTML+=`<div class="berita">\n<a href="${r[1]}">\n    <img src="${n[1]}" alt="berita">\n    <p>${t[1]}</p>\n</a>\n</div>`}),fetch("https://api-tomcatsquad.herokuapp.com/api/v1/news/").then(e=>e.json()).then(e=>{for(RenderTerkini.innerHTML=" ",i=0;i<=4;i++){let t=e.results[i].title,n=e.results[i].thumbnail,r=e.results[i].url,l=e.results[i].description,s=e.results[i].publish,o=e.results[i].author;RenderTerkini.innerHTML+=`<div class="artikel2">\n    <a href="${r}">\n        <img src="${n}" alt="thumbnail">\n        <p>${t}</p>\n        <p>${l}</p>\n        <p>${s+" "+o}</p>\n    </a>\n  </div>`}}),fetch("https://api-tomcatsquad.herokuapp.com/api/v1/news/").then(e=>e.json()).then(e=>{for(RenderTrending.innerHTML=" ",i=5;i<=9;i++){let t=e.results[i].title,n=e.results[i].thumbnail,r=e.results[i].url,l=e.results[i].publish,s=e.results[i].description,o=e.results[i].author;RenderTrending.innerHTML+=`<div class="site">\n    <a href="${r}">\n        <img src="${n}" alt="thumbnail">\n        <p>${t}</p>\n        <p>${s}</p>\n        <p>${l+" "+o}</p>\n    </a>\n</div>`}});const telsStreamRender=document.querySelector("#telstream-render");fetch("https://api-tomcatsquad.herokuapp.com/api/v1/youtube/?channel_name=Tels%20Stream").then(e=>e.json()).then(e=>{for(telsStreamRender.innerHTML="",i=0;i<=2;i++){let t=e.results[i].url;telsStreamRender.innerHTML+=`\n    <iframe width="853" height="480" src="https://www.youtube.com/embed/${t}" frameborder="0"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n    allowfullscreen></iframe>`}});