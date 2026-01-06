var isExpanded = false;

function paragraph() {

    var shortpara = 'My name is abdul rafay this is my best assigne....' +
        '  <a href="javascript:void(0);" onclick="paragraph();"><em>Click for more</em></a>';

    var fullpara = 'assignemt in JavaScript <a href="javascript:void(0);" onclick="paragraph();"<em>Click for Less </em> </a>'


    if (isExpanded === false) {
        document.getElementById("paragraph").innerHTML = fullpara
        isExpanded = true;
    } else {
        document.getElementById("paragraph").innerHTML = shortpara
        isExpanded = false
    }
}


