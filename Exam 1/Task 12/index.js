var text = "this is, a new text";
function remove_sapce(text) {
    return text.replace(/\s/g, '_');
}
var new_text = remove_sapce(text);
console.log(new_text);