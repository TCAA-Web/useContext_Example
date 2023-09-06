import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { ContentSection } from "../components/ContentSection/ContentSection";

export const UserPostsPage = ({title}) => {
  const { user } = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [userPosts, setUserPosts] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const id = user.id;
      const token = user.token;
      const url = `https://dummyjson.com/auth/users/${id}/posts`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((data) => setUserPosts(data))
        .catch((err) => console.error(err));
    } else {
      setErrorMsg(
        "Du skal være logget ind for at se posts - Du vil blive viderestillet til login"
      );

      const timeout = setTimeout(() => {
        navigate("/login");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <ContentSection title={title}>
      <h4>{errorMsg}</h4>
      {userPosts?.posts.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        );
      })}
    </ContentSection>
  );
};
