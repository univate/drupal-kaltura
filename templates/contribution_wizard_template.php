<?php
/*
 * Created Date: 18 Jun 2009
 * Created By: cormac1
 * Filename: filename
 * Title:
 * Description: 
 * 
 * 
 */
?>
<script type="text/javascript" src="./swfobject/swfobject.js"></script>
<div id="kcwWrap">
	<div id="kcw"></div>
</div>
<script type="text/javascript">
	var params = {
		allowScriptAccess: "always",
		allowNetworking: "all",
		wmode: "opaque"
	};
	
	var flashVars = {	"partnerId":1,
						"subpId":100,
						"uid":"{userId}",
						"sessionId":"{ks}",
						"kshowId":-1,
						"terms_of_use":"http:\/\/localhost\/\/kalturaCE\/customize\/terms_of_use.html",
						"afterAddEntry":"onContributionWizardAfterAddEntry",
						"close":"onContributionWizardClose",
						"showCloseButton":false};
	swfobject.embedSWF("http://localhost/kalturaCE/kcw/ui_conf_id/36200", "kcw", "680", "360", "9.0.0", false, flashVars, params);
</script>
