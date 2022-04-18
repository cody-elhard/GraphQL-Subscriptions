class Subscriptions::PostWasAdded < GraphQL::Schema::Subscription
  object_class Types::BaseObject
  field_class Types::BaseField
  argument_class Types::BaseArgument

  field :title, String, null: false

  def subscribe
    # {
    #   title: 'subscription started'
    # }
  end

  def update
    {
      title: 'Received an update'
    }
  end
end
