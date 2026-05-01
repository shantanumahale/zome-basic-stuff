function setHasOverlap(a, b) {
    for (const val of Array.from(a)) {
        if (b.has(val)) return true;
    }
    return false;
}

function selectData (sessions, options = {}) {
    const {
        user = null,
        minDuration = null,
        equipment = [],
        merge = false,
    } = options;

    const reversedSessions = sessions.slice().reverse();
    const sessionsForUser = new Map();
    const sessionsProcessed = [];

    reversedSessions.forEach((session) => {
        if (merge && sessionsForUser.has(session.user)) {
            const userSession = sessionsForUser.get(session.user);
            userSession.duration += session.duration;
            session.equipment.forEach((equipment) => {
                userSession.equipment.add(equipment);
            });
        } else {
            const clonedSession = {
                ...session,
                equipment: new Set(session.equipment)
            }
            if (merge) {
                sessionsForUser.set(session.user, clonedSession);
            }
            sessionsProcessed.push(clonedSession);
        }
    });
    sessionsProcessed.reverse();

    const results = [];
    const optionEquipments = new Set(equipment);
    sessionsProcessed.forEach((session) => {
        if (
            (user !== null && user !== session.user) || 
            (optionEquipments.size > 0 && !setHasOverlap(optionEquipments, session.equipment)) || 
            (minDuration !== null && minDuration > session.duration) 
        ) {
            return;
        }
        results.push({
            ...session,
            equipment: Array.from(session.equipment).sort()
        });
    });
    return results;
}

const sessions = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

console.log(selectData(sessions));
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

console.log(selectData(sessions, { user: 2 }));
// [
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

console.log(selectData(sessions, { minDuration: 200 }));
// [
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

console.log(selectData(sessions, { minDuration: 400 }));
// [];

console.log(selectData(sessions, { equipment: ['bike', 'dumbbell'] }));
// [
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

console.log(selectData(sessions, { merge: true }));
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];

console.log(selectData(sessions, { merge: true, minDuration: 400 }));
// [
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];
