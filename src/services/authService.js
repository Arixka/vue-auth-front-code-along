import { api } from "./apiUrl.js"

export default {
  async signup(name, email, password, role) {
    const res = await api.post('auth/signup', {
      name: name,
      email: email,
      password: password,
      role: role
    })
    return res.data
  },

  async login( email, password){
    const res = await api.post('auth/login', {
      email: email,
      password: password
    })
    console.log(res)
    return res.data
  }
}