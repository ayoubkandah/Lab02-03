let page1bol=false;////its           seperate sort
let page2bol=false;///     to make                   for 2 pages
let selecT=false; // its for make trigger bool for sorting the keyword

let Page1=d=>{
    selecT=false;
     page1bol=true;
     page2bol=false;
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
            $('#selection').append(`<option> ${element}</option>`);
        
        });


        $("#sort").append(`<option> horn </option>`)
        $("#sort").append(`<option> title </option>`)
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
            selecT=true;
         $("div").remove();
        
        
        AllData.forEach(element => {

            
            if(element.keyword==$("#selection").val()){
        
                let temp=  $('#temp').html();
    
                let OBJ = Mustache.render(temp,element);
               
                $("main").append(OBJ)
                
    
        }

    
    });
    setTimeout(() => {
        $("div").addClass("appear")
    
    }, 80);
})
$("#sort").change(function (e) {

   if(!selecT){

    
    $("div").remove();
    if(page1bol){
    if($("#sort").val()=="horn"){
          console.log("eeee");
        AllData.sort(function(a, b){return a.horns-b.horns});

        AllData.forEach(element => {
            
        
                let temp=  $('#temp').html();
    
                let OBJ = Mustache.render(temp,element);
               
                $("main").append(OBJ)
                
    
        
    
    });

    setTimeout(() => {
        $("div").addClass("appear")
    
    }, 80);

}
if($("#sort").val()=="title"){
    console.log("dsass");
    $("div").remove();
    AllData.sort(function(a, b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
      })
      console.log(AllData);
   
    
    
    AllData.forEach(element => {
        let temp=  $('#temp').html();
    
        let OBJ = Mustache.render(temp,element);
       
        $("main").append(OBJ)

});
};
}
    
    
}

if(selecT){

    $("div").remove();
    if($("#sort").val()=="title"){
       
        AllData.sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
          });
        }
        if($("#sort").val()=="horn"){
            console.log("eeee");
          AllData.sort(function(a, b){return a.horns-b.horns});
        }


AllData.forEach(element => {

            
    if(element.keyword==$("#selection").val()){

        let temp=  $('#temp').html();

        let OBJ = Mustache.render(temp,element);
       
        $("main").append(OBJ)
        

}
});
setTimeout(() => {
    $("div").addClass("appear")

}, 80);


    }
});
}
let Page2=d=>{
    selecT=false;
    page1bol=false;
    page2bol=true;
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
         
            $('#selection').append(`<option> ${element}</option>`);
        
        });

        $("#sort").append(`<option> horn </option>`)
        $("#sort").append(`<option> title </option>`)

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
                selecT=true;
             $("div").remove();
            
            
            AllData.forEach(element => {
    
                
                if(element.keyword==$("#selection").val()){
            
                    let temp=  $('#temp').html();
        
                    let OBJ = Mustache.render(temp,element);
                   
                    $("main").append(OBJ)
                    
        
            }
    
        
        });
        setTimeout(() => {
            $("div").addClass("appear")
        
        }, 80);
    })
    $("#sort").change(function (e) {
    
       if(!selecT){
    
        
        $("div").remove();
        if(page2bol){
        if($("#sort").val()=="horn"){
              console.log("eeee");
            AllData.sort(function(a, b){return a.horns-b.horns});
    
            AllData.forEach(element => {
                
            
                    let temp=  $('#temp').html();
        
                    let OBJ = Mustache.render(temp,element);
                   
                    $("main").append(OBJ)
                    
        
            
        
        });
    
        setTimeout(() => {
            $("div").addClass("appear")
        
        }, 80);
    
    }
    if($("#sort").val()=="title"){
        console.log("dsass");
        $("div").remove();
        AllData.sort(function(a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
          })
          console.log(AllData);
       
        
        
        AllData.forEach(element => {
            let temp=  $('#temp').html();
        
            let OBJ = Mustache.render(temp,element);
           
            $("main").append(OBJ)
    
    });
    };
    }
        
        
    }
    
    if(selecT){
    
        $("div").remove();
        if($("#sort").val()=="title"){
           
            AllData.sort(function(a, b){
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
              });
            }
            if($("#sort").val()=="horn"){
                console.log("eeee");
              AllData.sort(function(a, b){return a.horns-b.horns});
            }
    
    
    AllData.forEach(element => {
    
                
        if(element.keyword==$("#selection").val()){
    
            let temp=  $('#temp').html();
    
            let OBJ = Mustache.render(temp,element);
           
            $("main").append(OBJ)
            
    
    }
    });
    setTimeout(() => {
        $("div").addClass("appear")
    
    }, 80);
    
    
        }
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



