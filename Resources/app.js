// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({
	
});


//
// create base UI tab and root window
//
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
   // icon:'KS_nav_views.png',
    icon:'images/857-rocket-selected.png',
    //title:'Values',
    
    window:win1
});


var webView = Ti.UI.createWebView({
        //top:'-50dp',
        //height:'94%',
        url:'game/index.html'
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
    icon:'images/701-location-selected.png',
    window:win2
});

var webView2 = Ti.UI.createWebView({
        //top:'-50dp',
        //height:'94%',
        url:'http://pageuppeoplecareers.com/'
    });
    

win2.add(webView2);




//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();