"use strict";
module.exports = grunt => {
  //I load the grunt dependencies
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    prettier: {
      options: {
        // Task-specific options go here.
        progress: false // By default, a progress bar is not shown. You can opt into this behavior by passing true.
      },
      files: {
        src: ["./**.js"]
      }
    },
    eslint: {
      options: {
        configFile: "./.eslintrc.json"
      },
      target: ["./**.js"]
    }
  });

  //registrando task
  grunt.registerTask("pre-commit", "Formatting the code", () => {
    let tasks = [ "eslint"];
    grunt.log.writeln("Beautifying...");
    tasks.forEach(task => {
      grunt.log.writeln("Step " + task);
      grunt.task.run(task);
      grunt.log.writeln("Done");
    });
  });
};
