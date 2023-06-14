let signup_btn = document.querySelector(".btn-2");
let login_btn = document.querySelector(".btn-1");
let logout_btn = document.querySelector(".btn-3");

let flag = localStorage.getItem("status")

// if(flag=="true"){
//    signup_btn.setAttribute("id", "signup_btn_true");
//    login_btn.setAttribute("id", "login_btn_true");
//    logout_btn.setAttribute("id", "logout_btn_false");
// }


logout_btn.addEventListener("click", ()=>{
    flag="false";
    confirm("Do you really want to logout");
    // localStorage.setItem("status",JSON.stringify(flag));
    // flag = localStorage.getItem("status")
    // if(flag=="false" || flag==false){
    //     signup_btn.setAttribute("id", "signup_btn_false");
    //     login_btn.setAttribute("id", "login_btn_false");
    //     logout_btn.setAttribute("id", "logout_btn_true");
    //  }
})
