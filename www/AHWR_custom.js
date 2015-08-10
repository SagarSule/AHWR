/**
 * Notification that the UI is about to transition to a new screen.
 * Perform custom prescreen-transition logic here.
 * @param {String} currentScreenId 
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue transtion; false to halt transition
 */

url = "http://192.168.1.20:8080/";
url1 = "http://192.168.1.21:8080/";
lang = 0;
vol = 0.8;
var myVar;

phoneui.prePageTransition = function(currentScreenId, targetScreenId) {
  // add custom pre-transition code here
  // return false to terminate transition
  return true;
}

/**
 * Notification that the UI has transitioned to a new screen.
 * 
 * @param {String} newScreenId 
 */
phoneui.postPageTransition = function(newScreenId) {
  
}

/**
 * Notification that the page's HTML/CSS/JS is about to be loaded.
 * Perform custom logic here, f.e. you can cancel request to the server.
 * @param {String} targetScreenId 
 * @returns {boolean} true to continue loading; false to halt loading
 */
phoneui.prePageLoad = function(targetScreenId) {
  // add custom pre-load code here
  // return false to terminate page loading, this cancels transition to page as well
  return true;
}

/**
 * Notification that device orientation has changed. 
 * 
 * @param {String} newOrientation 
 */
phoneui.postOrientationChange = function(newOrientation) {
  
}

/**
 * Called when document is loaded.
 */

allOff = function()
{
	$('#m1-AHWR-a_RB').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-a_TFSB').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-a_CLUB').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-a_FTB').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-a_NFSB').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-a_IB').css({'background-color': 'rgb(0,62,134)'});	
	$('#m1-AHWR-a_SFSB').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-a_DT').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-a_ST').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-a_wash').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-a_pool').css({'background-color': 'rgb(0,62,134)'});
	
	$('#m1-AHWR-a_RB').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_TFSB').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_CLUB').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_FTB').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_NFSB').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_IB').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_SFSB').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_DT').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_ST').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_wash').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-a_pool').css({'color': '#00B2CB'}); //Light Blue
	
	$('#m1-AHWR-m_NF').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-m_TNF').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-m_CAL').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-m_SSF').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-m_SF').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-m_FHO').css({'background-color': 'rgb(0,62,134)'});	
	$('#m1-AHWR-v_MC').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-v_NF').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-v_TNF').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-v_CAL').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-v_SSF').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-v_SF').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-v_FHO').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-h_MC').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-h_IFTM').css({'background-color': 'rgb(0,62,134)'});
	$('#m1-AHWR-h_REBOOT').css({'background-color': 'rgb(0,62,134)'});
	
	$('#m1-AHWR-m_NF').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-m_TNF').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-m_CAL').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-m_SSF').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-m_SF').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-m_FHO').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-v_MC').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-v_NF').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-v_TNF').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-v_CAL').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-v_SSF').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-v_SF').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-v_FHO').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-h_MC').css({'color': '#00B2CB'}); //Light Blue
	$('#m1-AHWR-h_IFTM').css({'color': '#00B2CB'}); //Light Blue	
	$('#m1-AHWR-h_REBOOT').css({'color': '#00B2CB'}); //Light Blue	
}


phoneui.documentReadyHandler = function() {
	$.get(url + "?Stop=0", function(data,status){});
	lang = 0;
	clearInterval(myVar);
	$.get(url + "?Lang=0", function(data,status){
		$('#m1-AHWR-lang').css({'background-color': 'rgb(179,126,40)'});
		$('#m1-AHWR-lang').html('SELECT HINDI');
	});
	$('#m1-AHWR-area').css({'background-color': 'rgb(196,18,47)'});//rgb(126,139,40)'});
	allOff();
//	allOff1();​
}

allOn = function()
{
	$('#m1-AHWR-a_RB').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_TFSB').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_CLUB').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_FTB').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_NFSB').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_IB').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_SFSB').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_DT').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_ST').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_wash').css({'background-color': 'rgb(0,178,203)'});
	$('#m1-AHWR-a_pool').css({'background-color': 'rgb(0,178,203)'});
	
	$('#m1-AHWR-a_RB').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_TFSB').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_CLUB').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_FTB').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_NFSB').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_IB').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_SFSB').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_DT').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_ST').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_wash').css({'color': '#003E86'}); //Dark Blue
	$('#m1-AHWR-a_pool').css({'color': '#003E86'}); //Dark Blue
}




/**
 * Perform custom preprocessing or actions before submitting form. 
 * Common presubmission tasks include form validation and 
 * preprocessing of form data.
 * 
 * @param {boolean} true if all OK to proceed with form submission; 
 *                  false implies terminate form submission process
 * @param {Object} data results of form processing; error message if isSuccess == false
 * @return {boolean} true if OK; otherwise false
 */
phoneui.preSubmitForm_m1_AHWR = function(form) {
  // add custom presubmission code here, e.g., form validation & error handling
  // return false to terminate form submission
  return true;
}

/**
 * Perform custom actions upon return from form submission.
 * 
 * @param {boolean} isSuccess true if all OK; otherwise false
 * @param {Object} data results of form processing; error message if isSuccess == false
 * @return {boolean} true if OK; otherwise false
 */
phoneui.postSubmitForm_m1_AHWR = function(isSuccess, data) {
  // add custom postubmission processing code here,
  // e.g., parse and process results & update UI controls with data as needed
  // return false to terminate form processing
  var result = true;
  if (isSuccess) {
    // process data
    result = true;
  } else {
    // submit failed
    // data = error msg
    result = false;
  }
  return result;
}

allOff1 = function()
{
	
}

function myTimer()
{
	$.get(url + "?isDone=0", function(data,status){
	if (data == '1')
	{
		allOff();
		clearInterval(myVar);
	}
});
}

function myTimer1()
{
	$.get(url1 + "?isDone=0", function(data,status){
	if (data == '1')
	{
		allOff();
		clearInterval(myVar);
	}
});
}

function myTimer2()
{
	$.get(url + "?isDone=1", function(data,status){
	if (data == '1')
	{
		allOff();
		clearInterval(myVar);
	}
});
}