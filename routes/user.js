const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");



//router.get("/signup",(req,res)=>{
// res.render("users/signup.ejs");})
  
// router.post("/signup",wrapAsync(async(req,res)=>{
 //  try{
//     let{username,email,password}=req.body;
//     const newUser=new User({email,username});
// const registeredUser=await User.register(newUser,password);
// req.login(registeredUser,err=>{
// if(err){
// return next(err);
// }
//req.flash("success","Welcometo wanderlust");
// res.redirect("/listings") 
//  }    )
// console.log(registeredUser);

//  }catch(err){
// req.flash("error",Error.message);
// res.redirect("/signup");}
// }))


// login

//router.get("/login",(req,res)=>{
// res.render("users/login.ejs");})
  
// router.post("/login",savreRedirectUrl,
// passport.authenticate("local",{
// failureRedirect:"/login",failureFlash:true,
// })
// ,async(req,res)=>{
 
// req.flash("success","Welcomeback to wanderlust");
// let redirectUrl=req.session.redirectUrl||"/listings";
// res.redirect("redirectUrl");
//  })

router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup));

router
    .route("/login")
    .get(userController.renderLoginForm)
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), userController.login);


    // router.get("logout",(req,res)=>{
    //     req.logout((err)=>{
    //         if(err){
    //             return next(err);
    //         }
    //         req.flash("success","Goodbye!");
    //         res.redirect("/listings");
    //     }   )})
router.get("/logout", userController.logout)

module.exports = router;