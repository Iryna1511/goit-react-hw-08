import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMsg />}
      <ContactList />
    </div>
  );
}
