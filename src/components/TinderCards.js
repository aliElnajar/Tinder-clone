import TinderCard from "react-tinder-card";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import database from "./helpers/Firebase";
import Loading from "./generalUI/Loading";
import "./TinderCards.css";
const TinderCards = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = database.collection("people").onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((item) => item.data())), setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <Loading />;

  return (
    <Stack direction="row" justifyContent="center" mt="5vh">
      {people.map((item, i) => {
        return (
          <TinderCard key={i} className="swipe" preventSwipe={["up", "down"]}>
            <div
              className="card"
              style={{
                backgroundImage: `url(${item.url})`,
              }}
            >
              <h3>{item.name}</h3>
            </div>
          </TinderCard>
        );
      })}
    </Stack>
  );
};

export default TinderCards;
