class Subscriptions::PostWasAdded < GraphQL::Schema::Subscription
  object_class Types::BaseObject
  field_class Types::BaseField
  argument_class Types::BaseArgument

  field :title, String, null: false

  def subscribe
    puts 'it subscribes?'
    {
      title: 'testing the title'
    }
  end
end
