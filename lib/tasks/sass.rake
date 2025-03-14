# frozen_string_literal: true

# include build:css:scss into  `rails assets:precompile task`
#    copied  https://github.com/rails/cssbundling-rails/blob/main/lib/tasks/cssbundling/build.rake
#    to make it work with additional custom script
namespace :css do
  desc "Build your CSS bundle"
  build_task = task :build do
    command = CssbundlingSCSS::Tasks.build_command
    unless system(command)
      raise "cssbundling-rails: Command build failed, ensure `#{command}` runs without errors"
    end
  end
  build_task.prereqs << :install unless ENV["SKIP_YARN_INSTALL"] || ENV["SKIP_BUN_INSTALL"]
end

module CssbundlingSCSS
  module Tasks
    extend self

    def build_command
      case tool
      when :bun then "bun run build:scss"
      when :yarn then "yarn build:scss"
      when :pnpm then "pnpm build:scss"
      when :npm then "npm run build:scss"
      else raise "cssbundling-rails: No suitable tool found for building CSS"
      end
    end

    def tool
      case
      when File.exist?("bun.lockb") then :bun
      when File.exist?("yarn.lock") then :yarn
      when File.exist?("pnpm-lock.yaml") then :pnpm
      when File.exist?("package-lock.json") then :npm
      when tool_exists?("bun") then :bun
      when tool_exists?("yarn") then :yarn
      when tool_exists?("pnpm") then :pnpm
      when tool_exists?("npm") then :npm
      end
    end

    def tool_exists?(tool)
      system "command -v #{tool} > /dev/null"
    end
  end
end

unless ENV["SKIP_CSS_BUILD"]
  if Rake::Task.task_defined?("assets:precompile")
    Rake::Task["assets:precompile"].enhance(["css:build"])
  end

  if Rake::Task.task_defined?("test:prepare")
    Rake::Task["test:prepare"].enhance(["css:build"])
  elsif Rake::Task.task_defined?("spec:prepare")
    Rake::Task["spec:prepare"].enhance(["css:build"])
  elsif Rake::Task.task_defined?("db:test:prepare")
    Rake::Task["db:test:prepare"].enhance(["css:build"])
  end
end
