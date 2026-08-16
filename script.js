const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");
const questionText = document.getElementById("questionText");

musicBtn.addEventListener("click", async () => {
  try {
    if (song.paused) {
      await song.play();
      musicBtn.innerHTML = "❚❚ <span>Pause our song</span>";
    } else {
      song.pause();
      musicBtn.innerHTML = "♪ <span>Play our song</span>";
    }
  } catch {
    alert("Add your legally obtained 'bairan.mp3' file to this folder, then press the music button again.");
  }
});

yesBtn.addEventListener("click", () => {
  finalMessage.classList.add("show");
  questionText.textContent = "That smile is officially my favourite thing. ❤️";
  burstHearts();
  finalMessage.scrollIntoView({behavior:"smooth", block:"center"});
});

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("touchstart", (e) => { e.preventDefault(); moveNo(); });

function moveNo(){
  const x = Math.random() * 180 - 90;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function makeHeart(){
  const h=document.createElement("div");
  h.className="float-heart";
  h.textContent=["♥","♡","❤","💗","🌸"][Math.floor(Math.random()*5)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(12+Math.random()*20)+"px";
  h.style.animationDuration=(5+Math.random()*6)+"s";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(()=>h.remove(),12000);
}
setInterval(makeHeart,700);

function burstHearts(){
  for(let i=0;i<30;i++){
    setTimeout(()=>{
      const h=document.createElement("div");
      h.className="float-heart";
      h.textContent="💖";
      h.style.left=(35+Math.random()*30)+"vw";
      h.style.bottom="30vh";
      h.style.fontSize=(16+Math.random()*25)+"px";
      h.style.animationDuration=(2+Math.random()*2)+"s";
      document.querySelector(".hearts").appendChild(h);
      setTimeout(()=>h.remove(),5000);
    },i*60);
  }
}
