//U góry kod z zastosowaniem jquery(wykomentowany) - zgodny z treścią zadania. U dołu czysty js - oba działają, jednak ja wolę ten drugi sposób jak na razie. Jeszcze nie polubiłem jquery

/*function Button(text) {
	this.text = text  || 'Hello!';
};

Button.prototype.newButton = function() {
	var self = this;
	this.$element = $('<button>');
	this.$element.text(this.text);
	this.$element.click(function() {
		alert(self.text);
	});
	$('body').append(this.$element);
};

var btn1 = new Button('Hello!');
btn1.newButton();*/

function Button(text) {
	this.text = text  || 'Hello!';
};

Button.prototype.newButton = function() {
	var self = this;
	var itemList = document.getElementById('list');
    var newElem = document.createElement('button');
    newElem.innerHTML = this.text;
	newElem.addEventListener('click', function () {
		alert(self.text);
	});
    itemList.appendChild(newElem);
};

var btn1 = new Button('Hello!');
btn1.newButton();


