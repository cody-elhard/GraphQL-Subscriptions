# frozen_string_literal: true

module Types
  class PostType < Types::BaseObject
    implements GraphQL::Types::Relay::Node

    field :body, String
    field :title, String
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
