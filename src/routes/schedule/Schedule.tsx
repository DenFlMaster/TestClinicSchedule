import scheduleData from '../../../scheduleData.json'

interface ScheduleSlot {
    time: string;
}

interface Doctor {
    name: string;
    specialty: string;
    schedule: ScheduleSlot[];
}

function Schedule() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Расписание врачей</h1>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                <tr>
                    <th className="border border-gray-300 p-2">Врач</th>
                    <th className="border border-gray-300 p-2">Специальность</th>
                    <th className="border border-gray-300 p-2">Время приема</th>
                </tr>
                </thead>
                <tbody>
                {scheduleData.map((doctor: Doctor) => (
                    doctor.schedule.map((slot, index) => (
                        <tr key={`${doctor.name}-${index}`}>
                            <td className="border border-gray-300 p-2">{doctor.name}</td>
                            <td className="border border-gray-300 p-2">{doctor.specialty}</td>
                            <td className="border border-gray-300 p-2">{slot.time}</td>
                        </tr>
                    ))
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Schedule