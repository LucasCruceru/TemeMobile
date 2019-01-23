//Tested with: https://www.typescriptlang.org/play/ to avoid building an entire environment.
var list = ["a", "z", "f", "c", "g"];
function show(items) {
    var list = items.sort();
    return list.toString();
}
document.body.innerHTML = show(list);
