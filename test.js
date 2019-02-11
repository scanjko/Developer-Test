function repeat(item) {

    var newArray = [];
    for (i = 1; i <= 3; i++) {
        newArray = newArray.concat(item);
    }

    console.log(newArray);
}

function reformat(word) {

    word = word.toLowerCase();
    word = word.replace(/[aeiou]/g, '');
    word = word.charAt(0).toUpperCase() + word.slice(1);

    console.log(word);
}
