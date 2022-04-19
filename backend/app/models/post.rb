class Post < ApplicationRecord
  after_create :notify_subscribers
  after_update :notify_subscribers

  def notify_subscribers
    TestActionCableSchema.subscriptions.trigger(:posts, {}, self)
    TestActionCableSchema.subscriptions.trigger(:post, { id: to_global_id.to_s }, self)
  end
end
