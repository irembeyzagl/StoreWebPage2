
    var btn1=document.querySelector('#inpt')
    var btn2=document.querySelector('#all')
    var btn3=document.querySelector('#ikea')
    var btn4=document.querySelector('#marcos')
    var btn5=document.querySelector('#caressa')
    var btn6=document.querySelector('#liddy')
    var inpt=document.querySelector('#inpt')
    var spna=document.querySelectorAll('div')
    var div=document.querySelector('#xy')
    console.log(spna[10].innerText)
    let s
    
   //bunda resimler vs gelmiyor

   //SADECE ARAMA KISMI KALDI
   
    btn2.addEventListener('click',e=>{
        div.innerHTML=' '
        var j=` <span id="xy">
        <a href="ürün1.html"><div class="cont1">
            <img src="product-1.jpeg" alt=""><br>
             <span>High Bench Beach
                 <br>$9.99
             </span>  
         </div></a> 
         <a href="ürün2.html"><div class="cont2">
             <img src="78.jpg" alt=""><br>
             <span>Albany Table
                 <br>$79.99
             </span>
         </div></a>
         <a href="ürün3.html"><div class="cont3">
             <img src="product-3.jpeg" alt=""><br>
             <span>Accent Chair
                 <br>$25.99
             </span>
         </div></a>
         <div class="cont4">
             <img src="16.webp" alt=""><br>
             <span>Wooden Table
                 <br>45.99
             </span>
         </div>
         <div class="cont5">
             <img src="19.jpg" alt=""><br>
             <span>Dining Table <br>
                 $6.99
             </span>
         </div>
         <div class="cont6">
             <img src="product-6.jpeg" alt=""><br>
             <span>Sofa Set <br>$69.99</span>
         </div>
         <div class="cont7">
             <img src="product-7.jpg" alt=""><br>
             <span>Modern Bookself <br>$8.99</span>
         </div>
         <div class="cont8">
             <img src="product-8.jpg" alt=""><br>
             <span>Emperor Bed <br>$21.99</span>
         </div>
         <div class="cont9">
             <img src="product-9.jpg" alt=""><br>
             <span>Utopi Sofa <br>$39.99</span>
         </div>
         <div class="cont10">
             <img src="product-10.jpg" alt=""><br>
             <span>Entertaintment Center <br>$29.98</span>
         </div>
         <div class="cont11">
             <img src="product-11.jpeg" alt=""><br>
             <span>Albany Sectional <br>$10.99</span>
         </div>
         <div class="cont12">
             <img src="product-12.jpg" alt=""><br>
             <span>Leather Sofa <br>$9.99</span>
         </div></span>`
         div.innerHTML=j
    })

    btn3.addEventListener('click',e=>{
        div.innerHTML=' '
        var f=` <a href="ürün1.html"><div class="cont1">
        <img src="product-1.jpeg" alt=""><br>
         <span>High Bench Beach
             <br>$9.99
         </span>  
     </div></a>  `
  var d=`
  <div class="cont2">
  <img src="product-11.jpeg" alt=""><br>
  <span>Albany Sectional <br>$10.99</span>
</div>`
  div.innerHTML=f+d
    })

    btn4.addEventListener('click',e=>{
        div.innerHTML=' '
        var o=` <a href="ürün2.html"><div class="cont1">
        <img src="78.jpg" alt=""><br>
        <span>Albany Table
            <br>$79.99
        </span>
    </div></a>
    <div class="cont2">
    <img src="product-7.jpg" alt=""><br>
    <span>Modern Bookself <br>$8.99</span>
</div>
<div class="cont3">
<img src="product-9.jpg" alt=""><br>
<span>Utopi Sofa <br>$39.99</span>
</div>`
  div.innerHTML=o
    })
    btn5.addEventListener('click',e=>{
        div.innerHTML=' '
        var f=`   <a href="ürün3.html"><div class="cont1">
        <img src="product-3.jpeg" alt=""><br>
        <span>Accent Chair
            <br>$25.99
        </span>
    </div></a>
    <div class="cont2">
        <img src="16.webp" alt=""><br>
        <span>Wooden Table
            <br>45.99
        </span>
    </div>
    <div class="cont3">
        <img src="19.jpg" alt=""><br>
        <span>Dining Table <br>
            $6.99
        </span>
    </div> `
  
  div.innerHTML=f
    })
    btn6.addEventListener('click',e=>{
        div.innerHTML=' '
        var f=` <div class="cont1">
        <img src="product-6.jpeg" alt=""><br>
        <span>Sofa Set <br>$69.99</span>
    </div>
    <div class="cont2">
         <img src="product-8.jpg" alt=""><br>
         <span>Emperor Bed <br>$21.99</span>
     </div>
     <div class="cont3">
     <img src="product-10.jpg" alt=""><br>
     <span>Entertaintment Center <br>$29.98</span>
 </div>
 <div class="cont4">
         <img src="product-12.jpg" alt=""><br>
         <span>Leather Sofa <br>$9.99</span>
     </div>`

  div.innerHTML=f
    })

    var btn1=document.querySelector('#xc')
    var ek=document.querySelector('.xt')
    
   
btn1.addEventListener('click',e=>{
    ek.style.backgroundColor='rgb(192, 224, 255)'
    ek.style.width='300px'
    ek.style.height='1000px'
    ek.style.position='fixed'
    ek.style.right='0px'
    ek.style.top='0px'
   ek.innerHTML=`<br><br> <br> <br> <br> <br> <br><br> <br> <br> <br> <br> <br><br> <br> <br> <br> <br> <br><br> <br> <br> <br> <br> <br><br> <br> <br> <br> <br> <br><br> <br> <br> <br>  <i><h2 id="indir">Total Price: $</h2></i>`//+fiyat gelicek
    btn1.addEventListener('click',e=>{
        ek.remove()
    })
    
})