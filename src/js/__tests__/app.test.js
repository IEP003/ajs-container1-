import Team from '../app';

test('Добавление персонажа', () => {
  const team = new Team; 
  team.add('bowman');
  team.add('swordman');
  expect([...team.members]).toEqual(['bowman', 'swordman'])
});

test('Ошибка при добавлении повторного персонажа', () => {
  const team = new Team; 
  team.add('bowman');
  team.add('swordman');
  expect(()=>{team.add('swordman');}).toThrowError('Персонаж уже в команде');
});

test('Добавить всех', () => {
  const team = new Team; 
  team.addAll('bowman', 'swordman');
  expect([...team.members]).toEqual(['bowman', 'swordman']);
});

test('Добавить всех, с повторами', () => {
  const team = new Team; 
  team.addAll('bowman', 'swordman', 'swordman');
  expect([...team.members]).toEqual(['bowman', 'swordman'])
})

test('Конвертация в массив', () => {
  const team = new Team; 
  team.addAll('bowman', 'swordman', 'swordman');
  expect(team.toArray()).toEqual(['bowman', 'swordman']);
});
