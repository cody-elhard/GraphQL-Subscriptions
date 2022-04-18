class Types::SubscriptionType < GraphQL::Schema::Object
  # object_class Types::BaseObject
  # field_class Types::BaseField
  # argument_class Types::BaseArgument

  field :post_was_added_or_updated, subscription: ::Subscriptions::PostWasAddedOrUpdated

  def post_was_added_or_updated; end
end
