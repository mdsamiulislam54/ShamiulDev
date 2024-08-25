// var outline = document.querySelector('.outline')
// var dot = document.querySelector('.dot')
// console.log(outline);

// document.addEventListener("mouseover",function(e){
//     outline.style.cssText =dot.style.cssText ='left :'+ e.clientX +'px; top :' +e.clientY +'px;';


    
// })

const cods ={x:0,y:0}
const circle =document.querySelectorAll('.circle')
window.addEventListener("mousemove", function(e){
    cods.x=e.clientX;
    cods.y = e.clientY
    animationCircle()
    console.log(cods);


   function animationCircle(){
    let x = cods.x
    let y = cods.y
    circle.forEach( function(circle,index){
        circle.style.left =cods.x -12 + 'px'
        circle.style.top = cods.y -12 + 'px';


        circle.x = x
        circle.y = y
        

        const nextCircle = circle[index + 1]|| circle[0];
        x +=[nextCircle.x -x]* 0.3;
        y +=[nextCircle.y - y]*0.3;

    })
   }
})