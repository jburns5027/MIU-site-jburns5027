// write your javascript in here
parsewOname=function(data){
// Uses form Data here

};
$(document).ready(function(){

var wOname = $("#workoutname"),
	rErrorslink= $("#rErrorslink")

;

wOname.validate({

invalidHandler: function(form, validator){
		rErrorslink.click();
		var html = '';
		for(var key in validator.submitted){
				var label = $('label[for^="''+ key +"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label')
				var fieldName = legend.length ? legend.text : label.text();
				html += '<li>' + fieldname + '</li>';
		};
		$("#runningErrors ul").html(html);

},
submitHandler: function(){ 
			data = wOname.seralizeArray();
			parsewOnameForm(data);
			
			}
		});

}); 