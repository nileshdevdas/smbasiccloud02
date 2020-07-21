$(document).ready(()=>{
	console.log("categories-handler.js----Loaded")
	var table = $('#categories-data-table').DataTable({
		"language": {
		      "emptyTable": "No Channel Data Found"
		 },
	    "responsive": true,
        "dom": 'Bfrtip',
        "buttons": [exportButton,columnVisibility],
         "ajax": {
             "url": "/smscategory",
             dataSrc : (json) => {
            	 return json.listResponse;
             },
             beforeSend : (xhr)=>{
            	 showModal();
             },
             complete : (xhr)=>{
            	 hideModal();
             }
         }, 
         columns : [
        	 {"data": ""},
        	 {"data": "categoryName"},
        	 {"data": "priority"},
        	// {"data": "status"}
        	 {"data": "minThread"},
        	 {"data": "maxThread"},
        	 {"data": "jobType"},
        	// {"data": "interval"},
        	 {"data": "loadOnStartup"},
        	
        	 {"data": "description"},
        	 
        	 ],
         columnDefs : [
             {
     	  		"render" : (data, type, row, meta)=>{
     	  			return renderActionButtons(data,type,row,meta);
     	  		},
     	  		"targets" : 0,
     	  		"width": "20%"
     	  		
              }
        ]
	});
    $("#categories-create-form").on("submit", createCategory)
    $("#categories-edit-form").on("submit", editCategoryFunction)
     
     $("#jobType").change(function() { 
    	 if(this.value=="RUN_ONCE"){
    		 $("#schedularDivId").show();
    		// $("#interval").prop('disabled', true);
    		// $("#interval").val("");
    		 
    	 }else{
    		 $("#schedularDivId").hide();
    		 $("#fromdate").val("");
    		 
    		// $("#interval").prop('disabled', false);
    		// $("#interval").val("");
    	 }	 
     });
    
    $("#jobTypeEdit").change(function() { 
   	 if(this.value=="RUN_ONCE"){
   		 $("#schedularEditDivId").show();
   		//$("#edit_interval").prop('disabled', true);
		 //$("#edit_interval").val("");
   	 }else{
   		 $("#schedularEditDivId").hide();
   		 $("#todate").val("");
   		 
   		//$("#edit_interval").prop('disabled', false);
		// $("#edit_interval").val("");
   	 }	 
    });
    
    
    /**
     * To reset Form
     */
    $("button").click(function() {
    	$("#categories-create-form")[0].reset();
    	  $("#scheduleddatediv").hide();
        $("#fromdate").prop('required',false);
    	});
    
    
    /*$(function () {
        $("#jobType").change(function () {
            var selectedText = $(this).find("option:selected").text();
            var selectedValue = $(this).val();
           // alert("Selected Text: " + selectedText + " Value: " + selectedValue);
            if(selectedValue=="RUN_ONCE"){
            	 $("#scheduleddatediv").show();
            	 $("#fromdate").prop('required',true);
            }else{
            	 $("#scheduleddatediv").hide();
            	 $("#fromdate").prop('required',false);
            }
        });
    });
    $(function () {
        $("#jobTypeEdit").change(function () {
            var selectedText = $(this).find("option:selected").text();
            var selectedValue = $(this).val();
           // alert("Selected Text: " + selectedText + " Value: " + selectedValue);
            if(selectedValue=="RUN_ONCE"){
            	 $("#scheduleddatedivedit").show();
            	 $("#todate").prop('required',true);
            }else{
            	 $("#scheduleddatedivedit").hide();
            	 $("#todate").prop('required',false);
            	 $("input[name='schedularTime']").val(" ");
            }
        });
    });*/
    
    setInterval(()=>{
		console.log("Timing out ...");
		//var table = $("#categories-data-table").DataTable();
		//table.ajax.reload();
		
		//checkServerAvailbility();
		}, 5000)

	checkServerAvailbility();
    
});


