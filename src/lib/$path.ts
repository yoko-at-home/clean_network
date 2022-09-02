export const pagesPath = {
  "main": {
    $url: (url?: { hash?: string }) => ({ pathname: '/main' as const, hash: url?.hash })
  },
  "policy": {
    $url: (url?: { hash?: string }) => ({ pathname: '/policy' as const, hash: url?.hash })
  },
  "user": {
    $url: (url?: { hash?: string }) => ({ pathname: '/user' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
