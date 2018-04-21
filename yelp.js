var express=require("express");
var app=express();
app.set("view engine","ejs");
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var campgrounds=[   {name:"salmon creak", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEQoqTAGUSaIqpY8E7_ArHQmdhdZqCbf0dHq680nc418Q44ZL"},
	                {name:"granite hill", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE8HHMxcmEx6q-GgtL7aaclUj6hgeTNRwF_5TK7ivlrI7sTC2Wag"}, 
	                {name:"dharmshala", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogbn98d27Q6t6O8iWYvNL7otw2zMCIW5c_uC6OXB-iaOihZLYMg"}, 
	                {name:"kasol", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AQOsP8zwKuuTKoiWIM-50KU-0NM2DhnReNjapLbc12qX1q-e"}, 
                    {name:"satkosia", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fAAYSOncpVVxeQHX0aaUyYXgIm1PLNO66aIThDZ5JjFsQrU"},
                    {name:"ranikhet", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV5HAu8SfZSkdDzU7KlsQ6COiH9qFwWCHXMQugbUhcteFhhPC_YA"},
                    {name:"kodaikanal", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8LxtwkMdQKEonIGvb2uV-ynV2NkK2aqhqnvyOlDpYiBVl546Ag"},
                    {name:"ooty", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2fB4reWTrLrtIrFP66RwMowBf3RZUonHNFGHB1Z_lCtpAaw_"},
                    {name:"mussorie", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xaAOzw2ZAeSsYmpuMyXHPa_8XFmXSZHoqOfIvFUQ4oYhkkNmGQ"},
                    {name:"nainital", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHh6__BjgPl4aKAJ0wZe0ZJk8Dpbl9kYqyDZHTKCKndRlzO7L"},
                    {name:"daringbadi", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSyjG4sWtlRmmhwdl7f5eQkFOCsE3UO2CHtELfx5CbmncHUndUg"},
                    {name:"shimla", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6o8G3codv0UcMtNfhobVq_YcJ8cEKRUj1wVkVCo2GD9fX3gVjA"},

	                 ]
                    
app.get("/", function(req,res){
	res.render("land");
});
app.get("/campgrounds",function(req,res){
	
	                 res.render("campgrounds",{campgrounds:campgrounds});

});
app.post("/campgrounds",function(req,res){
//res.send("you hit the post route");
var  name=req.body.name;
var image=req.body.image;
var newCampground = {name:name,image:image};
campgrounds.push(newCampground);
res.redirect("/campgrounds");
});
app.get("/campgrounds/new",function(req,res){
res.render("new.ejs");
});

app.listen(3000,function(){
	console.log("yelp camp server starts");
})
