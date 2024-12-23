import React, { useState } from 'react';

const calculateAverage = (courses: { name: string; weeklyHours: number; score: number }[]) => {
  let totalWeightedScore = 0;
  let totalHours = 0;

  courses.forEach(course => {
    totalWeightedScore += course.weeklyHours * course.score;
    totalHours += course.weeklyHours;
  });

  return totalHours > 0 ? totalWeightedScore / totalHours : 0;
};

const highSchoolCourses = [
  'Matematik', 'Türkçe', 'Fizik', 'Kimya', 'Biyoloji', 'Geometri', 'Edebiyat', 
  'Tarih', 'Coğrafya', 'Ingilizce', 'Din Kültürü', 'Felsefe', 'Beden Eğitimi'
];

const HighSchoolAverageCalculator = () => {
  const [courseCount, setCourseCount] = useState<number>(1); // Başlangıçta 1 ders var
  const [courses, setCourses] = useState<{ name: string; weeklyHours: number; score: number }[]>([
    { name: '', weeklyHours: 0, score: 0 },
  ]);
  const [average, setAverage] = useState<number | null>(null); // Ortalama
  const [error, setError] = useState<string>(''); // Hata mesajı

  const handleCourseChange = (index: number, field: string, value: string | number) => {
    const newCourses = [...courses];
    if (field === 'name') {
      newCourses[index].name = value as string;
    } else if (field === 'weeklyHours') {
      newCourses[index].weeklyHours = Number(value);
    } else if (field === 'score') {
      newCourses[index].score = Number(value);
    }
    setCourses(newCourses);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const invalidCourse = courses.some(course => {
      return course.name.trim() === '' || course.weeklyHours <= 0 || course.score < 0 || course.score > 100;
    });

    if (invalidCourse) {
      setError('Lütfen tüm dersleri geçerli şekilde doldurun.');
      return;
    }

    setError('');
    const calculatedAverage = calculateAverage(courses);
    setAverage(calculatedAverage);
  };

  const handleCourseCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = Number(e.target.value);
    setCourseCount(count);

    const newCourses = Array.from({ length: count }, () => ({
      name: '',
      weeklyHours: 0,
      score: 0,
    }));
    setCourses(newCourses);
    setAverage(null);
  };

  return (
    <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Okul Not Ortalaması Hesaplama Aracı</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="courseCount" className="block text-sm font-medium text-gray-700">
            Ders Sayısı
          </label>
          <select
            id="courseCount"
            value={courseCount}
            onChange={handleCourseCountChange}
            className="w-full p-2 border border-gray-300 rounded-md mt-2"
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} Ders
              </option>
            ))}
          </select>
        </div>

        {courses.map((course, index) => (
          <div key={index} className="space-y-4 border-b border-gray-300 pb-4">
            <div>
              <label htmlFor={`courseName${index}`} className="block text-sm font-medium text-gray-700">
                {`Ders ${index + 1} Adı`}
              </label>
              <select
                id={`courseName${index}`}
                value={course.name}
                onChange={(e) => handleCourseChange(index, 'name', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
              >
                <option value="">Ders Seçiniz</option>
                {highSchoolCourses.map((courseName) => (
                  <option key={courseName} value={courseName}>
                    {courseName}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor={`weeklyHours${index}`} className="block text-sm font-medium text-gray-700">
                {`Ders ${index + 1} Haftalık Saat`}
              </label>
              <input
                type="number"
                id={`weeklyHours${index}`}
                value={course.weeklyHours}
                onChange={(e) => handleCourseChange(index, 'weeklyHours', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                placeholder="Haftalık Saat"
                min="0"
              />
            </div>

            <div>
              <label htmlFor={`score${index}`} className="block text-sm font-medium text-gray-700">
                {`Ders ${index + 1} Puan`}
              </label>
              <input
                type="number"
                id={`score${index}`}
                value={course.score}
                onChange={(e) => handleCourseChange(index, 'score', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
                placeholder="Puan (0-100)"
                min="0"
                max="100"
              />
            </div>
          </div>
        ))}

        <div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            Hesapla
          </button>
        </div>
      </form>

      {average !== null && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Ortalama Sonucu:</h3>
          <p className="text-lg">Not Ortalamanız: {average.toFixed(2)}</p>
          <p className="text-lg">{
            average >= 85 ? "Tebrikler, Takdir Belgesine Hak Kazandınız."
            : average >= 70 ? "Tebrikler, Teşekkür Belgesine Hak Kazandınız."
            : "Maalesef belge kazanamadınız."
            } </p>
        </div>
      )}
    </div>
  );
};

export default HighSchoolAverageCalculator;
