$(function() {
	//$(document).on("ready", function(){ getParticulars(); });
	$thisday = getThisDay();
	var last_id;
	$last_id = last_id;
    });
$(function() {
	$(document).on("click", "a#cart_list", function(){ getCartList(this);});
	$(document).on("click", "a#create_cart_form", function(){ getCreateForm(this); });
	//$(document).on("click", "button#add_cart", function(){ Validate(); });
	$(document).on("click", "a.delete_confirm", function(){ deleteConfirmation(this); });
	$(document).on("click", "button.delete", function(){ deleteCart(this); });
	$(document).on("dblclick", "td.edit", function(){ makeEditable(this); });
	$(document).on("blur", "input#editbox", function(){ removeEditable(this) });
});

function removeEditable(element) {

	$('#indicator').show();

	var Cart = new Object();
	Cart.id = $('.current').attr('cart_id');
	Cart.field = $('.current').attr('field');
	Cart.newvalue = $(element).val();

	var cartJson = JSON.stringify(Cart);

	$.post('Controller.php',
		{
			action: 'update_field_data',
			cart: cartJson
		},
		function(data, textStatus) {
			$('td.current').html($(element).val());
			$('.current').removeClass('current');
			$('#indicator').hide();
		},
		"json"
	);
}

function makeEditable(element) {
	$(element).html('<input id="editbox" size="'+  $(element).text().length +'" type="text" value="'+ $(element).text() +'">');
	$('#editbox').focus();
	$(element).addClass('current');
}

function deleteConfirmation(element) {
	$("#delete_confirm_modal").modal("show");
	$("#delete_confirm_modal input#id").val($(element).attr('cart_id'));
}

function deleteCart(element) {

	var Cart = new Object();
	Cart.id = $("#delete_confirm_modal input#id").val();

	var cartJson = JSON.stringify(Cart);

	$.post('Controller.php',
		{
			action: 'delete_cart',
			cart: cartJson
		},
		function(data, textStatus) {
			getCartList(element);
			$("#delete_confirm_modal").modal("hide");
		},
		"json"
	);
}
function getParticulars(){
	    $.getJSON("selections.json", function(json){
		var data = json;
		$.each( data, function( index, styles){
		    var stylestype = styles.type;
		    var stylescolor = styles.color;
		    var stylestypeid = styles.id;
		    //break;
		    return stylestypeid;

		});
})
}
function getCartList(element) {

	$('#indicator').show();

	$.post('Controller.php',
		{
			action: 'get_cart'
		},
		function(data, textStatus) {
			renderCartList(data);
			//getParticulars();
			$('#indicator').hide();
		},
		"json"
	);
}

function renderCartList(jsonData) {

	var table = '<table width="600" cellpadding="5" class="table table-hover table-bordered"><thead><tr><th scope="col">Id</th><th scope="col">Type</th><th scope="col">Color</th><th scope="col">Quantity</th><th scope="col">Deliver By</th><th scope="col">Email Address</th><th scope="col">Status</th><th scope="col"></th></tr></thead><tbody>';

	$.each( jsonData, function( index, cart){
		var typename =
		table += '<tr>';
		table += '<td field="id" cart_id="'+cart[0]+'">'+cart[0]+'</td>';
		table += '<td class="edit" field="type" cart_id="'+cart.id+'">'+cart.type+'</td>';
		table += '<td class="edit" field="color" cart_id="'+cart.id+'">'+cart.color+'</td>';
		table += '<td class="edit" field="quantity" cart_id="'+cart.id+'">'+cart.quantity+'</td>';
		table += '<td class="edit" field="deliver_by" cart_id="'+cart.id+'">'+cart.deliver_by+'</td>';
		table += '<td class="edit" field="email" cart_id="'+cart.id+'">'+cart.email+'</td>';
		table += '<td class="edit" field="status" cart_id="'+cart.id+'">'+cart.status+'</td>'
		table += '<td><a href="javascript:void(0);" cart_id="'+cart.id+'" class="delete_confirm btn btn-danger"><i class="icon-remove icon-white"></i></a></td>';
		table += '</tr>';
		last_id = cart[0];
    });

	//console.log("last_id : "+last_id);
	table += '</tbody></table>';

	$('div#content').html(table);
}


