import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/jobOptions/${id}`).then(e => e.json())
  },
  getAll(id) {
    return fetch(`${Settings.remoteURL}/jobOptions`).then(r => r.json())
  },
  addJobOption(newJobOption) {
    return fetch(`${Settings.remoteURL}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJobOption)
    }).then(data => data.json())
  },
}