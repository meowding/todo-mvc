var consoleClick = function(event) {
	console.log(event);
};
$on( qs('#clear-complited'), 'click', consoleClick);

var b = document.createElement('button');
$on( b, 'click', consoleClick);
b.innerHtml = 'new';

qs('#listTodo').appendChild(b);

$delegate( qs('#listTodo'), '.cl', 'click', consoleClick);