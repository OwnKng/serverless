const fetch = require("node-fetch")

const query = async ({ query, variables = {} }) => {
  const result = await fetch(process.env.HASURA_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Hasura-Admin-Secret": process.env.HASURA_API_SECRET,
    },
    body: JSON.stringify({ query, variables }),
  }).then((response) => response.json())

  // TODO error handling

  return result.data
}

exports.query = query
