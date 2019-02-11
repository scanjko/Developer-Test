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

function next_binary_number(num) {

    for (i = num.length - 1; i >= 0; i--) {
        
        if (num[i] == 1 && i == num.length - 1) {
            var flag = true;
            for (j = num.length - 1; j >= 0; j--) {
                if (num[j] == 0) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                num.push(0);
                break;
            }

        }

        if (num[i] == 0) {
            num[i] = 1;
            break;
        } else if (num[i] == 1) {
            num[i] = 0;
        }

    }

    console.log(num);
}