// Typing effect
const phrases=["Developing the next-gen AI & Web experiences","Learning. Building. Shipping.","B.Tech AIML "];
let p=0,c=0,del=false;const el=document.getElementById('typed');
function type(){
  const t=phrases[p];
  el.textContent=t.slice(0,c);
  if(!del&&c<t.length){c++;setTimeout(type,60)}
  else if(!del){del=true;setTimeout(type,1800)}
  else if(c>0){c--;setTimeout(type,30)}
  else{del=false;p=(p+1)%phrases.length;setTimeout(type,300)}
}
type();

// Mobile menu
const burger=document.getElementById('burger'),links=document.getElementById('links');
burger.onclick=()=>links.classList.toggle('open');
links.querySelectorAll('a').forEach(a=>a.onclick=()=>links.classList.remove('open'));

// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(s=>io.observe(s));

// Active nav link
const secs=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{
  let cur=secs[0].id;
  secs.forEach(s=>{if(scrollY>=s.offsetTop-140)cur=s.id});
  links.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
});

// Contact form -> opens email app addressed to Arjun
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const n=name.value,em=email.value,m=message.value;
  const subject=encodeURIComponent('Message from '+n+' via Skyroot');
  const body=encodeURIComponent(m+'\n\nFrom: '+n+' ('+em+')');
  location.href='mailto:arjunmaharana5171@gmail.com?subject='+subject+'&body='+body;
});

document.getElementById('year').textContent=new Date().getFullYear();
