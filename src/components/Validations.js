
export function minMaxLength(text, minLenght, maxLenght){
    let result = !text || text.length < minLenght;
    if(maxLenght)
        result = result || text.length < minLenght
    return result   
}

export function validEmail(text){
    const regex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
     
    return !regex.test(text);
}

