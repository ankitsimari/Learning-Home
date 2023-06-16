let signup_btn = document.querySelector(".btn-2");
let login_btn = document.querySelector(".btn-1");
let logout_btn = document.querySelector(".btn-3");

let flag = localStorage.getItem("status")



// if(flag=="true"){
//    signup_btn.setAttribute("id", "signup_btn_true");
//    login_btn.setAttribute("id", "login_btn_true");
//    logout_btn.setAttribute("id", "logout_btn_false");
// }


// logout_btn.addEventListener("click", ()=>{
//     flag=false;
//     confirm("Do you really want to logout");
//     localStorage.setItem("status",JSON.stringify(flag));
//     flag = localStorage.getItem("status")
//     if(flag=="false" || flag==false){
//         signup_btn.setAttribute("id", "signup_btn_false");
//         login_btn.setAttribute("id", "login_btn_false");
//         logout_btn.setAttribute("id", "logout_btn_true");
//      }
// })

let data=[
    {name:"Harry Das ",image:"https://media.istockphoto.com/id/1279564700/vector/a-portrait-of-a-young-black-male-character-wearing-a-blank-hoodie-streetwear-fashion.jpg?s=612x612&w=0&k=20&c=U8QgrucnFB6Hdh7o5gWBZ-x91RcVDfOPKT0sOzvmQVk=",age:23,text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eum tempore quaerat nam repellendus et?"},
    {name:"Carry Hob",age:22,image:"https://media.istockphoto.com/id/1299788393/vector/a-portrait-of-a-handsome-teenage-male-black-character-wearing-a-box-fade-hairstyle-modern.jpg?s=612x612&w=0&k=20&c=N8rqDyyWC7xU5hGvzVMRxji417tQZ39K4P7jTn9NSx8=",text:"Lorem, elit. Itaque animi quas, nesciunt quos iure quo molestias vel delectus alias illo laudantium excepturi sint, minima voluptates mollitia labore iste! Iusto, mollitia."},
    {name:"Mat Cook",age:26,image:"https://media.istockphoto.com/id/1293538263/vector/gen-z-lifestyle-portrait-a-young-female-character-wearing-trendy-clothes-and-bright-blue.jpg?s=612x612&w=0&k=20&c=Q-VKaW5BCYMYXkH1jBXavrrU5pIO1YSPL8RxvFU0ECM=",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit eligendi veritatis consequuntur dolorum temporibus neque qui expedita rem iusto tempore!"},
    {name:"panat Hook",age:26,image:"https://media.istockphoto.com/id/1346033293/vector/a-young-male-asian-character-talking-on-the-phone-a-millennial-lifestyle.jpg?s=612x612&w=0&k=20&c=SeICgpERrT8wraVPDMNwlzXsp1-4TL7OluXnCDxMHEM=",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex a atque iste, architecto asperiores dignissimos, sunt veritatis placeat minus nostrum expedita quasi voluptate magni ducimus?"},
    {name:"Jhon Mood",age:25,image:"https://media.istockphoto.com/id/1279564700/vector/a-portrait-of-a-young-black-male-character-wearing-a-blank-hoodie-streetwear-fashion.jpg?s=612x612&w=0&k=20&c=U8QgrucnFB6Hdh7o5gWBZ-x91RcVDfOPKT0sOzvmQVk=",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eum tempore quaerat nam repellendus et?"},
    {name:"mony sood",age:25,image:"https://media.istockphoto.com/id/1291416607/vector/a-young-female-character-listening-to-music-calm-and-relaxing-atmosphere-stress-relief.jpg?s=612x612&w=0&k=20&c=Mk62bQ15uIzXWBy_NWHymPaeb-_fg53zqP8HRdeS8Qs=",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit eligendi veritatis consequuntur dolorum temporibus neque qui expedita rem iusto tempore!"},
    {name:"Camon Dark",age:25,image:"https://media.istockphoto.com/id/1496908371/vector/a-young-african-character-spacing-out-with-a-loading-circle-spinning-above-their-head-low.jpg?s=612x612&w=0&k=20&c=aYHiYK6nHGolRq-dj_bgMFiugDK2ms52hLuZ9FFJPkI=",text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex a atque iste, architecto asperiores dignissimos, sunt veritatis placeat minus nostrum expedita quasi voluptate magni ducimus?"},
  ]
  
  const img1 = document.getElementById("pimg1");
  const img2 = document.getElementById("pimg2");
  const img3 = document.getElementById("pimg3");
  
  
  const name1 = document.getElementById("pname1") ;  
  const name2 = document.getElementById("pname2") ;  
  const name3 = document.getElementById("pname3") ;  

  const para1 = document.getElementById("para1") ;  
  const para2 = document.getElementById("para2") ;  
  const para3 = document.getElementById("para3") ;  
  
  let i=0;

  name1.innerText=data[i].name +","+data[i].age;
  name2.innerText=data[i+1].name+","+data[i+1].age;
  name3.innerText=data[i+2].name+","+data[i+2].age;

  img1.setAttribute("src", data[i].image)
  img2.setAttribute("src", data[i+1].image)
  img3.setAttribute("src", data[i+2].image)


  para1.innerText=data[i].text;
  para2.innerText=data[i+1].text;
  para3.innerText=data[i+2].text;



  setInterval(() => {
    i++;
    if(i==data.length-2){
      i=0
    }
  
    name1.innerText=data[i].name +","+data[i].age;
    name2.innerText=data[i+1].name+","+data[i+1].age;
    name3.innerText=data[i+2].name+","+data[i+2].age;
  
    img1.setAttribute("src", data[i].image)
    img2.setAttribute("src", data[i+1].image)
    img3.setAttribute("src", data[i+2].image)

    para1.innerText=data[i].text;
    para2.innerText=data[i+1].text;
    para3.innerText=data[i+2].text;
    
  }, 5000);


  let next_btn = document.getElementById("next");

  next_btn.addEventListener("click",()=>{
    i++;
    if(i>data.length-3){
      i=0;
    }

    name1.innerText=data[i].name +","+data[i].age;
    name2.innerText=data[i+1].name+","+data[i+1].age;
    name3.innerText=data[i+2].name+","+data[i+2].age;
  
    img1.setAttribute("src", data[i].image)
    img2.setAttribute("src", data[i+1].image)
    img3.setAttribute("src", data[i+2].image)

    para1.innerText=data[i].text;
    para2.innerText=data[i+1].text;
    para3.innerText=data[i+2].text;
  })

  let prev_btn=document.getElementById("prev");

  prev_btn.addEventListener("click",()=>{
    i--;
    if(i<0){
      i=data.length-1;
    }

    name1.innerText=data[i].name +","+data[i].age;
    name2.innerText=data[i+1].name+","+data[i+1].age;
    name3.innerText=data[i+2].name+","+data[i+2].age;
  
    img1.setAttribute("src", data[i].image)
    img2.setAttribute("src", data[i+1].image)
    img3.setAttribute("src", data[i+2].image)

    para1.innerText=data[i].text;
    para2.innerText=data[i+1].text;
    para3.innerText=data[i+2].text;
  })
  