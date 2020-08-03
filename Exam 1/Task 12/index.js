var text = "this is, a new text";
String.prototype.removeSapce = function () {
    return this.replace(/\s/g, '_');
}
var new_text = text.removeSapce();
console.log(new_text);