button = document.querySelectorAll('.butn');

const addExp = num => {
    document.querySelector('#print').value += num;
}

button.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const val = e.currentTarget.value;
        const ele = e.currentTarget.innerHTML;

        switch (val) {

            case "clear":
                document.querySelector('#print').value = "";
                break;

            case "delete":
                document.querySelector('#print').value = document.querySelector('#print').value.slice(0, -1)
                break;

            case "equal":
                try {
                    document.querySelector('#print').value = eval(document.querySelector('#print').value);
                } catch (error) {
                    console.log("error ");
                    document.querySelector('#print').value = "undefined";
                    setTimeout(function() {
                        document.querySelector('#print').value = "";
                    }, 2000);
                }

                break;

            default:
                addExp(ele);
                break;
        }

        // switch (val) {
        //     case "9":
        //         console.log(val);
        //         break;

        //     case "8":
        //         console.log(val);
        //         break;

        //     case "7":
        //         console.log(val);
        //         break;

        //     case "6":
        //         console.log(val);
        //         break;

        //     case "5":
        //         console.log(val);
        //         break;

        //     case "4":
        //         console.log(val);
        //         break;

        //     case "3":
        //         console.log(val);
        //         break;

        //     case "2":
        //         console.log(val);
        //         break;

        //     case "1":
        //         console.log(val);
        //         break;

        //     case "0":
        //         console.log(val);
        //         break;

        //     case "root":
        //         console.log(val);
        //         break;

        //     case "parenRight":
        //         console.log(val);
        //         break;

        //     case "parenLeft":
        //         console.log(val);
        //         break;

        //     case "percent":
        //         console.log(val);
        //         break;

        //     case "slash":
        //         console.log(val);
        //         break;

        //     case "times":
        //         console.log(val);
        //         break;

        //     case "minus":
        //         console.log(val);
        //         break;

        //     case "decimal":
        //         console.log(val);
        //         break;

        //     case "delete":
        //         console.log(val);
        //         break;

        //     case "plus":
        //         console.log(val);
        //         break;

        //     case "clear":
        //         console.log(val);
        //         break;
        // }
    })
});