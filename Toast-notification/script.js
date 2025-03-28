
// Messages for success, error, and invalid input

let toastBox=document.getElementById("toastBox");
let successmsg=" Successfully Submitted";
let errormsg="Please fix the error";
let invalidmsg="Invalid input,check again";


 // Paths to your images
 let successImage = "correct.png";   // Path to the correct image
 let errorImage = 'error.png';       // Path to the error image
 let invalidImage = 'invalid.png';   // Path to the invalid image

// Function to show toast messages

function showToast(msg,type){

    // Create a toast element

   let toast=document.createElement("div");
   toast.classList.add('toast',type);
    
   // Create an image element based on the type
  
   let img = document.createElement("img");
            if (type === 'success') {
                img.src = successImage;
            } else if (type === 'error') {
                img.src = errorImage;

            } else if (type === 'invalid') {
                img.src = invalidImage;
            }

            // Set the toast message
            toast.innerHTML = '';
            toast.appendChild(img);
            toast.innerHTML += msg;


            // Append toast to the container
            toastBox.appendChild(toast);
            
//    toast.innerHTML=msg;
//    toastBox.appendChild(toast);


if(msg.includes('error')){
    toast.classList.add('error')
}

if(msg.includes('invalid')){
    toast.classList.add('invalid')
}

setTimeout(()=>{
    toast.remove();

},5000);

}