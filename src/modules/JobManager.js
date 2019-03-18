import Settings from "./Settings"

export default {
  get(id) {
    return fetch(`${Settings.remoteURL}/jobs/${id}`).then(r => r.json())
  },
  getAll(id) {
    return fetch(`${Settings.remoteURL}/jobs?userId=${id}`).then(r => r.json())
  },
  addJob(newJob) {
    return fetch(`${Settings.remoteURL}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJob)
    }).then(data => data.json())
  },
  updateJob(editedJob) {
    return fetch(`${Settings.remoteURL}/jobs/${editedJob.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedJob)
    }).then(data => data.json());
  }
}