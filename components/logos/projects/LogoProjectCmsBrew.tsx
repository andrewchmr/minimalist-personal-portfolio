export function LogoProjectCmsBrew({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* steam */}
      <path
        d="M10 2.5c-1 1-1 2 0 3s1 2 0 3M14 3c-1 1-1 1.8 0 2.8"
        stroke="#e2772a"
        strokeWidth="1.7"
      />
      {/* cup */}
      <path
        d="M4.5 10.5h12v4a4 4 0 0 1-4 4H8.5a4 4 0 0 1-4-4v-4Z"
        stroke="#3f2d23"
        strokeWidth="1.8"
      />
      {/* handle */}
      <path d="M16.5 11.5h1.6a2.4 2.4 0 0 1 0 4.8h-1" stroke="#3f2d23" strokeWidth="1.8" />
    </svg>
  )
}
