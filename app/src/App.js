import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import ClientForm from './Pages/ClientForm';
import Owner from './Pages/OwnerHomePage';
import OwnerClient from './Pages/ProjectionQuery';
import SpecificSearch from './Pages/SelectionQuery';
import EditUser from './Pages/UpdateQuery';
import ExcistingClient from './Pages/ExcistingClient';
import LegalProForm from './Pages/LegalProForm';
import Client from './Pages/Client';
import LegalPro from './Pages/LegalPro';
import Footer from './Pages/Footer';
import AssistantList from './Pages/AssistantList';
import CaseForm from './Pages/caseForm';
import LawyersList from './Pages/LawyersList';
import JoinQuery from './Pages/JoinQuery';
import NestedQuery from './Pages/NestedQuery';
import Aggregation from './Pages/AggregationQuery';
import ClientInfo from './Pages/AllQueries';

function App() {
  return (
   <>
   <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/owner" element={<Owner/>}/>
        <Route path="/ownerclient" element={<OwnerClient/>}/>
        <Route path="/specific" element={<SpecificSearch />}/>
        <Route path="/ownerclient/user/:id/edit" element={<EditUser />}/>
        <Route path="/newclient" element={<ClientForm />}/>
        <Route path="/excistingclient" element={<ExcistingClient />}/>
        <Route path="/stafflogin" element={<LegalProForm />}/>
        <Route path="/excistingclient/:id/client" element={<Client />}/>
        <Route path="/stafflogin/:id/staff" element={<LegalPro />}/>
        <Route path="/assistant" element={<AssistantList />}/>
        <Route path="/caseform" element={<CaseForm />}/>
        <Route path="/lawyerslist" element={<LawyersList />}/>
        <Route path="/divide" element={<JoinQuery />}/>
        <Route path="/nested" element={<NestedQuery />}/>
        <Route path="/aggregation" element={<Aggregation />}/>
        <Route path="/clientInfo" element={<ClientInfo/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
   </>
  );
}

export default App;
