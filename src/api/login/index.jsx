export default function login(data) {
  console.log(data)
  return new Promise((resolve, reject) => {
    if (data && data.password === '123123')
      setTimeout(() => {
        resolve({
          name: 'Nguyen Huu Thien Phu',
          avatar: '/image.jpg',
          role: 'admin',
          token: 'token_authentication',
        })
      }, 2000)
    else
      reject({
        message: 'Password is incorrect',
      })
  })
}
