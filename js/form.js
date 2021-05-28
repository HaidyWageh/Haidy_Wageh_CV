function Validate() {

    var contact_name = document.forms['form']['contact_name'].value;
    if (contact_name == "" || contact_name == null) {
        alert("Name can't be Empty");
        return false;
    }

    var contact_email = document.forms['form']['contact_email'].value;
    if (contact_email == "" || contact_email == null) {
        alert("Email  can't be Empty");
        return false;
    }

    var contact_message = document.forms['form']['contact_message'].value;
    if (contact_message == "" || contact_message == null) {
        alert(" Message can't be Empty");
        return false;
    }

}