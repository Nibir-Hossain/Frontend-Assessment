const colors = ['indigo', 'violet', 'sandybrown', 'limegreen'];
var j = 0;
var val1 = -1, val2 = -1;
function clicked(id) {
    if (val1 == -1) {
        val1 = +document.getElementById(id).innerHTML;
    }
    else if (val2 == -1) {
        val2 = +document.getElementById(id).innerHTML;
        append(val1 + val2);
    }
}

function append(sum) {
    var node = document.createElement("button");
    node.id = sum.toString();
    node.setAttribute('onclick', 'clicked(this.id)');
    node.style.backgroundColor = colors[j % 4];
    document.body.appendChild(node);
    node.innerHTML = sum.toString();
    j++;
    val1 = -1, val2 = -1;
}