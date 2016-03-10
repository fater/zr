module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'public/css/app.css': 'sass/app.scss',
                    'public/css/promo.css': 'sass/promo.scss',
                    'public/css/gallery.css': 'sass/gallery.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};