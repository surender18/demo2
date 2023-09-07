function msg() {
    alert(" currently the website is under construction");
}

function subscribe() { 
    val = document.getElementById("emailAdd").value;
    val.toString();
    validEmail2 = val.endsWith('.com');
    validEmail = val.includes('@');
    if(val===""){
        alert("Please Enter Email first");
    }
    else if(validEmail !== true && validEmail2 !== true){
        alert("Please enter a valid email address");
    }
    else if(validEmail == true && validEmail2 == true){
    subs = document.getElementById("subscibeButton").innerHTML;
    if (subs == 'Subscribe') {
        document.getElementById("subscibeButton").innerHTML = 'Subscribed';
        alert('You have been Subscribed to our mail services');
        const subscribe = document.querySelector('#subscibeButton');
        subscribe.style.backgroundColor = 'grey';
        subscribe.style.borderColor = 'solid 2px grey';
    }
    else if(subs == 'Subscribed') {
        document.getElementById("subscibeButton").innerHTML = 'Subscribe';
        alert('You have been Unsubscribed to our mail services');
        const subscribe = document.querySelector('#subscibeButton');
        subscribe.style.backgroundColor = '#ff8e32';
        // subscribe.style.border = 'solid 2px #ff8e32';
        
    }
    }
   
}


