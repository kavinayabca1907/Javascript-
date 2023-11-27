function validate(){

    var username=document.getElementById('username').value
    var email = document.getElementById('email id').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('cpassword').value
    var letter = /[a-zA-Z]/
    var number = /[0-9]/

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkcpassword(password,cpassword)
}

function checkusername(username){
    if(username.length > 7){
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('username').classList.add('success')   
     }
     else
     {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText='Username must be 8 letters long'
     }
}

function checkemail(email){
    if(email.length > 7 && email.includes('@gmail')){
        document.getElementById('email id').classList.replace('error','success')
        document.getElementById('email id').classList.add('success')   
     }
     else
     {
        document.getElementById('email id').classList.add('error')
        document.getElementById('email_error').innerText='E-mail must be 8 characters long and include @gmail'
     }
}

function checkpassword(password){
    if(password.length > 7 && password.includes('.')){
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('password').classList.add('success')   
     }
     else
     {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText='Password must be 8 letters long and include dot(.)'
     }
}

function checkcpassword(password,cpassword){
    if(password==cpassword&&password!=''){
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('cpassword').classList.add('success') 
    }else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText='Recheck your password'
    }
}

