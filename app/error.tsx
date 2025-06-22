// export default function Error() {
//   return (
//     <div>
//       <p>There was some error.</p>
//     </div>
//   );
// }

"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div>
      <h2>Loading error</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
