# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field_class GraphqlDevise::Types::BaseField
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    field :users_destroy, String, null: false, description: "Delete and Logout a user" do
      argument :user_id, ID, required: true
    end
    def test_field
      "Hello World"
    end

    def users_destroy(params)
      user_id = params[:user_id].to_i
      user = User.find(user_id)
      if user.destroy
        { success: true, errors: [] }
      else
        { success: false, errors: user.errors.full_messages }
      end
    end
  end
end
