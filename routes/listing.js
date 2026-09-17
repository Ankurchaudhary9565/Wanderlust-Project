const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });


// router.post("/",isLoggedIn,validateListing,wrapAsync(async(req,res,next)=>{
//     const newlisting=new Listing(req.body.listing);
//     newlisting.owner=req.user._id;
//     await newlisting.save();
//     req.flash("success","Successfully made a new listing");
//     res.redirect('/listings');
// }));


//create route
// router.post("/",isLoggedIn,validateListing,wrapAsync(
//     async (req, res, next) => {
//     const newListing = new Listing(req.body.listing);
//     newListing.owner = req.user._id;
//     newListing.image = { url, filename };
//     await newListing.save();
//     req.flash("success", "New Listing Created!");
//     res.redirect("/listings");
//     }
// )
// )

//index route 
// router.get("/",wrapAsync(async(req,res)=>{
//     const allListings=await Listing.find({});
//     res.render("listings/index.ejs",{allListings});
// }));


router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'), wrapAsync(listingController.createListing));



//new route
// router.get("/new",isLoggedIn,(req,res)=>{
//     res.render("listings/new.ejs");
// })



router.get("/new", isLoggedIn, listingController.renderNewForm);

//show route
// router.get("/:id", wrapAsync(async (req, res) => {
//     const listing = await Listing.findById(id)
//     .populate("owner")
//     .populate("reviews");
//     if (!listing) {
//         req.flash("error", "listing you requested does not exist");
//         return res.redirect("/listings");
//     }
//     res.render("listings/show.ejs", { listing });
// }));


//Show route
// router.get("/:id",wrapAsync(async(req,res)=>{
//     let {id}=req.params;
//     const listing=await Listing.findById(id)
//     .populate({
//         path: "reviews",
//         populate: {
//             path: "author",     
//     },
// })
// .populate("owner");
//     if(!listing){
//         req.flash("error","Listing you requested for does not exist!");
//         res.redirect("/listings");
//     }
//     console.log(listing);
//     res.render("listings/show.ejs",{listing});
// }));


router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Route

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;