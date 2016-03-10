// This file was automatically generated from gallery.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace galleryTemplate.
 */

if (typeof galleryTemplate == 'undefined') { var galleryTemplate = {}; }


galleryTemplate.listImages = function(opt_data, opt_ignored) {
  var output = '<div class="gallery_small">';
  var itemList4 = opt_data.images;
  var itemListLen4 = itemList4.length;
  for (var itemIndex4 = 0; itemIndex4 < itemListLen4; itemIndex4++) {
    var itemData4 = itemList4[itemIndex4];
    output += '<div class="gallery_item">' + galleryTemplate.imageUrl(soy.$$augmentMap(opt_data, {item: itemData4})) + '</div>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  galleryTemplate.listImages.soyTemplateName = 'galleryTemplate.listImages';
}


galleryTemplate.imageUrl = function(opt_data, opt_ignored) {
  return '<img src="/public/img/thumb/' + soy.$$escapeHtml(opt_data.item) + '.jpg" />';
};
if (goog.DEBUG) {
  galleryTemplate.imageUrl.soyTemplateName = 'galleryTemplate.imageUrl';
}
