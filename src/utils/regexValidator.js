export const emailRegex = (val) => {
    let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return reg.test(val.trim())
}

export const nameRegex = (val) => { 
    return  /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(val.trim());
}

export const commentRegex = (val) => {
    let reg = /[^<>*]/g
    return reg.test(val.trim())
}

export const mobileRegex = (val) => {
    let reg = /^[0-9 ]{10}$/
    return reg.test(val.trim())
}

export const OTPRegex = (val) => {
    let reg = /^[0-9]{6}$/
    return reg.test(val.trim())
}