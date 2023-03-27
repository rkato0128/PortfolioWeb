export default function ArrowLine({ width = 6, height = 10, color, ...props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 10"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 9.10606L0.910026 10L6 5L0.910026 0L0 0.893939L4.17995 5L0 9.10606Z"
        fill={color || "#FFF"}
      />
    </svg>
  );
}
