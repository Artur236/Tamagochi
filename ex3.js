function Tamagochi(_name, _health){
	if(!_health)_health = 100;
	
	
	/*public*/
	this.name = _name;
	
	this.eat = function(food){
		setHealth(this.getHealth()+(food*0.1));
	};
	this.sleep = function(minutes){
		setHealth(this.getHealth()-(minutes*0.1));
	};
	this.getHealth = function(){
			return health;
	};
	this.ouputState = function(){//only for testing
		console.log(this.name+" health="+getHealth());
	}
	this.onChange = function(){};//declare new event

	this.onDie = function(){};
	
	
	/*private*/
	var self = this;
	var health = _health;
	
	var setHealth = function(_health){
		health = _health;
		if(health>100 || health<=0){
			self.onDie();
			health = 0;
		}else{
			self.onChange();
		}
	};
}


//before was data definition usualy in separate file



//using defined data
var felix = new Tamagochi("Felix");//health = 100
felix.onChange = function(){
	tName.innerHTML = felix.name;
	tHealth.innerHTML = felix.getHealth();
};
window.onload = felix.onChange;//first time call, to display initial data

//homework: create onDie evt, die when health >100 OR health < 0

felix.onDie = function(){
	document.body.innerHTML = "Game over";
}
