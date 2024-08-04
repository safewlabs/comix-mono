# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Creating Genres"
Genre.create([{ name: "Horror", slug: "Horror".parameterize },
              { name: "Sci-Fi", slug: "Sci-Fi".parameterize },
              { name: "Fantasy", slug: "Fantasy".parameterize },
              { name: "Crime", slug: "Crime".parameterize },
              { name: "Kids", slug: "Kids".parameterize }])
puts "Creating Admin User"
FactoryBot.create(:admin_user)
puts "Creating User"
creator_user = FactoryBot.create(:user, :creator)
FactoryBot.create(:creator_profile, user: creator_user)
creator_user_2 = FactoryBot.create(:user, :creator)
FactoryBot.create(:creator_profile, user: creator_user_2)
puts "Creating Store"
store = FactoryBot.create(:store, user: creator_user)
puts "Create Products"
FactoryBot.create_list(:product, 24, store:)
puts "Add products to genres"
Product.all.each do |product|
  product.genres << Genre.all.sample(1)
  product.creator_profiles << CreatorProfile.all.sample(1)
end
