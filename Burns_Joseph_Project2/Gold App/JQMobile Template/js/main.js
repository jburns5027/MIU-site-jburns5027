// write your javascript in here
parsewOname=function(data){
// Uses form Data here

};
$(document).ready(function(){

var wOname = $("#workoutname");

wOname.validate({

invalidHandler: function(form, validator){},
submitHandler: function(){
			data = wOname.seralizeArray();
			parsewOnameForm(data);
			
			}
		});

}); 