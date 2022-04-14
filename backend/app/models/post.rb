class Post < ApplicationRecord
  after_commit :notify_subscribers

  def notify_subscribers
    ActionCable.server.broadcast('post_channel', { id: })
  end
end
