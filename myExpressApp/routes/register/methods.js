let postcode_valid = true;
let username_valid = true;
let check_password_valid = false;
let password_valid = false;
let passwords_fit = false;

function set_username_valid(bool){
    username_valid = bool;
}


function set_password_valid(bool){
    password_valid = bool;
}

function set_check_password_valid(bool){
    check_password_valid = bool;
}


function limitKeypress(event, value, maxLength) {
    if (value != undefined && value.toString().length >= maxLength) {
            if (event.keyCode != 8 && event.keyCode != 46) {
                    event.preventDefault();
            }
    }
}


function check_syntax(event, value, regEx) {
    if (value != undefined && value.toString().match(regEx) != null) {
        return true;
    }
    else {
        return false;
    }
}
