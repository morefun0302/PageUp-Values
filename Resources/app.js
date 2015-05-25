// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup({
	
});

var win1 = Titanium.UI.createWindow({  
    color:'#fff',
    barColor: '#1D3B4A',
    titleControl: Ti.UI.createLabel({ 
    		text:'PageUp Values',
   			color: 'white', 
    		width: Ti.UI.SIZE ,
    		font:{fontSize:'18dp'},  
  		}) 
});
var tab1 = Titanium.UI.createTab({  
    icon:'_PUShared/PUIcons/857-rocket-selected.png',
    window:win1
});

var gameUrl;

if(Ti.Platform.osname=='android'){
		//gameUrl='http://staging.2and2.com.au/pup/onboarding/build_030914/index.html';
		gameUrl='game/index.html';
}else{
        gameUrl='game/index.html';
};

// Local install of game not working on old androids, so load from web (no idea why - look into it one day)
var webView = Ti.UI.createWebView({
		url: gameUrl
 });
    

win1.add(webView);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
       backgroundColor:'#1D3B4A',
    color:'#fff',
    barColor: '#1D3B4A',
    titleControl: Ti.UI.createLabel({ 
    		text:'PageUp Jobs',
   			color: 'white', 
    		width: Ti.UI.SIZE ,
    		font:{fontSize:'18dp'},  
  		}) 
});
var tab2 = Titanium.UI.createTab({  
    //icon:'KS_nav_ui.png',
   // title:'Jobs',
    color: 'white',
    icon:'_PUShared/PUIcons/701-location-selected.png',
    window:win2
});

var webView2 = Ti.UI.createWebView({
        //top:'-50dp',
        //height:'94%',
        url:'http://pageuppeoplecareers.com/'
    });
    

win2.add(webView2);

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();
