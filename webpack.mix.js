const mix = require('laravel-mix');

mix.scripts([
    'resources/assets_js/jquery.min.js',
    'resources/assets_js/bootstrap.bundle.min.js',
    'resources/assets_js/grasp_mobile_progress_circle-1.0.0.min.js',
    'resources/assets_js/jquery.cookie.js',
    'resources/assets_js/Chart.min.js',
    'resources/assets_js/bootstrap-datepicker.min.js',
    'resources/assets_js/jquery.validate.min.js',
    'resources/assets_js/jquery.mCustomScrollbar.concat.min.js',
    'resources/assets_js/charts-home.js',
    'resources/assets_js/messenger.min.js',
    'resources/assets_js/messenger-theme-flat.js',
    'resources/assets_js/home-premium.min.js',
    'resources/assets_js/base64.js',
    'resources/assets_js/front.js',
],'public/js/assets_js.js')

.js('resources/js/app.js', 'public/js')

.styles([
    'resources/assets_css/bootstrap.min.css',
    'resources/assets_css/font-awesome.min.css',
    'resources/assets_css/fontastic.css',
    'resources/assets_css/bootstrap-datepicker.min.css',
    'resources/assets_css/grasp_mobile_progress_circle-1.0.0.min.css',
    'resources/assets_css/jquery.mCustomScrollbar.css',
    'resources/assets_css/style.default.premium.css',
    'resources/assets_css/custom.css',
 ],'public/css/assets_css.css')

.version();
