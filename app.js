const current=document.getElementById("current");
const imgs=document.querySelectorAll(".imgs img");
let opacity=0.4;

imgs[0].style.opacity=opacity;
imgs.forEach(function(img){
	img.addEventListener("click",function(e){
		current.src=e.target.src;
		current.classList.add("fade-in");
		setTimeout(function(){
			current.classList.remove("fade-in")
		},500)
		imgs.forEach(function(img){
			img.style.opacity=1
		})
		e.target.style.opacity=opacity;
	})
})