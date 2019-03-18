import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/schoolOptions/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURL}/schoolOptions`).then(r => r.json())
  },
  addSchoolOption(newSchoolOption) {
    return fetch(`${Settings.remoteURL}/schools`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSchoolOption)
    }).then(data => data.json())
  },
}