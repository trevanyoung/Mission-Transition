import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/friends/${id}`).then(r => r.json())
  },
  getAll(id) {
    return fetch(`${Settings.remoteURL}/friends?userId=${id}`).then(r => r.json())
  },
  addFriend(newFriend) {
    return fetch(`${Settings.remoteURL}/friends`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newFriend)
    }).then(data => data.json())
  }
}