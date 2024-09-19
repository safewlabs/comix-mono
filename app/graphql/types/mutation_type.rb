# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field_class GraphqlDevise::Types::BaseField
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    field :mark_user_for_deletion, String, null: false, description: "Delete and Logout a user" do
      argument :user_id, ID, required: true
    end
    def test_field
      "Hello World"
    end

    def mark_user_for_deletion(params)
      user_id = params[:user_id].to_i
      user = User.find(user_id)
      user.update(mark_for_deletion: true)
    end
  end
end
