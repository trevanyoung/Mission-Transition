import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/friendOptions/${id}`).then(e => e.json())
  },
  getAll(id) {
    return fetch(`${Settings.remoteURL}/friendOptions`).then(r => r.json())
  },
  addfriendOption(newFriendOption) {
    return fetch(`${Settings.remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFriendOption)
    }).then(data => data.json())
  },
}