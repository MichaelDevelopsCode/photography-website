// const collectionData = require("./data/collectionData.json")

// console.log(collectionData);

// let photo = document.getElementById("image-file").files[0];
// let formData = new FormData();

// formData.append("photo", photo);
// fetch('../../src/uploads', {method: "POST", body: formData});


async function upload(file) {
    let user = { name:'john', age:34 };
    let formData = new FormData();
    let photo = file.files[0];      
         
    formData.append("photo", photo);
    formData.append("user", JSON.stringify(user));  
    
    try {
       let r = await fetch('../../src/uploads', {method: "POST", body: formData}); 
       console.log('HTTP response code:',r.status); 
    } catch(e) {
       console.log('Huston we have problem...:', e);
    }
}
// ----------------------------- Previous button START
function prevPage() {
    window.history.back();
}
// ----------------------------- Previous button END

// ----------------------------- private switch/toggle START
$("#private-switch").click(element => {
    // set var to element
    const el = element.currentTarget;
    let privacy = false;
    // change text and store value on toggle
    if(el.checked) {
        $(el).parent().next().html("Private <i class='fas fa-lock'></i>");
        privacy = true;
    } else {
        $(el).parent().next().html("Public <i class='fas fa-lock-open'></i>");
        privacy = false;
    }
    console.log(privacy);
});
// ----------------------------- private switch/toggle END

// ----------------------------- homepage switch/toggle START
$("#homepage-switch").click(element => {
    // set var to element
    const el = element.currentTarget;
    let privacy = false;
    // change text and store value on toggle
    if(el.checked) {
        $(el).parent().next().html("Added to Homepage &#10003;");
        privacy = true;
    } else {
        $(el).parent().next().html("Add to Homepage");
        privacy = false;
    }
    console.log(privacy);
});
// ----------------------------- homepage switch/toggle END

// ----------------------------- popover effect START
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl), {
    container: '.modal'
  }
});
// ----------------------------- popover effect END
