import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/auth/ForgotPassword";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Insights from "./pages/dashboard/Insights";
import PostViewPage from "./pages/dashboard/PostViewPage";
import PrivateJournals from "./pages/dashboard/PrivateJournals";
import PublicJournals from "./pages/dashboard/PublicJournals";
import Resources from "./pages/dashboard/Resources";
import Uplift from "./pages/dashboard/Uplift";
import WriteNew from "./pages/dashboard/WriteNew";
import Meditate from "./pages/dashboard/uplift/Meditate";
import Therapist from "./pages/dashboard/uplift/Therapist";
function App() {
  axios.defaults.baseURL = "http://localhost:5000/";

  const testimonies = [
    {
      name: "Ayush Sinha",
      review:
        "Simple easy to use journal website with a clean and user friendly UI. One can make daily entries easily and and can capture the mood and Health of the writer pretty accurately.",
    },
    {
      name: "Khusbu Rai",
      review:
        "It was a pleasure working with the entire Health Huddle development team. They were able to launch our iOS app in a few months and it looks and works beautifully. ",
    },
    {
      name: "Vanshika Gupta",
      review:
        "Health Huddle provides an intuitive platform for journaling, exploring wellness resources, and enjoying guided meditation.",
    },
    {
      name: "Anshika Singh",
      review:
        "An amazing and thoughful app.It helps to express myself only to me with full security.",
    },
    {
      name: "Aditya Chaube",
      review:
        "Health Huddle combines easy journaling with valuable health resources and calming meditation sounds, all in one user-friendly app.",
    },
  ];

  return (
    <>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home testimonies={testimonies} />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/dashboard/write-new"
            element={
              <ProtectedRoute>
                <WriteNew />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/public-journals/:postId"
            element={
              <ProtectedRoute>
                <PostViewPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/private-journals"
            element={
              <ProtectedRoute>
                <PrivateJournals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/public-journals"
            element={
              <ProtectedRoute>
                <PublicJournals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/insights"
            element={
              <ProtectedRoute>
                <Insights />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift/meditate"
            element={
              <ProtectedRoute>
                <Meditate />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift/therapy"
            element={
              <ProtectedRoute>
                <Therapist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/uplift"
            element={
              <ProtectedRoute>
                <Uplift />
              </ProtectedRoute>
            }
          />
          <Route path="/dashboard/resources" element={<Resources/>}/>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
