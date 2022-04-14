module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :post, PostType do
      description 'Find a post by ID'
      argument :id, ID, required: true

      # resolve -> (obj, args, ctx) {
      #   Post.find(args[:id])
      # }
    end

    def post(id:)
      Post.find(id)
    end
  end
end
