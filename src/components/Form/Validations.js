validate =(value, validation)=>{
    if(validation=="email"){
        return validateEmail(value);
    }
    else if(validation=="number"){
        return validateNumber(value);
    }
    else if(validation=="zipcode"){
        return validateZipCode(value);
    }
    else if(validation=="empty"){
        return validateEmpty(value);
    }
}

validateEmpty = (value)=>{
    let test1 = new RegExp(/\S/);
    if(!test1.test(value)){
        let obj = {error : true, errorCode : 'Please Enter Something'};
        return obj;
    }
    else{
        let obj = {error : false};
        return obj;
    }
}

validateEmail = (value)=>{
    let test1 = new RegExp(/\S/);
    let test = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(!test1.test(value)){
        return({error : true, errorCode : 'Please Enter something'});
    }
    else if(!test.test(value)){
        return({error : true,errorCode : 'Please Enter valid Email'});
    }
    else{
        return({error : false});
    }
}

validateNumber = (value) =>{
    let test = new RegExp(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/);
    let test1 = new RegExp(/\S/);
    if(!test1.test(value)){
        return({error : true, errorCode : 'Please Enter something'});
    }
    else if(!test.test(value)){
        return({error : true,errorCode : 'Please enter correct number'});
    }
    else{
        return({error : false});
    }
}

validateZipCode = (value)=>{
    let test1 = new RegExp(/\S/);
    let test = new RegExp(/^[1-9][0-9]{5}$/);
    if(!test1.test(value)){
        return({error : true,errorCode : 'Please Enter something'});
    }
    else if(!test.test(value)){
        return({error : true, errorCode : 'Please Enter valid Pincode'})
    }
    else{
        return({error : false});
    }
}

export const Validations = {
    validate,
    validateEmpty,
    validateEmail,
    validateNumber,
    validateZipCode
}