function renderActionButtons(data,type,row,meta){
			
			if(row.status=="INVALID" || row.status=="STOPPED" || row.status=="No SP Mapped"){
				
				return  "<button class='rounded btn-xs btn-primary' id='start_"+row.categoryId+"' onclick='startCategory(this,event)' title='Start'  data-row='" + JSON.stringify(row)+"'><i class='fa fa-check-circle'></i></button> " 
				+"<button class='rounded btn-xs btn-primary' id='stop_"+row.categoryId+"'  disabled onclick='stopCategory(this,event)' title='Already Stop/Invalid' style='cursor: not-allowed' data-row='" + JSON.stringify(row)+"'><i class='fa fa-stop-circle'></i></button> " 
				+"<button class='rounded btn-xs btn-primary edit' onclick='viewCategory(this,event)' title='Edit' data-row='" + JSON.stringify(row)+"'><i class='fa fa-edit'></i></button> " 
				//+"<button class='rounded btn-xs btn-danger delete' onclick='deleteCategory(this,event)' title='Delete' data-row='" + JSON.stringify(row)+"'><i class='fa fa-trash'></i></button> " ;
			}
			else if(row.status=="RUNNING"){
				
				return  "<button class='rounded btn-xs btn-primary' id='start_"+row.categoryId+"' disabled onclick='startCategory(this,event)' title='Already Running' style='cursor: not-allowed' data-row='" + JSON.stringify(row)+"'><i class='fa fa-check-circle'></i></button> " 
				+"<button class='rounded btn-xs btn-primary' id='stop_"+row.categoryId+"' onclick='stopCategory(this,event)' title='Stop' data-row='" + JSON.stringify(row)+"'><i class='fa fa-stop-circle'></i></button> "
				+"<button class='rounded btn-xs btn-primary' onclick='viewCategory(this,event)' title='Edit' data-row='" + JSON.stringify(row)+"'><i class='fa fa-edit'></i></button> "
			//	+"<button class='rounded btn-xs btn-danger' disabled onclick='deleteCategory(this,event)' title='First Stop Then Delete' style='cursor: not-allowed' data-row='" + JSON.stringify(row)+"'><i class='fa fa-trash'></i></button> " ;
			}
			

			    			
}


function deleteCategory(elem,event){
	 var category= $(elem).attr("data-row");
	 console.log(category);
	 var categoryObj = JSON.parse(category);

	xhrreq = $.ajax({
        url: "/smscategory/" + categoryObj.categoryName,
        method: "DELETE",
        contentType: "application/json", 
        beforeSend : (xhr)=>{
			 addCSRFToken(xhr); 
			 showModal();
		 }
    });
    xhrreq.done((result) => {
        var table = $("#categories-data-table").DataTable()
        table.ajax.reload(()=>{},false);
        showMessage("info", "Provider " + categoryObj.categoryName +" Deleted Successully ");
    });
    xhrreq.fail(()=>{
    	showMessage("error", "Failed Deleting Provider " + categoryObj.categoryName);
    });
}

function startCategory(elem,event){
	 var category= $(elem).attr("data-row");
	// console.log(category);
	 var categoryObj = JSON.parse(category);
	 $('#start_'+categoryObj.categoryId).attr("disabled", true);
	 
	xhrreq = $.ajax({
        url: "/smscategory/startsms",
        method: "POST",
        data: JSON.stringify(categoryObj),
        contentType: "application/json", 
        beforeSend : (xhr)=>{
			 addCSRFToken(xhr); 
			 showModal();
		 }
    });
    xhrreq.done((result) => {
        var table = $("#categories-data-table").DataTable()
        table.ajax.reload(()=>{},false);
        if(result.respCode == 0){
            showMessage("info", "Start " + categoryObj.categoryName +"  Successully ");
        }else{
        	showMessage("error", "Failed To start " + categoryObj.categoryName + ", " +result.respMessage);
        }

    });
    xhrreq.fail(()=>{
    	 $('#start_'+categoryObj.categoryId).attr("disabled", false);
    	showMessage("error", "Failed To start " + categoryObj.categoryName);
    });
}

function stopCategory(elem,event){
	 var category= $(elem).attr("data-row");
	 //console.log(category);
	 var categoryObj = JSON.parse(category);
	 
	 $('#stop_'+categoryObj.categoryId).attr("disabled", true);
	 
	xhrreq = $.ajax({
       url: "/smscategory/stopsms",
       method: "POST",
       data: JSON.stringify(categoryObj),
       contentType: "application/json", 
       beforeSend : (xhr)=>{
			 addCSRFToken(xhr); 
			 showModal();
		 }
   });
   xhrreq.done((result) => {
       var table = $("#categories-data-table").DataTable()
       table.ajax.reload(()=>{},false);
       showMessage("info", "Stop " + categoryObj.categoryName +"  Successully ");
   });
   xhrreq.fail(()=>{
	   $('#stop_'+categoryObj.categoryId).attr("disabled", false);
   	showMessage("error", "Failed To Stop " + categoryObj.categoryName);
   });
}

function createCategory(evt) {
    evt.preventDefault();
    var category_form = $("#categories-create-form")
    var unindexed_array = category_form.serializeArray();
    var categoriesVO= {};
    $.map(unindexed_array, function (n, i) {
    	categoriesVO[n['name']] = n['value'];
    });
    console.log(categoriesVO)

     var valErrors = validateSMSCategoryData(categoriesVO);
     if (valErrors.isValid){
        xhrreq = $.ajax({
            url: "/smscategory",
            method: "POST",
            data: JSON.stringify(categoriesVO),
            contentType: "application/json",
            beforeSend : (xhr)=>{
    			 addCSRFToken(xhr); 
    			 showModal();
    		 }
        });
        xhrreq.done((result) => {
        	var table = $("#categories-data-table").DataTable()
            table.ajax.reload(()=>{},false);
            $("#options_body").toggle(500);   
        	showMessage("info", "Category" + categoriesVO.categoryName +" Added Successully ");
        });
        xhrreq.fail((error)=>{
        	showMessage("error", "Failed Adding Category  " + categoriesVO.categoryName , error);
        });	
 }else{
 showMessage("error", valErrors.errors.toString().replace(/,/g, ""));
 }
}

