/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Page2Design = require('ui/ui_page2');
const Router = require("sf-core/ui/router");


const Page2 = extend(Page2Design)(
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
  superOnShow();
   this.headerBar.visible=false;
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();
   const page = this;
   page.startButton.onPress = btn_onPress.bind(page);
}
function btn_onPress() {
    Router.go("page1");
}

module.exports = Page2;