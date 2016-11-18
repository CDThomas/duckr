export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Drew Thomas',
        avatar: 'https://pbs.twimg.com/profile_images/585167151675248640/DIbr7D2__400x400.jpg',
        uid: 'drewthomas',
      })
    }, 1500)
  })
}
