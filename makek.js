const my = () => {

    let data = document.getElementById("first-field").value;
    document.getElementById("M").innerHTML = data

    let s = document.getElementById("s-field").value;
    document.getElementById("E").innerHTML = s

    let t = document.getElementById("t-field").value;
    document.getElementById("H").innerHTML = t

    let f = document.getElementById("f-field").value;
    document.getElementById("S").innerHTML = f

    let sum= (+data)+(+s)+(+t)+(+f)
    // console.log(sum)
    document.getElementById("Total").innerHTML= sum
}
const info = () => {
    let a = document.getElementById("first-field").value;
    let b = document.getElementById("s-field").value;
    let c = document.getElementById("t-field").value;
    let d = document.getElementById("f-field").value;
   
    
    if (a == "" || b == "" || c == "" || d == "") {
        alert("all field are required")
    }
    else if (a > 100 || b > 80 || c > 100 || d > 80) {
        alert("enter vailid number Math=100, english=80, hindi=100, science=80")
    }
    else if (isNaN(a || b || c || d)) {
        alert("Alphabet is not accept")
    }
       else {
        const show = document.getElementById("p1");
        show.style.display = "block"
    }

    //  if (sub1>33 || sub2>33|| sub3>33 || sub4>33) {
    //     document.getElementById("pass").innerHTML="Pass"
    //  } else{
    //     document.getElementById("pass").innerHTML="Fail"
    //  }

}

