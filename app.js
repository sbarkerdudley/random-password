const chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()-_=+?/'
function generate() {
  const content = document.querySelector('#generated-password')
  let str = ''
  let length = 12
  do {
    const i = Math.floor(Math.random() * chars.length)
    str += chars[i]
  } while (length--)

  content.innerText = str
}

document.addEventListener('DOMContentLoaded', event => {
  generate()
})
