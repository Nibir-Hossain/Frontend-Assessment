var text = "My name  is    Md.Nibir Hossain";

function wordCount(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    return str.split(' ').length;
}

console.log('Number of words are ' + wordCount(text));