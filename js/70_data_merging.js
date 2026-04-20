function mergeData (sessions) {
    if (sessions.length === 0) return [];
    let result = [];
    sessions.forEach(session => {
        if (result.find(item => item.user === session.user) === undefined) {
            result.push({
                user: session.user,
                duration: session.duration,
                equipment: [...session.equipment]
            });
        } else {
            result = result.map((item) => item.user === session.user ? {
                user: session.user,
                duration: item.duration + session.duration,
                equipment: [
                    ...[...item.equipment].filter(item => !session.equipment.includes(item)),
                    ...session.equipment
                ]
            } : item);
        }
    });
    return result;
}

sessions = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

console.log(mergeData(sessions));
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];