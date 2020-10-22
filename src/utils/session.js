// 存
const session = window.sessionStorage
export function setUser(user) {
  if (typeof user === 'object') {
    const info = JSON.stringify(user)
    session.setItem('admin', info)
  } else {
    session.setItem('admin', user)
  }
}

// 取
export function getUser() {
  const user = session.getItem('admin')
  let info = null
  if (typeof user === 'string') {
    info = JSON.parse(user)
  } else {
    info = user
  }
  return info
}

// clear
export function removeUser() {
  session.clear()
}
