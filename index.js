let button =document.getElementById("btn");
button.addEventListener("click" , function(){
const gram=parseInt(document.getElementById("grams").value);
const type=document.getElementById("type").value;
if(gram===""|| isNaN(gram)){
    document.getElementById("grams").focus();
    document.getElementById("error").innerHTML="please provide a valid  gram";
    document.getElementById("result").innerHTML="";
}
else{
    document.getElementById("error").innerHTML="";
    switch(type){
        case "pounds":
            convert_pounds(gram);
            break;
            case "kilograms":
                convert_kilograms(gram);
                break;
                case "ounces":
                    convert_ounces(gram);
                    break;
                    case "stones":
                        convert_stones(gram);
                        break;
                        case "tonne":
                            convert_tonne(gram);
                            break;
                            default:
                                alert("Error");         

    }
    

    function convert_pounds(gram){
        let rate=0.0022, pounds;
        pounds=gram*rate;
        document.getElementById("result").innerHTML=gram + "grams=" +
        pounds.toFixed(4) + "pounds.";
    }
    function convert_kilograms(gram){
        let rate=0.001, kilograms;
        kilograms=gram*rate;
        document.getElementById("result").innerHTML=gram + "grams=" +
        kilograms.toFixed(4) + "kg.";
    }
    function convert_ounces(gram){
        let rate=0.035274,ounces;
        ounces=gram*rate;
        document.getElementById("result").innerHTML=gram + "grams=" +
        ounces.toFixed(4) + "ounces.";
    }
    function convert_stones(gram){
        let rate=0.00015747, stones;
        stones=gram*rate;
        document.getElementById("result").innerHTML=gram + "grams=" +
        stones.toFixed(4) + "stones.";
    }
    function convert_tonne(gram){
        let rate=1000000, tonne;
        tonne=gram*rate;
        document.getElementById("result").innerHTML=gram + "grams=" +
        tonne.toFixed(4) + "Tonne.";
    }
}
});