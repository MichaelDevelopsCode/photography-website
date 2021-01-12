// const collectionData = require("./data/collectionData.json")
// console.log(collectionData);

// let photo = document.getElementById("image-file").files[0];
// let formData = new FormData();

// formData.append("photo", photo);
// fetch('../../src/uploads', {method: "POST", body: formData});


// async function upload(file) {
//     let user = { name:'john', age:34 };
//     let photo = file.files[0];      
         
//     formData.append("photo", photo);
//     formData.append("user", JSON.stringify(user));  
    
//     try {
//        let r = await fetch('../../src/uploads', {method: "POST", body: formData}); 
//        console.log('HTTP response code:',r.status); 
//     } catch(e) {
//        console.log('Huston we have problem...:', e);
//     }
// }
function uploading(input) {
    $("#imgUploading").html("");
    for( let i = 0; i < input.files.length; i++) {
        $("#imgUploading").append("<img src='"+URL.createObjectURL(input.files[i])+"'>");
    }
}

function upload() {
    // activtes modals
    $('#collectionModal').modal();
    $('#collectionAlert').modal();


    // uploaded file element
    const imgEl = $("#image-input")[0];
    // endpoint for fetch file destination 
    const endpoint = "../../src/upload.php";
    // form data for file upload
    let formData = new FormData();
    
    // make sure files were uploaded first
    if (imgEl.files && imgEl.files[0]) {
        // add to form data
        for(const photo of imgEl.files) {
            formData.append("photos", photo);
        }
        // send fetch request to post

        // fetch(endpoint, {
        //     method: "POST",
        //     body: formData
        // }).catch(console.error);
        fetch("http://localhost:3000/upload", {
            method: "post",
            body: formData
        }).then(response => {
            // close form/modal
            $('#collectionModal').modal('hide');
            
            // if response ok
            if(response.ok) {
                // send alert (via modal)
                $('#collectionAlertText').text('Collection Created!')
                // show alert for 5 seconds
                $('#collectionAlert').modal('show');
                $('.modal-backdrop').removeClass("modal-backdrop");
                setTimeout(function(){$('#collectionAlert').modal('hide')}, 3000);
                console.log("Files have been uploaded to the uploads folder")
            } else { //else through error
                console.log("There was a problem, files not uploaded");
                // send alert (via modal)
                $('#collectionAlertText').text("There was a problem, collection couldn't be created.")
                // show alert for 5 seconds
                $('#collectionAlert').modal('show');
                setTimeout($('#collectionAlert').modal('hide'), 5000);
            }
        });
    } else {
        // send alert (via modal)
        $('#collectionAlertText').text('No files selected!')
        // show alert for 5 seconds
        $('#collectionAlert').modal('show');
        setTimeout(function(){$('#collectionAlert').modal('hide')}, 3000);
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
