
import { Audio } from "react-loader-spinner";



const Loader = () => {
  return (
    <div>
      <p>
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </p>
    </div>
  );
}

export default Loader
