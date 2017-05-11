$(document).ready(function(){
	console.log("Ready to work !");
	var precentBig = 0.00001;

	var bidsTotal = 0;
	var asksTotal = 0;
	
	var momentBids = 0;
	var momentSell = 0;

	$("#bidsTotal").bind("DOMSubtreeModified", function(){
		bidsTotalPRE = parseFloat($(this).html());
		if(bidsTotalPRE) {
			bidsTotal = bidsTotalPRE;
		}
	});
	
	$("#asksTotal").bind("DOMSubtreeModified", function(){
		asksTotalPRE = parseFloat($(this).html());
		if(asksTotalPRE) {
			asksTotal = bidsTotalPRE;
		}
	});

	function updateColor() {	
		momentBids = 0;
		momentSell = 0;
	
		$("#bidsTableBody tr").each(function(key, val){
			orderTotal = parseFloat($(val).find(".orderTotal").html());
			if(orderTotal > bidsTotal * precentBig) {
				momentBids += orderTotal;
				$(this).find("td").css("color", "#11AA11");
			} else {
				$(this).find("td").css("color", "#6f9397");
			}
		});
		
		$("#sellOrderBookTable tr").each(function(key, val){
			orderTotal = parseFloat($(val).find(".orderTotal").html());
			if(orderTotal > asksTotal * precentBig) {
				momentSell += orderTotal;
				$(this).find("td").css("color", "#AA1111");
			} else {
				$(this).find("td").css("color", "#6f9397");
			}
		});
		
		$(".sellOrders .head .name").html("SELL " + momentSell.toFixed(0));
		$(".buyOrders .head .name").html("BUY " + momentBids.toFixed(0));
	};
	
	setInterval(updateColor, 1000);

});