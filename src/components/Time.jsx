export const Time = ({ weekday, date }) => {
  return (
    <time>
      <span>{weekday}</span>
      <span>{date}</span>
    </time>
  );
};
