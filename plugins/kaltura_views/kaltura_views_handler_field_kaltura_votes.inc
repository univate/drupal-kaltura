<?php
// $Id$

/**
 *
 */
class kaltura_views_handler_field_kaltura_votes extends views_handler_field {
  function theme($data) {
    $votes = $data->node_kaltura_kaltura_votes;
    return t('@votes counts', array('@votes' => $votes));
//    return theme('node_kaltura_entry_duration', $durationoutput);
  }
}
