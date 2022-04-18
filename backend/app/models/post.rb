class Post < ApplicationRecord
  after_commit :notify_subscribers

  def notify_subscribers
    TestActionCableSchema.subscriptions.trigger(:post_was_added, { }, nil)
  end
end
