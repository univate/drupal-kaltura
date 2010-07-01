<?php

/**
 * @file provide Kaltura crossdomain.xml callback
 */
 
/**
 * Callback to return default Kaltura crossdomain.xml file.
 * 
 * Any manually installed crossdomain.xml file will take 
 * precedence over Drupal anyway.
 */
function kaltura_crossdomain_xml() {
  print file_get_contents(dirname(__FILE__) .'/../crossdomain.xml') ;
  die() ;
}