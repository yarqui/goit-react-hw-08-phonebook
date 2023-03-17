import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';

const Contacts = () => {
  return (
    <>
      <p>Contacts</p>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />

        <ul>
          <ContactList />
        </ul>
      </Section>
    </>
  );
};

export default Contacts;
