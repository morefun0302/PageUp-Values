Titanium.include('/_PUShared/PUlib/icons.js');
  
var winGame = Titanium.UI.createWindow({  
    color:'#fff',
    backgroundColor: 'white',
    barColor: '#1D3B4A',
    titleControl: Ti.UI.createLabel({ 
    		text:'PageUp Values',
   			color: 'white', 
    		width: Ti.UI.SIZE ,
    		font:{fontSize:'18dp'},  
  		}) ,
  		 navBarHidden: false,
		navTintColor:'#fff',
});


	var density =  (Titanium.Platform.displayCaps.dpi <= 160) ? 'low' : (Titanium.Platform.displayCaps.dpi > 160 && Titanium.Platform.displayCaps.dpi < 250) ? 'medium' : 'high'; 
	//var preamble = (Ti.Platform.osname === 'iphone' || (Ti.Platform.osname === 'ipad') )? 'images':'android/images/'+density + '/';
	
    var iSize;
    
 
    Ti.API.info('resolution=' + Titanium.Platform.displayCaps.dpi);
    
    if (density == 'low') {
        iSize = (Ti.Platform.osname === 'android' ? 10 : 1);
	}else if (density == 'medium') {
	    iSize = (Ti.Platform.osname === 'android' ? 50 : 30);
	}else {
	    iSize = (Ti.Platform.osname === 'android' ? 80 : 40);	
	}


if(Ti.Platform.osname=="iphone"){
    	var iconRocket = '_PUShared/PUIcons/857-rocket-selected.png';
    	var iconWeb = '_PUShared/PUIcons/701-location-selected.png';
    }else{
    	var iconRocket = createIconFile('rocket', iSize);
    	var iconWeb = createIconFile('compass', iSize);
    }
    
var tabGroup = Titanium.UI.createTabGroup({
	});
         
var tab1 = Titanium.UI.createTab({  
    icon:iconRocket,
    window:winGame
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
    

winGame.add(webView);

var winWeb = Titanium.UI.createWindow({  
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
    icon:iconWeb,
    window:winWeb
});

var webView2 = Ti.UI.createWebView({
        url:'http://pageuppeoplecareers.com/'
});    

winWeb.add(webView2);

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

tabGroup.open();
