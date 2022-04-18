class Subscriptions::PostWasAddedOrUpdated < ::Subscriptions::BaseSubscription
  payload_type Types::PostType

  def subscribe; end

  def update
    self.object
  end
end
