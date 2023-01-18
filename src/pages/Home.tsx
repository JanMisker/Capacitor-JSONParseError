import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import "./Home.css";

const Home: React.FC = () => {
  const [data, setData] = useState("Loading");

  useEffect(() => {
    fetch("https://run.mocky.io/v3/cb25a9f8-1ef5-4462-8e5a-fc56de26b876")
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        console.error("Error", err);
        setData("Error: " + err);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>{data}</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
