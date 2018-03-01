var text = document.getElementById('text');
text = text.innerHTML.toString();

var newText = text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2');

var btn = document.getElementById('convert');
btn.addEventListener('click', addText);

function addText() {
    var p = document.createElement('p');
    p.innerHTML = newText;
    document.body.appendChild(p);
}
