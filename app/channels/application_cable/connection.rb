module ApplicationCable
  class Connection < ActionCable::Connection::Base
    def connect
      true
    end # You can scope the connnection here by cookies or other methods
  end
end
