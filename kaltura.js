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
    var media = Drupal.settings.kaltura[$(this).html()];
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
 *
 */
Drupal.behaviors.kalturaThumbRotator = function (context) {
  $('img.kaltura-thumbnail.rotating').each(function (i) {
    $(this).mouseover(function() { KalturaThumbRotator.start(this); }).mouseout(function() { KalturaThumbRotator.end(this); });
  })
}

/**
 *
 */
KalturaThumbRotator = {
  slices : 16, // number of thumbs per video
  frameRate : 1000, // frameRate in milliseconds for changing the thumbs

  timer : null,
  slice : 0,
  img  : new Image(),

  thumbBase : function (o) // extract the base thumb path by removing the slicing parameters
  {
    var path = o.src;
    var pos = path.indexOf("/vid_slice");
    if (pos != -1)
      path = path.substring(0, pos);
    return path;
  },

  change : function (o, i) // set the Nth thumb, request the next one and set a timer for showing it
  {
    slice = (i + 1) % this.slices;
    var path = this.thumbBase(o);
    o.src = path + "/vid_slice/" + i + "/vid_slices/" + this.slices;
    this.img.src = path + "/vid_slice/" + slice + "/vid_slices/" + this.slices;
    i = i % this.slices;
    i++;
    this.timer = setTimeout(function () { KalturaThumbRotator.change(o, i) }, this.frameRate);
  },

  start : function (o) // reset the timer and show the first thumb
  {
    clearTimeout(this.timer);
    var path = this.thumbBase(o);
    this.change(o, 1);
  },

  end : function (o) // reset the timer and restore the base thumb
  {
    clearTimeout(this.timer);
    o.src = this.thumbBase(o);
  }
};

/**
 * Not sure what these functions are for.
 */
function customFunc1(parm) {prev_playlist_item()}
function customFunc2(parm) {next_playlist_item();}


