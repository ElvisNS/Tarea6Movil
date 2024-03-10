import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/folder/Inicio',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Persona',
    url: '/folder/Persona',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'Edad',
    url: '/folder/Edad',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Universidad',
    url: '/folder/Universidad',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Clima',
    url: '/folder/Clima',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Noticias',
    url: '/folder/Noticias',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  },
  {
    title: 'Contratame',
    url: '/folder/Contratame',
    iosIcon: warningOutline,
    mdIcon: warningSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Elvis Núñez</IonListHeader>
          <IonNote>2021-2144</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
