You can simply use [Pipedream](https://pipedream.com/) for creating endpoints.
(I will soon write an article on my medium page for detailed steps)

# Host the payload
You can simply return a static response (the `payload.js` file) when the enpoint is hit. You can log it into the excel sheet for proper monitoring.

# Main webhook
The main webhook requires `cookies`, `date`, `id`, `image`, `page_source` and `page_url` as POST parameters. You can send a message to slack/email once there's a hit on the endpoint

You can return any response you wish

# Advanced info webhook
The advances info webhook requires `id, `page_source` and `url` as POST parameters. It would be hit from `/ports` when an open HTTP port is detected, and `/paths` when a new endpoint is detected.

You can return any response you wish

# Login webhook
For custom HTML page, it depends, but for `fake_login_prompt()`, you need a webhook with `fire_id`, `username` and `password` as post parameters. You also log it in an excel sheet for a quick sorting.

You can return any response you wish
