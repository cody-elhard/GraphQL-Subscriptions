class Post < ApplicationRecord
  after_create :notify_subscribers
  after_update :notify_subscribers

  def notify_subscribers
    TestActionCableSchema.subscriptions.trigger(:post_was_added_or_updated, {}, self)
  end
end
