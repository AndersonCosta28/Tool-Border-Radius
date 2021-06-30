let v = document.getElementById("h");
function submit() {
    const unit = displayRadioValue();
    let content = document.getElementById("content").value;
    let border_width = convertValueUnit(document.getElementById("border-width").value,String(unit));
    let border_style = document.getElementById("style").value
    let BorderColor = document.getElementById("BorderColor").value;
    let BackgroundColor = document.getElementById("BackgroundColor").value;
    let width = convertValueUnit(document.getElementById("width").value,String(unit));
    let radius_topright = convertValueUnit(document.getElementById("radius-topright").value,String(unit));
    let radius_topleft = convertValueUnit(document.getElementById("radius-topleft").value,String(unit));
    let radius_bottomright = convertValueUnit(document.getElementById("radius-bottomright").value,String(unit));
    let radius_bottomleft = convertValueUnit(document.getElementById("radius-bottomleft").value,String(unit));

    if (content == "" || content == "") {
        v.innerHTML = "Hello World"
    }
    else {
        v.innerHTML = content;
    }

    v.style.width = width + String(unit);
    v.style.borderStyle = border_style;
    v.style.borderWidth = border_width + String(unit);
    v.style.borderColor = BorderColor;
    v.style.backgroundColor = BackgroundColor;
    v.style.borderTopLeftRadius = radius_topleft + String(unit);
    v.style.borderTopRightRadius = radius_topright + String(unit);
    v.style.borderBottomRightRadius = radius_bottomright + String(unit);
    v.style.borderBottomLeftRadius = radius_bottomleft + String(unit);


    const para = document.querySelector('h1');
    const compStyles = window.getComputedStyle(para);
    border_width = compStyles.getPropertyValue('border-width');
    BorderColor = compStyles.getPropertyValue('border-color');
    BackgroundColor = compStyles.getPropertyValue('background-color');
    width = compStyles.getPropertyValue('width');
    let radius = compStyles.getPropertyValue('border-radius');

    let area = document.getElementById("area");
    let text_Widht = `width: ${String(width).replace("px", String(unit))};`;
    let text_BorderWidht = `border-width: ${String(border_width).replace("px", String(unit))};`;
    let text_backgroundColor = `background-color: ${BackgroundColor};`;
    let text_borderColor = `border-color: ${BorderColor};`;
    let text_borderStyle = `border-style: ${border_style};`;
    let text_borderRadius = `border-radius: ${converterUnit(radius, String(unit))};`;
    area.innerHTML = text_Widht + '\n' + text_borderStyle + '\n' + text_BorderWidht + '\n' + text_borderColor + '\n' + text_backgroundColor + '\n' + text_borderRadius;
}

function checkStyle(id, id2) {
    const styleList = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'];
    const word = document.getElementById(id).value;
    const idHelp = document.getElementById(id2);
    function existValue() {
        for (let search of styleList) {
            if (word.includes(search)) {
                return true;
            }
        }
        return false;
    }
    if (existValue()) {
        idHelp.innerHTML = "";
    }
    else {
        idHelp.innerHTML = "Invalid value";
    }
}

function copy() {
    let copyText = document.getElementById("area");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

function df(id, id2) {
    let fieldColor = document.getElementById(id).value;
    let fieldText = document.getElementById(id2);
    fieldText.value = fieldColor;
}
function displayRadioValue() {
    let ele = document.getElementsByName('unitmeasure');
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i].value;
    }
}

function converterUnit(valueRadius, newUnit) {
    let phrase = valueRadius;
    let myArray = phrase.split(" ");
    let newPhrase = [];
    i = 0;
    for (let n of myArray) {
        // console.log(n.replace("px","rem"))
        newPhrase[i] = n.replace("px", newUnit)
        i++;
    }
    let newPhrase2 = newPhrase.join(" ")
    return newPhrase2;
}

function convertValueUnit(value,unit){
    let newValue;
    if(unit == "px"){
        newValue = value;
    }
    else if(unit == "rem"){
        newValue = value*0.0625;
    }
    return newValue
}

function clickStyle(id){
    let field = document.getElementById(id);
    let old_Value = field.value;
    field.innerHTML = "";
    field.value = "";
}