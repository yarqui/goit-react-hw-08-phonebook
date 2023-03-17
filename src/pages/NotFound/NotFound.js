import { Link } from 'react-router-dom';
import PAGE_NAMES from 'router/paths';

const NotFound = () => {
  return (
    <>
      <h2>There's no such page</h2>
      <Link to={PAGE_NAMES.homepage}>Back to Homepage</Link>
    </>
  );
};

export default NotFound;
