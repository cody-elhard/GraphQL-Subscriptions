class GraphqlChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'graphql_channel'
  end

  def unsubscribed
    puts 'unsubscribed'
  end
end
