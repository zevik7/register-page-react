export function getUser(data) {
  if (data && data.token === 'token_authentication')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: 'Nguyen Huu Thien Phu',
            email: 'phu@gmail.com',
            age: 22,
            role: 'user',
          },
          {
            name: 'Tran Bui Ly Duc',
            email: 'duc@gmail.com',
            age: 22,
            role: 'user',
          },
          {
            name: 'Nguyen Van Teo',
            email: 'teo@gmail.com',
            age: 22,
            role: 'user',
          },
        ])
      }, 2000)
    })
}
