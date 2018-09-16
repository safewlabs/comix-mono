FactoryBot.define do
  factory :product do
    title { "MyString" }
    description { "MyText" }
    price { 1.5 }
    page_count { 1 }
    release_date { "2018-09-16 17:58:16" }
    age_rating { "MyString" }
    store { nil }
  end
end
