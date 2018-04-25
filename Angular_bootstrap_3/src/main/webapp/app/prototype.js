String.prototype.contains = function(substring){
	if(this.indexOf(substring) !== -1){
		return true;
	}
	return false;
};

Array.prototype.hasIndex = function(index){
	if(this.indexOf(index) !== -1){
		return true;
	}
	return false;
};

Array.prototype.isEmpty = function(index){
	if(this.length > 0){
		return false;
	}
	return true;
};