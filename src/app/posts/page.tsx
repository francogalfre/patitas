import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'
import { getPetsByOwnerId } from '@/db/queries/getPetsByOwnerId'

const PatitasPostsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session?.user) {
    redirect('/auth/login')
  }

  const pets = await getPetsByOwnerId(session.user.id)

  return (
    <div>
      <h1>Mis Publicaciones</h1>
      {pets.length === 0 ? (
        <p>No tienes mascotas publicadas aún.</p>
      ) : (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PatitasPostsPage