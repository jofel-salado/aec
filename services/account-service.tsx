export function store({
  email,
  password,
}: {
  email: string
  password: string
}) {
  return fetch(`${process.env.BASE_URL}/api/accounts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
}

export function signIn({
  email,
  password,
}: {
  email: string
  password: string
}) {
  return fetch(`${process.env.BASE_URL}/api/accounts/sign_in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
}

export function requestVerification({ id }: { id: string }) {
  return fetch(
    `${process.env.BASE_URL}/api/accounts/${id}/request_verification`,
    { method: 'POST' },
  )
}

export function verify({
  id,
  verificationCode,
}: {
  id: string
  verificationCode: string
}) {
  return fetch(`${process.env.BASE_URL}/api/accounts/${id}/verify`, {
    method: 'POST',
    body: JSON.stringify({
      verification_code: verificationCode,
    }),
  })
}
