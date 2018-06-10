		//Restart the scoreboard - Requires admin password
		function admin_restart() {
			swal({
			  title: 'Restart System',
			  html: "<b>WARNING: This will restart the scoreboard and controller system, both will shutdown and restart.</b><br/><br/>The scores were saved last time the scoreboard updated and will reload automatically when rebooted.",
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Restart System',
			  closeOnConfirm: false
			}).then(function(isConfirm) {
			  if (isConfirm) {
				swal({
				  title: 'AUTHORISATION REQUIRED',
				  html: '<p><input id="test_mode_auth" class="form-control" placeholder="Admin Password" type="password">',
				  type: 'error',
				  showCancelButton: true,
				  closeOnConfirm: true,
				  allowEscapeKey: false,
				  confirmButtonText: 'Verify',
				  allowOutsideClick: false
				}).then(function(isConfirm) {
				  if (isConfirm) {
					$.get("verifyadmin.php?pass=" + $('#test_mode_auth').val(), function(data, status){
						if(data=="good") {
							$.ajax({
								type: "GET",
								url: "reboot.php",
								cache: false,
								success: function () { window.location="http://localhost/reboot.php"; },
								error: function () {}
							});
						} else {
							swal({
							  title: 'AUTHORISATION FAILED',
							  text: 'Password entered incorrectly. Action not completed.',
							  type: 'error',
							  closeOnConfirm: true,
							  allowEscapeKey: false,
							  confirmButtonText: 'OK',
							  allowOutsideClick: false
							})
						}
					});
				  }
				});
			  }
			})
		}
		
		//Shutdown the scoreboard - Requires admin password
		function admin_shutdown() {
			swal({
			  title: 'Shutdown System',
			  html: "<b>WARNING: This will shutdown the scoreboard and controller system, both will shutdown. The scoreboard will need to be turned off at the power source and turned back on to reboot.</b><br/><br/>The scores were saved last time the scoreboard updated and will reload automatically when rebooted.",
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Restart System',
			  closeOnConfirm: false
			}).then(function(isConfirm) {
			  if (isConfirm) {
				swal({
				  title: 'AUTHORISATION REQUIRED',
				  html: '<p><input id="test_mode_auth" class="form-control" placeholder="Admin Password" type="password">',
				  type: 'error',
				  showCancelButton: true,
				  closeOnConfirm: true,
				  allowEscapeKey: false,
				  confirmButtonText: 'Verify',
				  allowOutsideClick: false
				}).then(function(isConfirm) {
				  if (isConfirm) {
					$.get("verifyadmin.php?pass=" + $('#test_mode_auth').val(), function(data, status){
						if(data=="good") {
							$.ajax({
								type: "GET",
								url: "shutdown.php",
								cache: false,
								success: function () { window.location="http://localhost/shutdown.php"; },
								error: function () {}
							});
						} else {
							swal({
							  title: 'AUTHORISATION FAILED',
							  text: 'Password entered incorrectly. Action not completed.',
							  type: 'error',
							  closeOnConfirm: true,
							  allowEscapeKey: false,
							  confirmButtonText: 'OK',
							  allowOutsideClick: false
							})
						}
					});
				  }
				});
			  }
			})
		}
		
		// Zero all of the scores and update the scoreboard
		function admin_zero() {
			swal({
			  title: 'Zero Everything',
			  text: "Are you sure you want to zero the entire scoreboard?",
			  type: 'question',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, zero everything!',
			  closeOnConfirm: true
			}).then(function(isConfirm) {
			  if (isConfirm) {
				total_change('zero','admin');
				batsa_change('zero','admin');
				batsb_change('zero','admin');
				wickets_change('zero','admin');
				overs_change('zero','admin');
				target_change('zero','admin');
				updatetimer=5;
			  }
			})
		}
		
		//Shows a simple popup with some information about how the web interface works
		function admin_help() {
			swal({
			  title: 'Scoreboard Help',
			  html:
				'<p>You are connected to the scoreboard via a wireless connection it is broadcasting, ensure you stay within range otherwise the system will become unresponsive. The control panel checks regularly and will let you know if you lose the connection.</p>-----<p>The scoreboard is updated by pressing the + and - buttons under the totals displayed. The only exception is <b>TARGET</b> which requires you to enter the value. Changes are sent to the scoreboard 5 seconds after the last change has been requested - this allows multiple changes to be displayed together.</p>-----<p>There are some features to help the scorer when using the system:<br/><i>When you add/minus from BATSMAN A or BATSMAN B the TOTAL score is also changed by value selected</i><br/><br/><i>When you <b><u>press</u> zero</b> BATSMAN A or BATSMAN B you will be asked if you want to add 1 to the wickets total</i></p>-----<p>The load/save function allows you to save the current scores, at the moment the system only supports saving one set of scores.</p>'
				,
			  showCloseButton: true,
			})
		}