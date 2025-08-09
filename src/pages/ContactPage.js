import ContactForm from '../components/forms/ContactForm';
import SectionTitle from '../components/ui/SectionTitle';

function ContactPage() {
  return (
    <div className="container py-16">
      <SectionTitle title="Contact Me" />
      <ContactForm />
    </div>
  );
}

export default ContactPage;