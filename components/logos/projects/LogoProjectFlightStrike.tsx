export function LogoProjectFlightStrike({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <defs>
        <linearGradient id="euBlue" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0044CC" />
          <stop offset="100%" stopColor="#002277" />
        </linearGradient>
        <g id="star">
          <g transform="scale(1.5)">
            <path
              fill="#FFCC00"
              d="M 0 -16 L 3.6 -5 L 15.2 -5 L 5.8 2 L 9.4 13 L 0 6 L -9.4 13 L -5.8 2 L -15.2 -5 L -3.6 -5 Z"
            />
          </g>
        </g>
      </defs>
      <circle cx="256" cy="256" r="236" fill="url(#euBlue)" />
      <use href="#star" x="256" y="60" />
      <use href="#star" x="354" y="86.3" />
      <use href="#star" x="425.7" y="158" />
      <use href="#star" x="452" y="256" />
      <use href="#star" x="425.7" y="354" />
      <use href="#star" x="354" y="425.7" />
      <use href="#star" x="256" y="452" />
      <use href="#star" x="158" y="425.7" />
      <use href="#star" x="86.3" y="354" />
      <use href="#star" x="60" y="256" />
      <use href="#star" x="86.3" y="158" />
      <use href="#star" x="158" y="86.3" />
      <g fill="#FFFFFF" transform="translate(256, 256) rotate(45) scale(11) translate(-11.5, -12)">
        <path d="M21,16v-2l-8-5V3.5C13,2.67,12.33,2,11.5,2S10,2.67,10,3.5V9l-8,5v2l8-2.5V19l-2,1.5V22l3.5-1l3.5,1v-1.5L13,19v-5.5L21,16z" />
      </g>
    </svg>
  )
}
