# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Creating User"
creator_user = FactoryBot.create(:user, :creator_profile)
puts "Creating Projects"
projects = FactoryBot.create_list(:project, 3) do |project|
              project.user = creator_user
            end
projects.each do |project|
  puts "Creating creator_profiles"
  creator_profile = FactoryBot.create(:creator_profile)
  puts "Assign creator_profiles to projects"
  project.creator_profiles << creator_profile
  puts "Creating bundles"
  bundle = FactoryBot.create(:bundle, project:)
  puts "Creating items"
  FactoryBot.create_list(:item, 3, bundle:)
end
