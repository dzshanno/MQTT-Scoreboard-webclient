		// Simple function to submit the current score values to the PHP script that updates the Arduino
		function submitForm(){
			var formData2 = padToSend(total, 3) + padToSend(wickets, 1) + padToSend(overs, 2) + padToSend(batsa, 3) + padToSend(batsb, 3) + padToSend(target, 3); 

            $.ajax({
                type: "GET",
                url: "scoreboard.php?data=" + formData2,
                cache: false,
                success: function () {},
                error: function () {}
            });
        }