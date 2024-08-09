import { cn } from "@/lib/utils";

export const LogoIcon = ({ ...props }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(`h-6 w-6`, props.className)}
    >
      <path
        d="M5.88291 3.64771V6.41075C5.88291 6.89059 5.78662 7.31766 5.59402 7.69194C5.40434 8.06302 5.13004 8.35572 4.77111 8.57005C4.41219 8.78119 3.98322 8.88675 3.48423 8.88675C2.98523 8.88675 2.55627 8.78119 2.19734 8.57005C1.84133 8.35572 1.56703 8.06302 1.37443 7.69194C1.18184 7.31766 1.08554 6.89059 1.08554 6.41075V0H0V6.50672C0 7.1785 0.142987 7.77831 0.428962 8.30614C0.717856 8.83077 1.12347 9.24504 1.64582 9.54894C2.16816 9.84964 2.78096 10 3.48423 10C4.18749 10 4.80029 9.84964 5.32264 9.54894C5.84498 9.24504 6.24914 8.83077 6.53511 8.30614C6.82401 7.77831 6.96845 7.1785 6.96845 6.50672V3.64771H5.88291Z"
        fill="#6D28D9"
      />
      <path
        d="M4.11709 6.35229V3.58925C4.11709 3.10941 4.21338 2.68234 4.40598 2.30806C4.59566 1.93698 4.86996 1.64428 5.22889 1.42995C5.58781 1.21881 6.01678 1.11325 6.51577 1.11325C7.01477 1.11325 7.44373 1.21881 7.80266 1.42995C8.15867 1.64428 8.43297 1.93698 8.62557 2.30806C8.81816 2.68234 8.91446 3.10941 8.91446 3.58925V10H10V3.49328C10 2.8215 9.85701 2.22169 9.57104 1.69386C9.28214 1.16923 8.87653 0.754961 8.35418 0.451059C7.83184 0.150355 7.21904 3.22162e-06 6.51577 3.22162e-06C5.81251 3.22162e-06 5.19971 0.150355 4.67736 0.451059C4.15502 0.754961 3.75086 1.16923 3.46489 1.69386C3.176 2.22169 3.03155 2.8215 3.03155 3.49328V6.35229H4.11709Z"
        fill="#6D28D9"
      />
    </svg>
  );
};
