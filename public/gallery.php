<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>За рулем</title>
    <link rel="stylesheet" href="/public/css/gallery.css">
    <script src="js/closure-library/closure/goog/base.js"></script>
    <script src="js/closure-library/closure/goog/dom/dom.js"></script>
    <script src="js/closure-library/closure/goog/events/listener.js"></script>
    <script src="/public/closure/soyutils.js"></script>
    <script src="/public/closure/galleryTemplate.js"></script>
</head>

<script>

    var images = [1, 2, 3, 4, 5, 6, 7];
    document.write(galleryTemplate.listImages({images: images}));

    goog.require('goog.dom');
    goog.require('goog.events');
//    goog.require('goog.events.listen');
    goog.require('goog.ui.DragDropDetector.EventType');

    goog.events.listen(goog.dom.$('img'), 'click',
        function (e) {
            var str = 'Detected ' + e.getUrl();
            if (e.getPosition) {
                str += ' at ' + e.getPosition();
            }
            alert(str);
        });
</script>

<body>

</body>

</html>