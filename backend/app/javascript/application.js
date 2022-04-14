// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// import "@hotwired/turbo-rails"
// import "controllers"

import App, { createConsumer } from "@rails/actioncable"

App.logger.enabled = false

const consumer = createConsumer()

consumer.subscriptions.create({ channel: "PostChannel" }, {
  initialized() {
    console.log('init');
  },
  connected() {
    console.log('connected');
  },
  received: async (data) => {
    async function appendLine(line) {
      const post = await fetch(
        `/posts/${data.id}.json`,
      );

      // catch 404, then remove post from list (it is deleted)

      const jsonResp = await post.json();

      const link = document.createElement('a');
      link.textContent = jsonResp.title;
      link.href = `/posts/${data.id}`;

      document.body.appendChild(link);
      document.body.appendChild(
        document.createElement('br')
      )
    }

    await appendLine(data.id)
  },
  disconnected() {
    console.log('disconnected');
  }
});

console.log('lets go!');