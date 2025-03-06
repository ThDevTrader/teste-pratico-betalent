import parsePhoneNumber from "libphonenumber-js";

export const formatPhone = (phoneString) => {
    const phoneNumber = parsePhoneNumber(phoneString, 'BR');
    return phoneNumber.formatNational();
}