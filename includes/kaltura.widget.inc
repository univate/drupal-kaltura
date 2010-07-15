<?php
// $Id$

/**
 * @file
 */

/**
 * Load a sample of the widget via AHAH.
 */
function kaltura_sample_widget_ahah($type) {
  _kaltura_init();
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

/**
 *
 */
function kaltura_uploader_type_ahah($element, $custom) {
  _kaltura_init();
  global $base_path;
  if ($_POST[$element] == 1) {
    $form_state = array('storage' => NULL, 'submitted' => FALSE);
    $form_build_id = $_POST['form_build_id'];
    $form = form_get_cache($form_build_id, $form_state);
    $args = $form['#parameters'];
    $form_id = array_shift($args);
    $form_state['post'] = $form['#post'] = $_POST;
    $form['#programmed'] = $form['#redirect'] = FALSE;

    $form['entry_wizard'][$custom] = array(
      '#type' => 'textfield',
      '#size' => 10,
      '#title' => t('Custom CW'),
      '#description' => t('Please insert ui_conf_id only'),
      '#default_value' => variable_get($custom, ''),
    );
    drupal_process_form($form_id, $form, $form_state);
    //$form = drupal_rebuild_form($form_id, $form_state, $args, $form_build_id);
    $output = drupal_render($form['entry_wizard'][$custom]);
  }
  else {
    $images = array(
      KalturaSettings_CW_UICONF_ID_VIDEO => 'video-cw.jpg',
      KalturaSettings_CW_UICONF_ID_IMAGE => 'image-cw.jpg',
      KalturaSettings_CW_UICONF_ID_AUDIO => 'audio-cw.jpg',
      KalturaSettings_CW_UICONF_ID => 'all-cw.jpg',
    );
    $output = '<img src=\''. $base_path . drupal_get_path('module', 'kaltura') .'/images/'. $images[$_POST[$element]] .'\' />';
  }
  drupal_json(array('status' => TRUE, 'data' => $output));
  exit();
}