function editCategoryFunction(evt) {
    evt.preventDefault();
    var category_form = $("#categories-edit-form")
    var unindexed_array = category_form.serializeArray();
    var categoriesVO= {};
    $.map(unindexed_array, function (n, i) {
    	categoriesVO[n['name']] = n['value'];
    });
    var valErrors = validateSMSCategoryData(categoriesVO);
     if (valErrors.isValid){        
    	 
    	 xhrreq = $.ajax({
            url: "/smscategory/editcategory",
            method: "PUT",
            data: JSON.stringify(categoriesVO),
            contentType: "application/json",
            beforeSend : (xhr)=>{
    			 addCSRFToken(xhr); 
    			 showModal();
    		 }
        });
        xhrreq.done((result) => {
        	var table = $("#categories-data-table").DataTable()
            table.ajax.reload(()=>{},false);
            $("#edit_options_body").toggle(500);   
        	showMessage("info", "Category" + categoriesVO.categoryName +" Updated Successully ");
        });
        xhrreq.fail((error)=>{
        	showMessage("error", "Failed To Update Category  " + categoriesVO.categoryName , error);
        });	
 }else{
	 showMessage("error", valErrors.errors.toString().replace(/,/g, ""));
 }
}

function viewCategory(elem,event){
	var editcategory= $(elem).attr("data-row");
	var editcategoryObj = JSON.parse(editcategory);
    
	Object.entries(editcategoryObj).forEach(([key, value]) => {
	
		$('#categories-edit-form').find("[name='"+ key +"']").val(value);
		
		
	});
	var jobtype=$("#jobTypeEdit").val();
	if(jobtype=="SCHEDULED"){
		 $("#schedularEditDivId").show();
		 
	 }else{
		 $("#schedularEditDivId").hide();
		 $("#todate").val("");
	 }
	
	if($("#edit_options_body").is(":visible")){
		$("#edit_options_body").toggle(500);
	}
	
	if($("#options_body").is(":visible")){
		$("#options_body").toggle(500);
	}
	
	$("#edit_options_body").toggle(500);
	
	
	
}

/**
 * Adds custom button to add a vendor
 */
function addCategoryButton() {
    return {
        text: '<i class="fa fa-plus"></i> Add Category',
        action: () => {
        	if($("#edit_options_body").is(":visible")){
        		$("#edit_options_body").toggle(500);
        	}
            $("#options_body").toggle(500);
        },
    }
}


function editCategoryButton() {
    return {
        text: '<i class="fa fa-file"></i> Edit  Category',
        action: () => {
            $("#edit_options_body").toggle(500);
        },
    }
}


function checkServerAvailbility(){
	
	
		xhrreq = $.ajax({
	        url: "/smscategory/checksmsserver",
	        method: "GET",
	       
	        contentType: "application/json",
	        beforeSend : (xhr)=>{
				 addCSRFToken(xhr); 
				 showModal();
			 }
	    });
	    xhrreq.done((result) => {
	    	
	    	$("#smsserveravailable").css('background-color', 'green');
	    	$("#smsservernotavailable").css('background-color', 'grey');
	    	
	    });
	    xhrreq.fail((error)=>{
	    	$("#smsservernotavailable").css('background-color', 'red');
	    	$("#smsserveravailable").css('background-color', 'grey');
	    });
	
}

function exportButton() {
    return {
     text: '<i class="fa fa-file-excel"></i>Excel export ',
     action: () => {

 console.log("Downloading sms category report...");
    showModal();
 var urlToSend = "/smscategory/downloadesmscategoryreport";
 var req = new XMLHttpRequest();
 
    req.open("POST", urlToSend, true);
 req.setRequestHeader("Content-type", "application/json");
 addCSRFToken(req);
 req.responseType = "arraybuffer";
 
 req.onreadystatechange = function() {
   if(req.readyState == 4 && req.status == 200) {
      hideModal();
         if(req.response.byteLength == 0){
             bootbox.alert({
               title:"SMS Category Report",
               message:"No Data Found, Please apply appropriate filter criteria"
             });
         }else{

           let a = document.createElement('a');
           var blob = new Blob([req.response], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
           var objectUrl = URL.createObjectURL(blob);

           a.href = objectUrl;
           a.download = "SMS Category.xlsx";

           a.click();
           window.URL.revokeObjectURL(objectUrl);
         }
       }
 }
 req.send();
     },
 }
  
}

