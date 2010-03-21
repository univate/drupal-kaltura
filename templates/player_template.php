<script type="text/javascript" src="./swfobject/swfobject.js"></script>
<div id="kplayer"></div>
<script type="text/javascript">
	var params = {
		allowscriptaccess: "always",
		allownetworking: "all",
		allowfullscreen: "true",
		wmode: "opaque"
	};
	var flashVars = {
		entryId: "{entryId}"
	};
	swfobject.embedSWF("http://localhost/kalturaCE/kwidget/wid/_1/ui_conf_id", "kplayer", "400", "360", "9.0.0", false, flashVars, params);
</script>
