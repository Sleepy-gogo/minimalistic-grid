import { useEffect, useState } from 'react';

interface FormatedDateProps {
  date: Date;
}

function FormatedDate({ date }: FormatedDateProps) {
  const [currentDate, setCurrentDate] = useState(date);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');

  return (
    <div className="flex flex-col justify-center items-center sm:items-start">
      <h2 className="text-6xl sm:text-7xl md:text-8xl tracking-tight font-black text-white text-center">
        {hours}:{minutes}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-white tracking-widest opacity-60">
        {currentDate.toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </p>
    </div>
  );
}

export default FormatedDate;
