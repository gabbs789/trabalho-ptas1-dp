export async function create(data: {
  name: string
  email: string
  subject: string 
  isActive?: boolean
}): Promise<Teacher> {
  
  const emailExists = await persistence.fieldExists(db.teacher, 'email', data.email)
  if (emailExists) {
    throw new Error('Email already exists')
  }

  
  const newTeacher = await persistence.create<Teacher>(db.teacher, {
    name: data.name,
    email: data.email,
    subject: data.subject, 
    isActive: data.isActive ?? true,
  })

  return newTeacher
}
