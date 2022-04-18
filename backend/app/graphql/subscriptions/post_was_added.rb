class Subscriptions::PostWasAdded < GraphQL::Schema::Subscription
  object_class Types::BaseObject
  field_class Types::BaseField
  argument_class Types::BaseArgument

  field :title, String, null: false

  def subscribe
    {
      title: 'Title to be returned?'
    }
  end

  def update
    {
      title: 'newer title'
    }
  end
end
