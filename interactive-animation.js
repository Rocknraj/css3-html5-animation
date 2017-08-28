$('#play-btn').click(function() {
	$('#bird').addClass('play');
	$('#bird').removeClass('pause');
});

$('#pause-btn').click(function() {
	$('#bird').addClass('pause');
	$('#bird').removeClass('play');
});

$('#horizontal').click(function() {
	$('#bird').addClass('horz');
	$('#bird').removeClass('vert');
});

$('#vertical').click(function() {
	$('#bird').addClass('vert');
	$('#bird').removeClass('horz');
});