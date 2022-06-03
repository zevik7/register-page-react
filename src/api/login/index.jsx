export default function login(data) {
  const fakeUsers = [
    {
      name: 'Nguyen Huu Thien Phu',
      email: 'phu@gmail.com',
      password: '123123',
      role: 'admin',
    },
    {
      name: 'Tran Bui Ly Duc',
      email: 'duc@gmail.com',
      password: '123123',
      age: 22,
      role: 'user',
    },
    {
      name: 'Nguyen Van Teo',
      email: 'teo@gmail.com',
      password: '123123',
      role: 'user',
    },
  ]

  return new Promise((resolve, reject) => {
    const userValid = fakeUsers.find(
      (user) => data.email === user.email && data.password === user.password
    )

    if (userValid) {
      userValid.token = 'token123'
      setTimeout(() => {
        resolve(userValid)
      }, 2000)
    } else
      reject({
        message: 'Email or password is incorrect',
      })
  })
}
