$("#submit").on("click",function (){
	var id=$('#id').val();
    $.ajax({
    	type:"GET",
    	url:"http://jsonplaceholder.typicode.com/users/"+id+"",
    	success:function (data) {
    		 $('#name').text(data.name);
    	     $('#username').text(data.username);
    		 $('#email').text(data.address.street);
    		
    	},
    	failure:function(err){
        console.log(err);
    	}
    })	
})

