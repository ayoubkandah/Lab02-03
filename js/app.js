

let Page1=d=>{
    $("option").remove();
    $("div").remove();
    let AllData=[];
    
    $.ajax("../data/page-1.json").then(data=>{
    let KEY=[];
        data.forEach(element => {
            // console.log(element);
            let Data=new animal (element);
            AllData.push(element);
          
            if (!KEY.includes(element.keyword)) {
                KEY.push(element.keyword);
            }
    
           
            // console.log(KEY);
    // console.log(Data.image);
    Data.render(element);
    
        });
        
        // $(".photo-template").first().hide();
       
        KEY.forEach(element => {
            $('select').append(`<option> ${element}</option>`);
        
        });


        $("select").append(`<option> horn </option>`)
        $("select").append(`<option> title </option>`)
    })
    
    
    
    function animal (a){
    this.image=a.image_url;
    this.title=a.title;
    this.description=a.description;
    this.horns=a.horns;
    this.keyword=a.keyword;
    }
    
     animal.prototype.render=function(d){
    // console.log("d");
    
    
    
    // let div="<div></div>"
    let temp=  $('#temp').html();
    
        let OBJ = Mustache.render(temp,d);
       
        $("main").append(OBJ)
        
     }
     $("#selection").change(function (e) { 
            e.preventDefault();
         
         $("div").remove();
        
        
        AllData.forEach(element => {
            if(element.keyword==$("#selection").val()){
        
                let temp=  $('#temp').html();
    
                let OBJ = Mustache.render(temp,element);
               
                $("main").append(OBJ)
                
    
        }

    
    });
    if($("select").val()=="horn"){
          
        AllData.sort(function(a, b){return a.horns-b.horns});

        AllData.forEach(element => {
            
        
                let temp=  $('#temp').html();
    
                let OBJ = Mustache.render(temp,element);
               
                $("main").append(OBJ)
                
    
        
    
    });



}
if($("select").val()=="title"){
    console.log("dsass");

    AllData.forEach(element => {
        if(element.title.charAt(0)=="#"){
    console.log("ss");
            let temp=  $('#temp').html();

            let OBJ = Mustache.render(temp,element);
           
            $("main").append(OBJ)
            

    }


});


    }
    setTimeout(() => {
        $("div").addClass("appear")
    
    }, 80);
    
     });
}
let Page2=d=>{
    $("option").remove();
    $("div").remove();
    let AllData=[];
    $.ajax("../data/page-2.json").then(data=>{
    let KEY=[];
        data.forEach(element => {
            // console.log(element);
            let Data=new animal (element);
            AllData.push(element);
            if (!KEY.includes(element.keyword)) {
                KEY.push(element.keyword);
            }
    
           
            // console.log(KEY);
    // console.log(Data.image);
    Data.render(element);
    
        });
        
        // $(".photo-template").first().hide();
       
        KEY.forEach(element => {
         
            $('select').append(`<option> ${element}</option>`);
        
        });

        $("select").append(`<option> horn </option>`)

    })
    
    
    function animal (a){
    this.image=a.image_url;
    this.title=a.title;
    this.description=a.description;
    this.horns=a.horns;
    this.keyword=a.keyword;
    }
    
     animal.prototype.render=function(d){
    // console.log("d");
    
    
    
    // let div="<div></div>"
    let temp=  $('#temp').html();
    
        let OBJ = Mustache.render(temp,d);
       
        $("main").append(OBJ)
        
     }
     $("#selection").change(function (e) { 
            e.preventDefault();
         
         $("div").remove();
        
        
        AllData.forEach(element => {
            if(element.keyword==$("#selection").val()){
        
                let temp=  $('#temp').html();
    
                let OBJ = Mustache.render(temp,element);
               
                $("main").append(OBJ)
                
    
        }
    
    });

     if($("select").val()=="horn"){
        $("div").remove();

        AllData.sort(function(a, b){return a.horns-b.horns});

        AllData.forEach(element => {
            
        
                let temp=  $('#temp').html();
    
                let OBJ = Mustache.render(temp,element);
               
                $("main").append(OBJ)
                
    
        
    
    });



}
    setTimeout(() => {
        $("div").addClass("appear")
    
    }, 80);
    
     });
}

Page1();   
 


$("#page1").on("click", function () {
    console.log("sss");
    Page1();  
});
$("#page2").on("click", function () {
    Page2();  
});


/////////////// Old Code
//  let template=$(".photo-template").first().clone();

   
      
//     template.find("h2").text(this.title); 


//     template.find("img").attr("src",this.image);
// template.find("p").text(this.description); 

// $("main").append(template )

//     // template.find("img").attr("src",$(this.image));


    

// $("#selection").change(function (e) { 
//     e.preventDefault();
 
//  $("main").html("");
//  let divTemp=$("main").append("<div></div>");
//  $("div").addClass('photo-template');


// AllData.forEach(element => {
//     if(element.keyword==$("#selection").val()){
// Render(element);


// // console.log(element.);
//     }
//     // $("#photo-template").first().hide();
    
// });
 



// $(".photo-template").first().hide();


// });


// let Render=render=d=>{

//     let template=$(".photo-template").first().clone();

//     template.append("<h2></h2>")
//     template.append("<img></img>")
//     template.append("<p></p>")

//     template.find("h2").text(d.title); 


//     template.find("img").attr("src",d.image_url);
// template.find("p").text(d.description); 

// $("main").append(template);

// }



