export function getUser(data) {
  if (data && data.token === 'token_authentication')
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: 'Tran Bui Ly Duc',
            age: 22,
            role: 'user',
          },
          {
            name: 'Nguyen Van Teo',
            age: 22,
            role: 'user',
          },
        ])
      }, 2000)
    })
}
