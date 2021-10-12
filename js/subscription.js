function checkIsLetter(char){
    char = char.charCodeAt()
    return ((char>=65 && char<=90)||(char>=97 && char<=122))
}

function checkIsalphanumeric(char){
    char = char.charCodeAt()
    return ((char>=48 && char<=57)||(char>=65 && char<=90)||(char>=97 && char<=122))
}

function validate(){
    document.getElementById('error-name').innerHTML=''
    document.getElementById('error-username').innerHTML=''
    document.getElementById('error-email').innerHTML=''
    document.getElementById('error-pass').innerHTML=''
    document.getElementById('error-cpass').innerHTML=''
    document.getElementById('error-addr').innerHTML=''
    document.getElementById('error-dob').innerHTML=''
    document.getElementById('error-terms').innerHTML=''

    let name = document.getElementById('name').value
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let pass = document.getElementById('pass').value
    let cpass = document.getElementById('cpass').value
    let addr = document.getElementById('addr').value
    let dob = document.getElementById('dob').value
    let terms = document.getElementById('terms')

    let valid = true

    if(name==''){
        valid = false;
        document.getElementById('error-name').innerHTML+='Name cannot be empty!'
    }else{
        for(let i=0; i < name.length; i++){
            if(!checkIsLetter(name[i])){
                valid = false
                document.getElementById('error-name').innerHTML+='Name cannot contain numbers!'
                break
            }
        }
    }

    if(username==''){
        valid = false;
        document.getElementById('error-username').innerHTML+='Username cannot be empty!'
    }else{
        for(let i=0; i < username.length; i++){
            if(!checkIsalphanumeric(username[i])){
                valid = false
                document.getElementById('error-username').innerHTML+='Userame must only contain alphanumeric!'
                break
            }
        }
    }
    
    if(email==''){
        valid = false;
        document.getElementById('error-email').innerHTML+='Email cannot be empty!'
    }else if(!email.endsWith('.com')){
        valid=false
        document.getElementById('error-email').innerHTML+='Email must end with ".com"!'
    }

    if(pass==''){
        valid = false;
        document.getElementById('error-pass').innerHTML+='Password cannot be empty!'
    }else if(pass.length<8){
        valid=false
        document.getElementById('error-pass').innerHTML+='Password length must be more than 8 characters'
    }

    if(cpass==''){
        valid = false;
        document.getElementById('error-cpass').innerHTML+='Password cannot be empty!'
    }else if(cpass != pass){
        valid=false
        document.getElementById('error-cpass').innerHTML+='Password must match!'
    }

    if(addr==''){
        valid = false;
        document.getElementById('error-addr').innerHTML+='Address cannot be empty!'
    }else if(!addr.startsWith('Jl.')){
        valid=false
        document.getElementById('error-addr').innerHTML+='Address must start with "Jl."'
    }

    if(dob==''){
        valid = false;
        document.getElementById('error-dob').innerHTML+='Date of Birth cannot be empty!'
    }else{
        let d = new Date(dob)
        if(d>new Date()){
            valid=false
            document.getElementById('error-dob').innerHTML+='Date of Birth must be before today!'
        }
    }

    if(!terms.checked){
        valid = false;
        document.getElementById('error-terms').innerHTML+='You must agree to the terms & conditions'
    }

    return false;
}