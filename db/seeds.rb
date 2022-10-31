# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Creating Genres"
genres = Genre.create([{name: "Horror"}, {name: "Sci-Fi"}, {name: "Fantasy"}, {name: "Crime"}, {name: "Kids"}])
puts "Creating User"
creator_user = FactoryBot.create(:user, :creator)
creator_profile = FactoryBot.create(:creator_profile, user: creator_user)
creator_user_2 = FactoryBot.create(:user, :creator)
creator_profile_2 = FactoryBot.create(:creator_profile, user: creator_user_2)
puts "Creating Store"
store = FactoryBot.create(:store, user: creator_user)
puts "Create Products"
FactoryBot.create_list(:product, 24, store: store)
puts "Add products to genres"
Product.all.each do |product|
  product.genres << Genre.all.sample(1)
  product.creator_profiles << CreatorProfile.all.sample(1)
end