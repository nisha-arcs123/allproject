// $('.btn_hide').click(function(){
//     $('.second').toggle();
// })

$(document).ready(function(){

    // $(".btn_hide").click(function(){
    //     $(".second").toggleClass("box");
    //    let color= $("div.box").css("width");
    //    console.log(color);
       
    //     // console.log($(".second").html());
    // })

    // $("input").focus(function(){
    //     $(this).css("background-color","orange")
    // })

    // $("input").blur(function(){
    //     $(this).css("background-color","")
    // })

    // $("input").change(function(){
    //     console.log($(this).val())
    // })

    // $("#registerform").submit(function(event) {
    //     event.preventDefault();
    //  console.log("sucessfull registered user");    
    // })


    // $("#outputData").load("sample.txt",function(response, statusText,xhr){
    //     if(statusText=="success") alert("success");
    //     if(statusText=="error") alert("error", xhr.statusText)
    // });


    $.get("https://jsonplaceholder.typicode.com/users", function(data, status){
        console.log(data, status);
        
    })

    $.post(
        "https://jsonplaceholder.typicode.com/posts",
        {title:"this is title", body:"tis is vbpdy"}, 
        function(data, status){
            console.log(data, status);
        }
    )
});