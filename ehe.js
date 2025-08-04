

var elA= function(element){
    if(element.charAt(0)==='#'){
       return document.querySelector(element);
    }
}
var elB= function(element){
    if(element.charAt(0)==='.'){
       return document.querySelector(element);
    }
}
var elC= function(element){
    if(element.charAt(0)==='.'){
       return document.querySelectorAll(element);
    }
}

var tip= elC('.persen'),
theNum,
inpCus=elA('#custom'),
textCus=elB('.p6'),
theCus,
number,
inpBill=elA('#inbil'),
inpPer=elA('#inpep'),
btnReset=elB('.btn-reset'),
hasilA,
hasilB,
t,
tipNum,
nganu,
dollar1=elA('#d1'),
dollar2=elA('#d2');

var tipKlik= function(){
    theNum= this.getAttribute('data-num');
    theNum=parseFloat(theNum);
    console.log(theNum)
    textCus.style.display='block'
    inpCus.value=''
    inpCus.style.backgroundColor='hsla(0, 0%, 100%, 0)';
    
    
}
tip.forEach(function(item){
    item.addEventListener('click', function (){
        tip.forEach(function(item){
            item.classList.remove("active");  
            
        })
        item.classList.add("active");  
    })
    // kok pakai onclick nda bisa ya?
    // item.onclick= function (){
    //     tip.forEach(function(item){
    //     item.classList.remove("active");  
            
    // })
    // item.classList.add("active"); 
    // }

     
})

var inpKlik=function(){
    theCus=elA('#custom').value;
    theCus=parseFloat(theCus)
    console.log(theCus)
}

for(i=0, l=tip.length; i<l; i++){
    tip[i].onclick=tipKlik  
}
// var away= function(){
//     tip.classList.toggle('show')
// }

var ops= function(){
    
    inpBill=elA('#inbil').value
    inpPer=elA('#inpep').value
    t=inpCus.value;
    inpBill=parseFloat(inpBill)
    inpPer=parseFloat(inpPer)
    t=parseFloat(t)
    nganu=t||theNum
    hasilA= inpBill*nganu/100/inpPer
    console.log(inpBill)
    console.log(`${inpBill}*${nganu}/100/${inpPer} = ${hasilA}`)
    return hasilA
}
var ops2= function(){
    amount= hasilA
    hasilB=amount*100/nganu+amount
    console.log(hasilB)
    console.log(t)
    return hasilB
}
var btnCus= function(){
    textCus.style.display='none'
    inpCus.style.backgroundColor='lightBlue'
    for(i=0, l=tip.length; i<l; i++){ 
        tip[i].style.backgroundColor='white'
   }
}

elB('.reset').onclick=function() {
    window.location = window.location;}

inpCus.onclick= btnCus
btnReset.onclick= function(){
    elB('.start').style.display='none'
    elB('.reset').style.display='block'
    btnReset.style.backgroundColor='lightgreen'
    dollar1.innerHTML='$'+ ops(hasilA).toFixed(2);
    dollar2.innerHTML='$'+ ops2(hasilB).toFixed(2);
    if(!isFinite(hasilA|| hasilB)){
        if (isNaN(hasilA)|| isNaN(hasilB)) {
            dollar1.innerHTML='upss...'
            dollar2.innerHTML='ehe...'
        }else{
            dollar1.innerHTML='broke!'
            dollar2.innerHTML='broke!'
            elB('.alert').style.display='block'
            elB('.box-pep').style.borderColor='red'
        }
    }
}

