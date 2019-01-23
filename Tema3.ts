//Tested with: https://www.typescriptlang.org/play/ to avoid building an entire environment.
let list: string[] = ["a", "z", "f", "c", "g"];
function show(items: string[]) {
    var list = items.sort()
    return list.toString();
}
document.body.innerHTML = show(list);