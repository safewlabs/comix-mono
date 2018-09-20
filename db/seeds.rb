# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
grenres = Genre.first_or_create([
  { name: 'Superhero' }, 
  { name: 'Manga' },
  { name: 'Indigenous' }, 
  { name: 'Young Adult' },
  { name: 'LGBTQ' }, 
  { name: 'Graphic Novels' },
  { name: 'Children' },
  { name: 'Comedy' },
  { name: 'Crime' },
  { name: 'Drama' },
  { name: 'Fantasy' },
  { name: 'Alternate History' },
  { name: 'Steampunk' },
  { name: 'Spy' },
  { name: 'Non-Fiction' },
  { name: 'Cyberpunk' }
])
    

categories = Category.first_or_create([
  { name: 'Graphic novels' }, 
  { name: 'Series' },
  { name: 'Story Arcs' }, 
  { name: 'Bundles' }
])