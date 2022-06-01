export default function register() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'success',
        message: 'Api call successfully',
      })
    }, 2000)
  })
}
