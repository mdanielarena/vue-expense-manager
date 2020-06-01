<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Vue Expense Manager</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">

    <link rel="stylesheet" href="{{ mix('/css/assets_css.css') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="csrf-token" content="{{ csrf_token() }}">

    @yield('styles')
    <script type='text/javascript'>
        const url   = '<?php echo url("/")?>';
        const token = document.getElementsByTagName("meta")["csrf-token"].getAttribute("content");
    </script>

    <link rel="shortcut icon" href="img/favicon.ico">
    
  </head>
  <body>
    
    <div id="app"> 
        <App/>
        @include('layouts.modals')
    </div>
    
    <script src="{{ mix('/js/assets_js.js') }}"></script>
    <script src="{{ mix('/js/app.js') }}"></script>
  </body>
</html>