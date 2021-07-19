/** Build 0.1.0
* prodChoiceMaster is the working code for the beta version master js script for the wix test deployment release of OceaniaOne
* keep the 'event' declaration unchanged, even if showing as uncalled below, this is needed by wix for event handling for reasons 
* that escape at the time of writing.  For the inclined,  learn more @ visit http://wix.to/UcBnC-4 #snooze
*/

export function prodChoice2_change(event) {
	// declare the main variable and set it to the operative element's current value (this should be the active form UI product selected)
    let prodChoice = $w("#prodChoiceMaster")
    /**  run through the value permutations and configure form UI for each one.  This should also code implicitly the business rules and 
    * configuration choices the user needs to make to generate a valid 
    */  
     if (prodChoice === "None") 
                    /** configure user view state when product choice selection 
                    *  value is none .  Is this also the default state?
                    *	 $w("#[productSpecificelements]").show();
                    *    $w("#[productSpecificelements]").hide(); 
                    */
        
                    { 
                    //    $w("#").show([ SHOW HELP TEXT MESSAGE AND/OR TRY TO FIGURE OUT WAY ROUND FORM NAV LIMITATIONS SO USER CAN JUMP TO SUBMIT]);
                    $w("#displaybuttondatasheettext").hide();
                    $w("#templatedatasheet").hide();
                    $w("#containerboxNfeBadges").hide();
                    console.log("Event: change #prodChoiceMaster - View state is: NONE")} 
                else if (prodChoice === "Badge") 
                    /** placehodler copy and pasting show and hide code 
                    *
                    *	 $w("#[productSpecificelements]").show();
                    *    $w("#[productSpecificelements]").hide(); 
                    */
                    {
                    //show the generic elements required and the specific container box for this product  
                    
                    $w("#displaybuttondatasheettext").show();
                    $w("#templatedatasheet").show();
                    $w("#containerboxNfeBadges").show();
                    console.log("Event: change #prodChoiceMaster - View state is: badge");    
                  
                    //hide the product containter boxes not required for this product selection
                    //backingplates:
                    $w("#backingplateDisplayImgSingleSquareCrns").hide();
                    $w("#containerboxNfeBackingPlates").hide();
                    }

                else {if (prodChoice === "Room Backing Plate")  

                    /**
                    *	PLACEHOLDER 
                    *	 $w("#[productSpecificelements]").show();
                    *    $w("#[productSpecificelements]").hide(); 
                    */

                    {                       
                    $w("#containerboxNfeBackingPlates").show();
                    // will need to nest below statement further for backingplateSubtypeOptionSelector when
                    // multiple images are available, for now just used as the generic image for backing plate
                    
                    $w("#backingplateDisplayImgSingleSquareCrns").show();
                    console.log("Event: change #prodChoiceMaster - View state is: room backing plate")  

                    //hide the product containter boxes not required for this product selection
                    
                    }               
                else {if(prodChoice === "Room Name Slider") 
                
                    /**
                    *	PLACEHOLDER 
                    *	 $w("#[productSpecificelements]").show();
                    *    $w("#[productSpecificelements]").hide(); 
                    */
                    {
                    console.log("User changes product selection on Prod Choice 2 - View state is: name slider");   

                    //hide the product containter boxes not required for this product selection
                    //backingplates:
                    $w("#backingplateDisplayImgSingleSquareCrns").hide();
                    $w("#containerboxNfeBackingPlates").hide();
                    
                    }

                else {if(prodChoice === "Wall Signs")

                
                    /**
                    *	PLACEHOLDER 
                    *	 $w("#[productSpecificelements]").show();
                    *    $w("#[productSpecificelements]").hide(); 
                    */

                    {                   
                    console.log("Event: change #prodChoiceMaster - View state is:  wall signs")

                    //hide the product containter boxes not required for this product selection
                    //backingplates:
                    $w("#backingplateDisplayImgSingleSquareCrns").hide();
                    $w("#containerboxNfeBackingPlates").hide();
                    }

                else {if(prodChoice === "Custom Signage")
                
                    /**
                    *	PLACEHOLDER 
                    *	 $w("#[productSpecificelements]").show();
                    *    $w("#[productSpecificelements]").hide(); 
                    */

                    { 
                    console.log("Event: change #prodChoiceMaster - View state is:   custom signage")

                    //hide the product containter boxes not required for this product selection
                    //backingplates:
                    $w("#backingplateDisplayImgSingleSquareCrns").hide();
                    $w("#containerboxNfeBackingPlates").hide();
                    }                   
                    
}
}
}
}
}
