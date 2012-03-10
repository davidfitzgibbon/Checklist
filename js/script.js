$(function(){

	function get_percent_complete(){
		var total = 0;
		var done = 0;
		var work = 0;
		var perc = 0;

		$('table td :not["title"]').each(function(){
			total++;
		});

		$('table .done').each(function(){
			done++;
		});

		$('table .work').each(function(){
			work ++;
		});

		// console.log('total: '+total);
		// console.log('done: '+done);
		// console.log('work: '+work);

		perc = Math.floor((((done + (work/2))/ total) * 100));
		done_perc = Math.floor((((done)/ total) * 100));
		work_perc = Math.floor(((((work/2))/ total) * 100));

		// console.log('total: '+perc+'%');
		// console.log('done: '+done_perc+'%');
		// console.log('work: '+work_perc+'%');

		$('h1 span').html(perc);

		$('#feedback .done').css('width', done_perc+'%');
		$('#feedback .work').css('width', work_perc+'%');
	}

	$('table').click(function(e){

		if(e.target.tagName == "A"){

			var parent = $(e.target).parent();

			var test = parent.attr('class');

			console.log(test);

			if(test === 'todo'){
				parent.removeClass('todo');
				parent.addClass('work');

				parent.prevAll().removeClass('todo');
				parent.prevAll().addClass('done');
			} 

			if(test === 'work'){
				parent.removeClass('work');
				parent.addClass('done');
				
				parent.prevAll().removeClass('work');
				parent.prevAll().addClass('done');
			}

			if(test === 'done'){
				parent.removeClass('done');
				parent.addClass('todo');
				
				parent.nextAll().removeClass('done work');
				parent.nextAll().addClass('todo');
			}

			$('.title').removeClass('work todo done');

			get_percent_complete();

			return false;
		}
	});			

	get_percent_complete();
});