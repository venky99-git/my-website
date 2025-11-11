document.addEventListener('DOMContentLoaded',()=>{
  const giftScene=document.getElementById('giftScene');
  const openGift=document.getElementById('openGift');
  const nameScene=document.getElementById('nameScene');
  const nameInput=document.getElementById('nameInput');
  const enterName=document.getElementById('enterName');
  const bdayMsgScene=document.getElementById('bdayMsgScene');
  const bdayName=document.getElementById('bdayName');
  const toCelebrate=document.getElementById('toCelebrate');
  const carouselScene=document.getElementById('carouselScene');
  const carousel=document.getElementById('carousel');
  const carouselName=document.getElementById('carouselName');
  // 11 user photos as images/photo1.jpg ... photo11.jpg
  const photoCount=11, photos=[];
  for(let i=1;i<=photoCount;i++) photos.push(`images/photo${i}.jpg`);

  openGift.onclick=()=>{
    giftScene.classList.add('hidden');
    nameScene.classList.remove('hidden');
    setTimeout(()=>nameInput.focus(),60);
  };

  enterName.onclick=()=>{
    let name=(nameInput.value||'meghana').trim()||'meghana';
    bdayName.textContent=name;
    carouselName.textContent=name;
    nameScene.classList.add('hidden');
    bdayMsgScene.classList.remove('hidden');
  };

  toCelebrate.onclick=()=>{
    bdayMsgScene.classList.add('hidden');
    carouselScene.classList.remove('hidden');
    showCarousel();
  };

  function showCarousel(){
    carousel.innerHTML="";
    const N=photos.length, radius=350;
    for(let i=0;i<N;i++){
      const angle=(i/N)*Math.PI*2;
      const el=document.createElement('div');
      el.className='panel';
      const x=Math.sin(angle)*radius, z=Math.cos(angle)*radius;
      el.style.transform=`translateX(${x}px) translateZ(${z}px) rotateY(${(i/N)*360}deg)`;
      const img=document.createElement('img');
      img.src=photos[i]; img.alt=`photo${i+1}`;
      el.appendChild(img);
      carousel.appendChild(el);
    }
    // Animate
    let rot=0;
    setInterval(()=>{rot+=0.26;carousel.style.transform=`translateZ(-${radius}px) rotateY(${rot}deg)`;},28);
  }
});