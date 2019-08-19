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
    var robotCost = Math.floor(25 * Math.pow(1.1,robots));     //works out the cost of this robot
    if(cookies >= robotCost){                                   //checks that the player can afford the robot
        robots = robots + 1;                                   //increases number of robots
    	cookies = cookies - robotCost;                          //removes the cookies spent
        document.getElementById('robots').innerHTML = robots;  //updates the number of robots for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(25 * Math.pow(1.1,robots));       //works out the cost of the next robot
    document.getElementById('robotCost').innerHTML = nextCost;  //updates the robot cost for the user
};

var bakers = 0;

function buyBaker(){
    var bakerCost = Math.floor(50 * Math.pow(1.1,bakers));     //works out the cost of this baker
    if(cookies >= bakerCost){                                   //checks that the player can afford the baker
        bakers = bakers + 1;                                   //increases number of bakers
    	cookies = cookies - bakerCost;                          //removes the cookies spent
	document.getElementById('bakers').innerHTML = bakers;  //updates the number of bakers for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(50 * Math.pow(1.1,bakers));       //works out the cost of the next baker
    document.getElementById('bakerCost').innerHTML = nextCost;  //updates the baker cost for the user
};

var farms = 0;

function buyFarm(){
    var farmCost = Math.floor(100 * Math.pow(1.1,farms));     //works out the cost of this farm
    if(cookies >= farmCost){                                   //checks that the player can afford the farm
        farms = farms + 1;                                   //increases number of farms
    	cookies = cookies - farmCost;                          //removes the cookies spent
	document.getElementById('farms').innerHTML = farms;  //updates the number of farms for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,farms));       //works out the cost of the next farm
    document.getElementById('farmCost').innerHTML = nextCost;  //updates the farm cost for the user
};

window.setInterval(function(){
	
	cookieClick(cursors);
	
}, 1000);

window.setInterval(function(){
	
	cookieClick(robots);
	
}, 750)

window.setInterval(function(){
	
	cookieClick(bakers);
	
}, 500)

window.setInterval(function(){
	
	cookieClick(farms);
	
}, 250)
