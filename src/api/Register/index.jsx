export default function register() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: 'Api call successfully',
      })
    }, 2000)
  })
}
