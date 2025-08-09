import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';

function NotFoundPage() {
  return (
    <div className="container py-16 text-center">
      <SectionTitle title="404 - Page Not Found" />
      <p className="text-lg mb-4">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="text-primary underline">Return to Home</Link>
    </div>
  );
}

export default NotFoundPage;