import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/schools/${id}`).then(r => r.json())
  },
  getAll(id) {
    return fetch(`${Settings.remoteURL}/schools?userId=${id}`).then(r => r.json())
  },
  addSchool(newSchool) {
    return fetch(`${Settings.remoteURL}/schools`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newSchool)
    }).then(data => data.json())
  },
  updateSchool(editedSchool) {
    return fetch(`${Settings.remoteURL}/schools/${editedSchool.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedSchool)
    }).then(data => data.json());
  }
}