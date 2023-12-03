function onSubmit(firstName, lastName, email, password) {
    if(firstName && lastName && email && password) {
        alert("success");    
        document.getElementById('alertFirstName').style.display = 'none';  
    } 
    if(!firstName) {
        document.getElementById('alertFirstName').style.display = 'inline';
    }
    if(!lastName){
        document.getElementById('alertLastName').style.display = 'inline';
    }
    if(!email){
        document.getElementById('alertEmail').style.display = 'inline';
    }
    if(!password){
        document.getElementById('alertPassword').style.display = 'inline';
    }   
}