<div class="kaltura-player"><?php print $media_id; ?></div>
<?php if ($options['show_embed']): ?>
  <div class="kaltura_embed_code">
    <strong class="<?php print $embed_title_class ?>"><?php print $embed_title; ?></strong><br />
    <textarea style="overflow-y:auto" id="kaltura_embed_<?php print $media_id; ?>" onclick="javascript:this.focus; this.select();"></textarea>
  </div>
<?php endif ?>
