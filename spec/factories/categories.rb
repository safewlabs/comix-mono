FactoryBot.define do
  factory :category do
    name { ['Graphic novels', 'Series', 'Story Arcs', 'Bundles'].sample }
  end
end