function addCart(element) {

	$('#indicator').show();

	var Cart = new Object();
	//Cart.id = $('#id').val()+'1';
	Cart.type = $('#type').val();
	Cart.color = $('#color').val();
	Cart.quantity = $('input#quantity').val();
	Cart.deliver_by = $('input#deliver_by').val();
	Cart.email = $('input#email').val();
	Cart.status = $('input#status').val();
	//Cart.color = $('#color option:selected').text();val

	var cartJson = JSON.stringify(Cart);


	var jqxr = $.post('Controller.php',
		{
			action: 'add_cart',
			cart: cartJson
		},
		function(data, textStatus) {
			last_id = data;
			the_id = last_id.replace(/"/g,"");
			$("#display_order_modal").modal("show");
			$("#display_order_modal input#id").val(the_id);
		},
		""
	)
	.fail(function(){
	   // console.log("fail");
	})
	.done(function(){
	    //console.log("success");
	    //console.log("success data id:"+data)
	})
	.always(function(){
	    var Output = new Object();
	    the_id = last_id.replace(/"/g,"");
	    Output.id = the_id;
	    Output.type = $('#type option:selected').text();
	    Output.color = $('#color option:selected').text();

	    $('div#content').empty();
	    $('#indicator').hide();
	    var table = '<table width="600" cellpadding="5" class="table table-hover table-bordered"><thead><tr><th scope="col">Id</th><th scope="col">Type</th><th scope="col">Color</th><th scope="col">Quantity</th><th scope="col">Deliver By</th><th scope="col">Email Address</th><th scope="col">Status</th><th scope="col"></th></tr></thead><tbody>';



		var typename =
		table += '<tr>';
		table += '<td field="id" cart_id="'+Output.id+'">'+Output.id+'</td>';
		table += '<td class="edit" field="type" cart_id="'+Output.id+'">'+Output.type+'</td>';
		table += '<td class="edit" field="color" cart_id="'+Output.id+'">'+Output.color+'</td>';
		table += '<td class="edit" field="quantity" cart_id="'+Output.id+'">'+Cart.quantity+'</td>';
		table += '<td class="edit" field="deliver_by" cart_id="'+Output.id+'">'+Cart.deliver_by+'</td>';
		table += '<td class="edit" field="email" cart_id="'+Output.id+'">'+Cart.email+'</td>';
		table += '<td class="edit" field="status" cart_id="'+Output.id+'">Ordered</td>'
		table += '<td><a href="javascript:void(0);" cart_id="'+Output.id+'" class="delete_confirm btn btn-danger"><i class="icon-remove icon-white"></i></a></td>';
		table += '</tr>';
	    table += '</tbody></table>';

	$('div#content').html(table);
	})
}


function getCreateForm(element) {
	var form = '<div class="input-prepend">';
		form +=	'<span class="add-on">Type</span>';
		form +=	'<select id="type" required name="type" ><option value=0>Select</option><option value=1>Widget (Standard)</option><option value=2>Widget Pro</option><option value=3>Widget Xtreme</option></select>';
		form +=	'</div><br/><br/>';

		form +=	'<div class="input-prepend">';
		form +=	'<span class="add-on">Color</span>';
		form +=	'<select required id="color" name="color" class="input-xlarge" ><option value=0>Select</option><option value=1>Red</option><option value=2>Blue</option><option value=3>Yellow</option></select>';
		form +=	'</div><br/><br/>';

		form +=	'<div class="input-prepend">';
		form +=	'<span class="add-on"> Quantity</span>';
		form +=	'<input required type="number" id="quantity" name="quantity" value="1"  />';
		form +=	'</div><br/><br/>';

		form +=	'<div class="input-prepend">';
		form +=	'<span class="add-on add-on-area "><i class="icon-home icon-black"></i> Deliver By</span>';
		form +=	'<input type="date" id="deliver_by" name="deliver_by" value="'+$thisday+'" class="input-xlarge" onkeyup="checkDate()" />';
		form +=	'</div><br/><br/>';

		form +=	'<div class="input-prepend">';
		form +=	'<span class="add-on"> Email</span>';
		form +=	'<input type="email" id="email" name="email" required />';
		form +=	'</div><br/><br/>';

		form +=	'<div class="control-group">';
		form +=	'<div class="">';
		form +=	'<button type="button" onclick="Validate()" id="add_cart" class="btn btn-primary"><i class="icon-ok icon-white"></i> Add Order</button>';
		form +=	'</div>';
		form +=	'</div>';
		form += '<div id="datewarn"></div>';
		$('div#content').html(form);
}
function Validate()
            {
								//alert("validation");
								var e = document.getElementById("color");
								var f = document.getElementById("type");
								var g = document.getElementById("email");
                var stre = e.options[e.selectedIndex].value;
								var strf = f.options[e.selectedIndex].value;
								var strg = g.value;
								//console.log("validate input "+stre)
                var strUE = e.options[e.selectedIndex].text;
								//console.log("validate text "+strUE)
								var strUF = f.options[e.selectedIndex].text;
                if(stre==0)
                {
                    alert("Please select a color");
										return false;
                }
								else if(strf==0)
                {
                    alert("Please select a widget type");
										return false;
                }
								else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(strg))
								  {
										addCart();
								    return (true)
								  }
								    alert("You have entered an invalid email address!")
								    return (false)
								}

            //}
