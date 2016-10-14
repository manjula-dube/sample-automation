module.exports = function (grunt) {

  // Configure grunt
  grunt.initConfig({
    sprite:{
      all: {
        src: 'sprites/*.jpeg',
        dest: 'destination/spritesheet.jpeg',
        destCss: 'destination/css/sprites.css',
        algorithm: 'alt-diagonal',
        //algorithm:left-right,
        //algorithm:top-down,
        //algorith:binary-tree

        padding: 20,
      }
    }
  });

  // Load in `grunt-spritesmith`
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.registerTask('default', ['sprite']);
};  