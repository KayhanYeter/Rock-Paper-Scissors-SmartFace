const extend = require("js-base/core/extend");
const Router = require("sf-core/ui/router");
const System = require("sf-core/device/system");
const Image = require('sf-core/ui/image');
const ImageView = require('sf-core/ui/imageview');

// Get generated UI code
const Page1Design = require("ui/ui_page1");

const Page1 = extend(Page1Design)(
    // Constructor
    function(_super) {
        // Initalizes super class for this page scope
        _super(this);
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    const page = this;
    superOnShow();
    
}
var user = 0,computer = 0, draw = 0;

function onLoad(superOnLoad) {
var alertView = alert({message:"Let's Start"});
setTimeout(function() { alertView.dismiss() }, 1000);    

    const page = this
    superOnLoad();
    page.rock.onTouch = () => {
        comparison.call(this,"rock");
    };
      page.paper.onTouch = () => {
        comparison.call(this,"paper");
    };
      page.scissors.onTouch = () => {
        comparison.call(this,"scissors");
    };
   

}

function comparison(userSelection) {
    var Selection = ["rock", "paper", "scissors"];
    const page = this;
    var comSelection = (Math.random() * 3);
    if (comSelection <= 1) {
        comSelection = Selection[0];
    }
    else if (comSelection <= 2) {
        comSelection = Selection[1];
    }
    else if (comSelection <= 3) {
        comSelection = Selection[2];
    }
 
    if (userSelection === comSelection) {

        ++draw;
    
    page.aıText.text = comSelection;
    page.youText.text = userSelection;    
        
    }
    else if (userSelection === "rock" && comSelection === "paper") {
        ++computer;
    
    page.aıText.text = comSelection;
    page.youText.text = userSelection;      }
    else if (userSelection === "paper" && comSelection === "rock") {
        ++user;
   
    page.aıText.text = comSelection;
    page.youText.text = userSelection;  
    }
    else if (userSelection === "scissors" && comSelection === "rock") {
        ++computer;
    
    
    page.aıText.text = comSelection;
    page.youText.text = userSelection;  
    }
    else if (userSelection === "rock" && comSelection === "scissors") {
        ++user;
    
    page.aıText.text = comSelection;
    page.youText.text = userSelection;  
    }
    else if (userSelection === "paper" && comSelection === "scissors") {
        ++computer;
   
    page.aıText.text =comSelection;
    page.youText.text = userSelection;  
    }
    else if (userSelection === "scissors" && comSelection === "paper") {
        ++user;
    
    page.aıText.text = comSelection;
    page.youText.text = userSelection;  

    }
}



    module.exports = Page1;
