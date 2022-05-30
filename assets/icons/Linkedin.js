const Linkedin = ({ className, width, height, color }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      // width="19"
      // height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.90278 0C1.30901 0 0 1.24011 0 2.75V15.25C0 16.7599 1.30901 18 2.90278 18H16.0972C17.691 18 19 16.7599 19 15.25V2.75C19 1.24011 17.691 0 16.0972 0H2.90278ZM2.90278 1.5H16.0972C16.8352 1.5 17.4167 2.05089 17.4167 2.75V15.25C17.4167 15.9491 16.8352 16.5 16.0972 16.5H2.90278C2.16483 16.5 1.58333 15.9491 1.58333 15.25V2.75C1.58333 2.05089 2.16483 1.5 2.90278 1.5ZM5.01389 3.5C4.66395 3.5 4.32834 3.6317 4.0809 3.86612C3.83346 4.10054 3.69444 4.41848 3.69444 4.75C3.69444 5.08152 3.83346 5.39946 4.0809 5.63388C4.32834 5.8683 4.66395 6 5.01389 6C5.36383 6 5.69943 5.8683 5.94688 5.63388C6.19432 5.39946 6.33333 5.08152 6.33333 4.75C6.33333 4.41848 6.19432 4.10054 5.94688 3.86612C5.69943 3.6317 5.36383 3.5 5.01389 3.5ZM4.22222 7C3.93036 7 3.69444 7.2235 3.69444 7.5V14C3.69444 14.2765 3.93036 14.5 4.22222 14.5H5.80556C6.09742 14.5 6.33333 14.2765 6.33333 14V7.5C6.33333 7.2235 6.09742 7 5.80556 7H4.22222ZM7.91667 7C7.62481 7 7.38889 7.2235 7.38889 7.5V14C7.38889 14.2765 7.62481 14.5 7.91667 14.5H9.5C9.79186 14.5 10.0278 14.2765 10.0278 14V10.25C10.0278 9.5605 10.6194 9 11.3472 9C12.075 9 12.6667 9.5605 12.6667 10.25V14C12.6667 14.2765 12.9026 14.5 13.1944 14.5H14.7778C15.0696 14.5 15.3056 14.2765 15.3056 14V10C15.3056 8.3455 13.8853 7 12.1389 7C11.3272 7 10.5888 7.29301 10.0278 7.77051V7.5C10.0278 7.2235 9.79186 7 9.5 7H7.91667Z"
        fill={color}
        // fill="#6E1129"
      />
    </svg>
  );
};

export default Linkedin;
