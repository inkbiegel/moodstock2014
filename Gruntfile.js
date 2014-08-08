module.exports = function(grunt) {

        // ,
        // flow: {
        //   html: {
        //     steps: {
        //       css: ['concat','cssmin'],
        //       js: ['concat','uglify']
        //     }
        //   }
        // }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      root: '../root',
      dist: '../dist'
    },
    clean: {},
    useminPrepare: {
      html: 'info.html',
      options: {
        root: '<%= dirs.root %>',
        dest: '<%= dirs.dist %>'
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: '<%= dirs.root %>',
        src: ['css/*'],
        dest: '<%= dirs.dist %>',
        ext: '.min.css'
      }
    },
    concat: {
      options: {
        separator: ';',
        compress: {
          drop_console: true
        }
      },
      dist: {}
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - <%= grunt.template.today("yyyy-mm-dd") */\n'
      },
      dist: {}
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= dirs.root %>',
          src: ['img/**.{png,jpg,gif,svg}'],
          dest: '<%= dirs.dist %>'
        }]
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, cwd: '<%= dirs.root %>', src: ['*.html', '!index.html', '*.php', 'fonts/*', 'js/jquery*.js', 'js/modernizr.js', 'js/oldie.js', 'robots.txt'], dest: '<%= dirs.dist %>' }
        ]
      }
    },
    rev: {
      options: {
        algorithm: 'md5',
        length: 8
      },
      assets: {
        files: [{
          src: [
            '<%= dirs.dist %>/js/moodstock.js',
            '<%= dirs.dist %>/css/*.css'
          ]
        }]
      }
    },
    usemin: {
      html: ['<%= dirs.dist %>/info.html'],
      css: ['<%= dirs.dist %>/css/*.css'],
      js: ['<%= dirs.dist %>/js/*.js'],
      options: {
          assetsDirs: ['<%= dirs.dist %>', '<%= dirs.dist %>/css', '<%= dirs.dist %>/js']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['clean', 'newer:useminPrepare', 'newer:cssmin', 'newer:concat', 'newer:uglify', 'newer:imagemin', 'newer:copy', 'rev', 'newer:usemin']);
};