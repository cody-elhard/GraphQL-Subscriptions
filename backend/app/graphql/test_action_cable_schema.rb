class TestActionCableSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
  subscription(Types::SubscriptionType)

  # For batch-loading (see https://graphql-ruby.org/dataloader/overview.html)
  use GraphQL::Dataloader

  use GraphQL::Subscriptions::ActionCableSubscriptions

  # GraphQL-Ruby calls this when something goes wrong while running a query:
  def self.type_error(err, context)
    # if err.is_a?(GraphQL::InvalidNullError)
    #   # report to your bug tracker here
    #   return nil
    # end
    super
  end

  def self.id_from_object(object, type_definition, query_ctx)
    # Generate a unique string ID for `object` here
    # For example, use Rails' GlobalID library (https://github.com/rails/globalid):
    object_id = object.to_global_id.to_s
  end

  def self.object_from_id(encoded_id, query_ctx)
    GlobalID::Locator.locate(encoded_id)
  end

  # You'll also need to define `resolve_type` for
  # telling the schema what type Relay `Node` objects are
  def self.resolve_type(type, obj, ctx)
    case obj
    when Post
      Types::PostType

    else
      raise("Unexpected object: #{obj}")
    end
  end
end
