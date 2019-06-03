"use strict";
module.exports = grunt => {
  //Loading our dependencies
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
      target: ["./services/**.js"]
    }
  });

  //Registering tasks
  grunt.registerTask("pre-commit", "Linting our code", () => {
    let tasks = ["prettier", "eslint"];
    grunt.log.writeln("Beautifying...");
    tasks.forEach(task => {
      grunt.log.writeln("Step " + task);
      grunt.task.run(task);
      grunt.log.writeln("Done");
    });
  });
};
