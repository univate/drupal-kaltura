<?php
// $Id$

/**
 * @file
 */

/**
 * Load a sample of the widget via AHAH.
 */
function kaltura_sample_widget($type) {
  $wid = '_'. variable_get('kaltura_partner_id', '');
  $node_type = $_POST['node_type'];
  if ($node_type == 'entry') {
    $width = variable_get('kaltura_'. $type .'_'. $node_type .'_width', '410');
    $height = variable_get('kaltura_'. $type .'_'. $node_type .'_height', '364');
  }
  else {
    $width = variable_get('kaltura_'. $type .'_width', '410');
    $height = variable_get('kaltura_'. $type .'_height', '364');
  }

  $width = variable_get('kaltura_'. $type .'_width', '410');
  $height = variable_get('kaltura_'. $type .'_height', '364');
  $url = KalturaHelpers::getSwfUrlForWidget($wid  .'/entry_id/_KMCLOGO1/uiconf_id/'. $_POST['default_widget_'. $type]);
  $output = '
    var kaltura_swf = new SWFObject("'. $url .'", "'. $type .'_ph_player", '. $width .', '. $height .', "9", "#000000");
    kaltura_swf.addParam("wmode", "opaque");
    kaltura_swf.addParam("flashVars", "");
    kaltura_swf.addParam("allowScriptAccess", "always");
    kaltura_swf.addParam("allowFullScreen", "TRUE");
    kaltura_swf.addParam("allowNetworking", "all");
    kaltura_swf.write("kaltura_sample_widget_wrapper_'. $type .'");';
  $output = drupal_get_js(NULL, array('inline' => array(array('code' => $output))));
  drupal_json(array('status' => TRUE, 'data' => $output));

  exit();
}

