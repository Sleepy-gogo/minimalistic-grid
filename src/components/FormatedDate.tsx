import { useEffect, useState } from 'react';
import { clockFormatter, dateFormatter } from '@/lib/utils';

function FormatedDate() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center sm:items-start">
      <h2 className="text-6xl sm:text-7xl md:text-8xl tracking-tight font-black text-white text-center">
        {clockFormatter.format(currentDate)}
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-white tracking-widest opacity-60">
        {dateFormatter.format(currentDate)}
      </p>
    </div>
  );
}

export default FormatedDate;
