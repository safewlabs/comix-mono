# frozen_string_literal: true

module Types
  class BaseField < GraphQL::Schema::Field
    include GraphqlDevise::FieldAuthentication
    argument_class Types::BaseArgument
  end
end
