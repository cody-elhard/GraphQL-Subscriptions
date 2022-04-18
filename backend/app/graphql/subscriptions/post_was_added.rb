class Subscriptions::PostWasAdded < GraphQL::Schema::Subscription
  object_class Types::PostType
  field_class Types::BaseField
  argument_class Types::BaseArgument

  def subscribe
    # {
    #   title: 'subscription started'
    # }
  end

  def update
    Post.last
  end
end
