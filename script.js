/*-------*/
const slider = document.querySelector("#range");
slider.oninput = () =>{
    document.querySelector("#range-value").innerHTML = slider.value;
}
/*-------*/



/*-------*/
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers   = '0123456789';
const space     = '    ';
const symbol    = '!@#$%^&*()_+-=';
/*-------*/

copyTextFromInput = () =>{
    const inputs = document.querySelector("#output");
    inputs.select();
    document.execCommand('copy');
}

create = () =>{
    const ck1 = document.querySelector("#ck1");
    const ck2 = document.querySelector("#ck2");
    const ck3 = document.querySelector("#ck3");
    const ck4 = document.querySelector("#ck4");
    const ck5 = document.querySelector("#ck5");
    const ck6 = document.querySelector("#ck6");
    const slider = document.querySelector("#range");

    let charset = '';
    let password = '';
    
    if(ck1.checked == 1){
        charset+=uppercase;
    }
    if(ck2.checked == 1){
        charset+=lowercase;
    }    
    if(ck3.checked == 1){
        charset+=numbers;
    }
    if(ck4.checked == 1){
        charset+=symbol;
    }
    if(ck6.checked == 1){
        charset+=space;
    }
    for(let i=0;i<parseInt(slider.value);i++){
        let indexNumber = Math.floor(Math.random()*charset.length);
        password+=charset[indexNumber];
    }
    document.querySelector("#output").value = password;
}