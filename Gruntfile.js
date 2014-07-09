module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: 'js/*.js'
        },
        uglify: {
            build: {
                src: 'js/main.js',
                dest: 'dist/js/main.min.js'
            }
        },
        compass: {
			dist: {
				options: {
					sassDir: 'scss',
					cssDir: 'css'
				}
			}
		},
        watch: {
            js: {
                files: 'js/*.js',
                tasks: ['jshint','uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            css: {
                files: '**/*.scss',
                tasks: ['compass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
        }

    });

// on watch events configure jshint:all to only run on changed file
grunt.event.on('watch', function(action, filepath) {
     grunt.config(['jshint', 'all'], filepath);
});

    // grunt plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // grunt tasks
    grunt.registerTask('default', ['watch', 'uglify', 'compass', 'jshint']);

};
