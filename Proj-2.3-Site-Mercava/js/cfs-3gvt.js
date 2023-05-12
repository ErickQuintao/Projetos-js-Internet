//cfs-3gvt.html



document.addEventListener("DOMContentLoaded",
 function() {
  let btn1 = document.querySelector(".des");
  let btn2 = document.querySelector(".infad");
  let p1 = document.querySelector(".descricao1");
  let p2 = document.querySelector(".informacao");
  function funcDes() {
    p1.style.display = "block";
    p2.style.display = "none";
  }
   function funcInf(){
    p2.style.display = "block";
    p1.style.display = "none";
   }
  btn1.addEventListener("click", funcDes);
  btn2.addEventListener("click", funcInf);
});