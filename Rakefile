require "fileutils"

desc "Copy documentation files from projects to docs"
task :sync_docs do
  projects = {
    "ferrum" => { source: "projects/ferrum/docs", dest: "docs/ferrum" },
    "cuprite" => { source: "projects/cuprite/docs", dest: "docs/cuprite" },
    "vessel" => { source: "projects/vessel/docs", dest: "docs/vessel" }
  }

  projects.each do |name, paths|
    source_dir, dest_dir = paths.values_at(:source, :dest)

    unless Dir.exist?(source_dir)
      puts "⚠️  Skipping #{name}: #{source_dir} does not exist"
      next
    end

    puts "📄 Syncing #{name} docs..."

    # Ensure destination directory exists
    FileUtils.mkdir_p(dest_dir)

    # Copy all Markdown files
    Dir.glob(File.join(source_dir, '*.md')).each do |file|
      filename = File.basename(file)
      dest_file = File.join(dest_dir, filename)

      FileUtils.cp(file, dest_file)
      puts "  ✓ Copied #{filename}"
    end
  end

  puts "✅ Documentation sync complete!"
end

task default: :sync_docs
