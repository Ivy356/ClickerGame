var cookies = 0;

function cookieClick(number){
    cookies = cookies + number;
    document.getElementById("cookies").innerHTML = cookies;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.05,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.05,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var robots = 0;

function buyRobot(){
    var robotCost = Math.floor(20 * Math.pow(1.1,robots));     //works out the cost of this robot
    if(cookies >= robotCost){                                   //checks that the player can afford the robot
        robots = robots + 1;                                   //increases number of robots
    	cookies = cookies - robotCost;                          //removes the cookies spent
        document.getElementById('robots').innerHTML = robots;  //updates the number of robots for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(20 * Math.pow(1.1,robots));       //works out the cost of the next robot
    document.getElementById('robotCost').innerHTML = nextCost;  //updates the robot cost for the user
};

var bakers = 0;

function buyBaker(){
    var bakerCost = Math.floor(40 * Math.pow(1.1,bakers));     //works out the cost of this baker
    if(cookies >= bakerCost){                                   //checks that the player can afford the baker
        bakers = bakers + 1;                                   //increases number of bakers
    	cookies = cookies - robotCost;                          //removes the cookies spent
        cookiesPerSecond
	document.getElementById('bakers').innerHTML = bakers;  //updates the number of bakers for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(40 * Math.pow(1.1,bakers));       //works out the cost of the next baker
    document.getElementById('bakerCost').innerHTML = nextCost;  //updates the baker cost for the user
};

window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 1000);

window.setInterval(function(){
	
	cookieClick(robots);
	
}, 800)

window.setInterval(function(){
	
	cookieClick(bakers);
	
}, 600)
