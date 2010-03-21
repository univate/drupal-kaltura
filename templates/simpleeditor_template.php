<?php
/*
 * Created Date: 17 Jun 2009
 * Created By: cormac1
 * Filename: filename
 * Title:
 * Description: 
 * 
 * 
 */
?>
<script type="text/javascript" src="./swfobject/swfobject.js"></script>
<div id="kseWrap"><div id="kse"></div></div>
<script type="text/javascript">
	var params = {
		allowscriptaccess: "always",
		allownetworking: "all",
		wmode: "opaque"
	};
	
	var flashVars = {"partnerId":1,"subpId":100,
					 "uid":"{userId}",
					 "ks":"{ks}","kshowId":-1,
					 "entryId":"{entryId}",
					 "backF":"onSimpleEditorBackClick",
					 "saveF":"onSimpleEditorSaveClick"};
	swfobject.embedSWF("http://localhost/kalturaCE/kse/ui_conf_id/36300", "kse", "890", "546", "9.0.0", false, flashVars, params);
</script>
