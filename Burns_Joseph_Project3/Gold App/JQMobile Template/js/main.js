// write your javascript in here
 var parsewOnameForm=function(data){
// Uses form Data here
	
};
$(document).ready(function(){

var wOname = $('#recoredrunningform'),
	rErrorslink= $('#rErrorslink')

;

wOname.validate({
	invalidHandler: function(form, validator){
		rErrorslink.click();
		var html = '';
		for(var key in validator.submitted){
				var label = $('label[for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>' + fieldName + '</li>';
		};
		$("#runningErrors ul").html(html);

},
submitHandler: function(){ 
		var	data = wOname.serializeArray();
			parsewOnameForm(data);
			
			}
		});

}); 