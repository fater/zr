<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Chat</title>
    <meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;' name='viewport' />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="/public/css/app.css">
    <script language="JavaScript" src="/bower_components/jquery/dist/jquery.min.js"></script>
    <script language="JavaScript" src="/public/js/app.js"></script>
</head>
<body>

<div class="header">
    Fixed header
</div>

<div class="container"></div>

<div class="hidden">
    <div class="template">
        <div class="image">
            <img src="/public/img/image_icon.png" alt="">
        </div>
        <div class="content">
            <br />
            <button id="sen">Reply</button>
        </div>
        <div class="attachment"></div>
    </div>
</div>

<div class="form">
    <div class="content">
        <div class="title">Fixed form</div>
        <textarea id="chat_message"></textarea>
        <button id="send_buton">Send message</button>
        <button id="close_form">Hide form</button>
    </div>
</div>

</body>
</html>