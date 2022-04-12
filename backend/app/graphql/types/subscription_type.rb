class Types::SubscriptionType < GraphQL::Schema::Object
  # object_class Types::BaseObject
  # field_class Types::BaseField
  # argument_class Types::BaseArgument

  field :post, subscription: ::Subscriptions::Post
  field :posts, subscription: ::Subscriptions::Posts
end
