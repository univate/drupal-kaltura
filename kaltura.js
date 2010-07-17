function onPlayerAddClick (kshowId,entryId,pd_extraData) {
  var kaltura = Drupal.settings.kaltura;
  if (kshowId && kshowId != -1)
    kalturaInitModalBox(kaltura.contribution_wizard_url + kshowId);
  if (entryId && entryId != -1 && kaltura.roughcut)
    kalturaInitModalBox(kaltura.contribution_wizard_url + 'entry-' + entryId);
}

function onPlayerEditClick (kshowId,entryId,pd_extraData) {
  var kaltura = Drupal.settings.kaltura;
  if (kshowId && kshowId != -1 && kalutra.kshow)
    kalturaInitModalBox(kaltura.editor_url + "/" + kshowId + "/kshow/user_id@"+ kaltura.uid +", { width: "+ kaltura.editor_width + " , height: "+ kaltura.editor_width +" }" );
  if (entryId && entryId != -1 && kaltura.roughcut)
    kalturaInitModalBox(kaltura.editor_url + "/" + entryId + "/entry/user_id@"+ kaltura.uid +", { width: "+ kaltura.editor_width + " , height: "+ kaltura.editor_width +" }" );
}

/**
 * Behavior to find all the kaltura tags and replace them with the player
 */
Drupal.behaviors.kalturaPlayer = function (context) {
  $('div.kaltura-player:not(.kaltura-player-processed)').each(function (i) {
    var media = Drupal.settings.kaltura[$(this).html()]
    $(this).html('<div id="kaltura-player-' + media.media_id + '" class="kaltura_wrapper"' + media.custom_style + media.js_events + "></div>");
    var kaltura_swf = new SWFObject(media.swfUrl, "kaltura_player_" + media.media_id, media.width, media.height, '9', '#000000')
    kaltura_swf.addParam("wmode", "opaque");
    kaltura_swf.addParam("flashVars", media.flashVars);
    kaltura_swf.addParam("allowScriptAccess", "always");
    kaltura_swf.addParam("allowFullScreen", "TRUE");
    kaltura_swf.addParam("allowNetworking", "all");
    kaltura_swf.write("kaltura-player-"+ media.media_id);
    // fill embed box
    $('textarea#kaltura_embed_'+ media.media_id).val(kaltura_swf.getSWFHTML());
  }).addClass('kaltura-player-processed');
}

/**
 * Not sure what these functions are for.
 */
function customFunc1(parm) {prev_playlist_item()}
function customFunc2(parm) {next_playlist_item();}
