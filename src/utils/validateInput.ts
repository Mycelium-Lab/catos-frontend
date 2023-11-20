const validateEmail = (email: string) => {
    if(email === '') {
        return true
    }
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );   
}

const validatePhone = (phone: string) => {
    console.log(phone)
    if(phone === '') {
        return true
    }
    else if ((phone.replace(/\D/g, "").length === 11)) {
        return true
    }
    else {
        return false
    }
}

export { validateEmail, validatePhone }