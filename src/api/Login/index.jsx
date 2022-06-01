export default function loggin(data) {
  if (data)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Nguyen Huu Thien Phu',
          avatar: '/image.jpg',
          token: '123123',
        })
      }, 2000)
    })
}
