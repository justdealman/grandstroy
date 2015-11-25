$(document).ready(function() {
	$('.introduction .nav li:nth-child(5n), .news ul li:nth-child(4n), .objects ul li:nth-child(4n)').css({
		'margin-right': '-10px'
	});
	$('.rc table tr:nth-child(2n+1) td').css({
		'background': '#f1f1f1'
	});
	$('.rc table th:nth-child(2), .rc table td:nth-child(2)').css({
		'text-align': 'left'
	});
	$('.rc .grid li:nth-child(3n)').css({
		'margin-right': '-10px'
	});
});