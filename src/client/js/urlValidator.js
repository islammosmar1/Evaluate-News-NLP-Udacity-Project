function validateURL(inputURL) {

    var urlPattern = inputURL.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
    if (urlPattern == null) {
        return 0; //false (invalid)
    } else {
        return 1; //true (valid)
    }
    
}

export { validateURL }