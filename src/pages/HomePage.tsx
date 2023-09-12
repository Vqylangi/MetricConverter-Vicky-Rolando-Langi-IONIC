import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import LOGO from '../assets/SI_Converter.svg'
import PLAY from '../assets/ios-play.svg'
import './Style-MetricConverter.css';
const HomePage: React.FC = () => { 

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle> Metric Converter </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false}>
                <div className='logo'>
                    <img src={LOGO} width={'50%'} alt="Logo" />
                </div>
                <IonCard>
                    <IonCardContent>
                    <IonButton routerLink='/MetricConverter' color={'secondary'} type='button' expand='block' className='Mulai'>
                        Mulai
                        <IonIcon icon={PLAY} slot='end'/></IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
            
            <IonFooter>
                <IonToolbar className='pembuat' color={'primary'}>By : Vicky Rolando Langi 210211060251</IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default HomePage;