  const clone1 = {}
  Object.assign(clone1, person)
  const clone2 = {}
  Object.assign(clone2, person)
  const samePerson = person

  person.age++
  person.country = 'FR'

