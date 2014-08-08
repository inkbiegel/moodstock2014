module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      root: '../root',
      dist: '../dist'
    },
    clean: {
      build: {
        src:  ['<%= dirs.dist %>/css/*.css', '<%= dirs.dist %>/js/*.general.js']
      },
      options: {
        force: true
      }
    },
    useminPrepare: {
      html: {
        src: ['info.html','index.php']
      },
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
        dest: '<%= dirs.dist %>'
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
          src: ['**/**.{png,jpg,gif,svg}','!node_modules'],
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
      dist: {
        files: [{
          src: [
            '<%= dirs.dist %>/js/general.js',
            '<%= dirs.dist %>/css/*.css'
          ]
        }]
      }
    },
    usemin: {
      html: ['<%= dirs.dist %>/info.html', '<%= dirs.dist %>/index.php'],
      css: ['<%= dirs.dist %>/css/*.css'],
      js: ['<%= dirs.dist %>/js/*.general.js'],
      options: {
        assetsDirs: ['<%= dirs.dist %>']
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('build', ['clean', 'newer:useminPrepare', 'newer:cssmin', 'newer:concat', 'newer:uglify', 'newer:imagemin', 'newer:copy', 'newer:rev', 'usemin']);
};