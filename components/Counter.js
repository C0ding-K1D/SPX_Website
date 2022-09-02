import { CountUp } from "use-count-up";

const Counter = () => {
  return (
    <CountUp
      isCounting
      end={1000000}
      duration={10.5}
      easing="easeOutCubic"
      decimalPlaces={0}
      formatter={(value) => value.toLocaleString()}
    />
  );
};

export default Counter;
