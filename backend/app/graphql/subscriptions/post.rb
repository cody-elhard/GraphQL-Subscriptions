class Subscriptions::Post < ::Subscriptions::BaseSubscription
  payload_type Types::PostType

  argument :id, ID

  def subscribe(id)
  end

  def update(id:)
    self.object
  end
end
