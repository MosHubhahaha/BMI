let circle=document.querySelector('.circle');
let showbtn=document.querySelector('.showbtn')



circle.addEventListener('click',()=>{
    window.scrollTo(0,0)
})

function showicon(){
    if(window.scrollY<200){
        circle.style.display="none";
    }else{
        circle.style.display="block";
    }
}
window.addEventListener('scroll',showicon)

function showresult(){
    let weight =document.querySelector('#weight');
    let height =document.querySelector('#height');
    let bmi=document.querySelector('#bmi');
    let result=document.querySelector('#result');


    let weightValue=parseFloat(weight.value);
    let heightValue=parseFloat(height.value);

    let bmiValue=weightValue/(heightValue/100)**2
    bmi.value=bmiValue.toFixed(2);

    if(isNaN(weightValue) || isNaN(heightValue) || heightValue<=0 || weightValue<=0){
        alert("กรุณาป้อนตัวเลขด้วยครับ")
        showbtn.setAttribute('disabled',true)
        bmi.value = "กรุณากรอกข้อมูลให้ถูกต้องด้วยครับ!";
        weight.value="";
        height.value="";
        result.value = "";
        return;
    }else{
        showbtn.removeAttribute('disabled')
    }

    let resultMessage;
    if (bmiValue >= 30) {
        resultMessage = "อ้วนมาก";
    } else if (bmiValue >= 25) {
        resultMessage = "อ้วน";
    } else if (bmiValue >= 18.5) {
        resultMessage = "น้ำหนักปกติ เหมาะสม";
    } else {
        resultMessage = "ผอมเกินไป";
    }

    // Display the result message
    result.value = resultMessage;
}

function resetValue(){
    weight.value="";
    height.value="";
    bmi.value="";
    result.value="";
    showbtn.setAttribute('disabled',true)
}

weight.addEventListener('input', () => {
    // Validate on input change
    if (!isNaN(parseFloat(weight.value)) && weight.value.trim() !== "" && !isNaN(parseFloat(height.value)) && height.value.trim() !== "" && parseFloat(height.value) > 0) {
        showbtn.removeAttribute('disabled');
        bmi.style.color = "";
    } else {
        showbtn.setAttribute('disabled', true);
        result.value = "";
    }
});

height.addEventListener('input', () => {
    // Validate on input change
    if (!isNaN(parseFloat(weight.value)) && weight.value.trim() !== "" && !isNaN(parseFloat(height.value)) && height.value.trim() !== "" && parseFloat(height.value) > 0) {
        showbtn.removeAttribute('disabled');
        bmi.style.color = "";
    } else {
        showbtn.setAttribute('disabled', true);
        bmi.value = "กรุณากรอกข้อมูลให้ถูกต้องด้วยครับ!";
    }
});
