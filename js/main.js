let v = document.getElementById("h");
function submit() {
    let content = document.getElementById("content").value;
    let border_width = document.getElementById("border-width").value;
    let BorderColor = document.getElementById("BorderColor").value;
    let BackgroundColor = document.getElementById("BackgroundColor").value;
    let width = document.getElementById("width").value;
    let radius_topright = document.getElementById("radius-topright").value;
    let radius_topleft = document.getElementById("radius-topleft").value;
    let radius_bottomright = document.getElementById("radius-bottomright").value;
    let radius_bottomleft = document.getElementById("radius-bottomleft").value;

    if (content == "" || content == "") {
        v.innerHTML = "Hello World"
    }
    else {
        v.innerHTML = content;
    }
    v.style.width = width + 'px';
    v.style.borderWidth = border_width + 'px';
    v.style.borderColor = BorderColor;
    v.style.backgroundColor = BackgroundColor;
    v.style.borderTopLeftRadius = radius_topleft + 'px';
    v.style.borderTopRightRadius = radius_topright + 'px';
    v.style.borderBottomRightRadius = radius_bottomright + 'px';
    v.style.borderBottomLeftRadius = radius_bottomleft + 'px';


    const para = document.querySelector('h1');
    const compStyles = window.getComputedStyle(para);
    width = compStyles.getPropertyValue('border-width');
    BorderColor = compStyles.getPropertyValue('border-color');
    BackgroundColor = compStyles.getPropertyValue('background-color');
    width = compStyles.getPropertyValue('width');
    let radius = compStyles.getPropertyValue('border-radius');
    let area = document.getElementById("area");
    area.innerHTML = `width: ${width};
border-width: ${width};
background-color: ${BackgroundColor};
border-color: ${BorderColor};
border-style: solid;    
border-radius: ${radius};`;
}

function copy(){
    let copyText = document.getElementById("area");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

function df(id, id2){
    let fieldColor = document.getElementById(id).value;
    let fieldText = document.getElementById(id2);
    fieldText.value = fieldColor;
}