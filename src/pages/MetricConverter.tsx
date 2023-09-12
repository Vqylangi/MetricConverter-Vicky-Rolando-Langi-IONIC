import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonBackButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import './Style-MetricConverter.css';
import Kembali from '../assets/ios-arrow-back.svg'

const MetricConverter: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<string | undefined>(undefined);
  const [selectedSourceUnit, setSelectedSourceUnit] = useState<string | undefined>(undefined);
  const [selectedTargetUnit, setSelectedTargetUnit] = useState<string | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string>('');
  const [result, setResult] = useState<string | undefined>(undefined);

  const handleConversion = () => {
    const numericValue = parseFloat(inputValue);

    if (isNaN(numericValue)) {
      setResult('Masukkan angka yang valid');
      return;
    }

    if (selectedMetric === 'panjang') {
      if (selectedSourceUnit === 'km' && selectedTargetUnit === 'm') {
        const resultValue = numericValue * 1000;
        setResult(`${numericValue} km sama dengan ${resultValue} m`);
      } else if (selectedSourceUnit === 'm' && selectedTargetUnit === 'km') {
        const resultValue = numericValue / 1000;
        setResult(`${numericValue} m sama dengan ${resultValue} km`);
      } else if (selectedSourceUnit === 'km' && selectedTargetUnit === 'mm') {
        const resultValue = numericValue * 1000000;
        setResult(`${numericValue} km sama dengan ${resultValue} mm`);
      } else if (selectedSourceUnit === 'mm' && selectedTargetUnit === 'm') {
        const resultValue = numericValue / 1000;
        setResult(`${numericValue} mm sama dengan ${resultValue} m`);
      }else if (selectedSourceUnit === 'm' && selectedTargetUnit === 'mm') {
        const resultValue = numericValue * 1000;
        setResult(`${numericValue} m sama dengan ${resultValue} mm`);
      }else if (selectedSourceUnit === 'mm' && selectedTargetUnit === 'km') {
        const resultValue = numericValue / 1000000;
        setResult(`${numericValue} mm sama dengan ${resultValue} km`);
      } else {
        setResult('Konversi tidak didukung');
      }
    } else if (selectedMetric === 'massa') {
      if (selectedSourceUnit === 'kg' && selectedTargetUnit === 'g') {
        const resultValue = numericValue * 1000;
        setResult(`${numericValue} kg sama dengan ${resultValue} g`);
      } else if (selectedSourceUnit === 'g' && selectedTargetUnit === 'kg') {
        const resultValue = numericValue / 1000;
        setResult(`${numericValue} g sama dengan ${resultValue} kg`);
      } else if (selectedSourceUnit === 'mg' && selectedTargetUnit === 'g') {
          const resultValue = numericValue / 1000;
          setResult(`${numericValue} mg sama dengan ${resultValue} g`);
      }else if (selectedSourceUnit === 'g' && selectedTargetUnit === 'mg') {
        const resultValue = numericValue * 1000;
        setResult(`${numericValue} mg sama dengan ${resultValue} g`);
      } else {
        setResult('Konversi tidak didukung');
      }
    }
    else if (selectedMetric === 'waktu') {
      if (selectedSourceUnit === 's' && selectedTargetUnit === 'min') {
        const resultValue = numericValue / 60;
        setResult(`${numericValue} detik sama dengan ${resultValue} menit`);
      } else if (selectedSourceUnit === 'min' && selectedTargetUnit === 's') {
        const resultValue = numericValue * 60;
        setResult(`${numericValue} menit sama dengan ${resultValue} detik`);
      } else if (selectedSourceUnit === 'min' && selectedTargetUnit === 'h') {
        const resultValue = numericValue / 60;
        setResult(`${numericValue} menit sama dengan ${resultValue} jam`);
      } else if (selectedSourceUnit === 'h' && selectedTargetUnit === 'min') {
        const resultValue = numericValue * 60;
        setResult(`${numericValue} jam sama dengan ${resultValue} menit`);
      } else if (selectedSourceUnit === 'h' && selectedTargetUnit === 's') {
        const resultValue = numericValue * 60 * 60;
        setResult(`${numericValue} jam sama dengan ${resultValue} detik`);
      }else if (selectedSourceUnit === 's' && selectedTargetUnit === 'h') {
        const resultValue = numericValue / 60 / 60;
        setResult(`${numericValue} detik sama dengan ${resultValue} jam`);
      } else {
        setResult('Konversi tidak didukung');
      }
      } else if (selectedMetric === 'listrik') {
        if (selectedSourceUnit === 'A' && selectedTargetUnit === 'mA') {
          const resultValue = numericValue * 1000;
          setResult(`${numericValue} Ampere (A) sama dengan ${resultValue} Miliampere (mA)`);
        } else if (selectedSourceUnit === 'mA' && selectedTargetUnit === 'A') {
          const resultValue = numericValue / 1000;
          setResult(`${numericValue} Miliampere (mA) sama dengan ${resultValue} Ampere (A)`);
        } else if (selectedSourceUnit === 'A' && selectedTargetUnit === 'kA') {
          const resultValue = numericValue / 1000;
          setResult(`${numericValue} Ampere (A) sama dengan ${resultValue} Kiloampere (kA)`);
        } else if (selectedSourceUnit === 'kA' && selectedTargetUnit === 'A') {
          const resultValue = numericValue * 1000;
          setResult(`${numericValue} Kiloampere (kA) sama dengan ${resultValue} Ampere (A)`);
        }else if (selectedSourceUnit === 'kA' && selectedTargetUnit === 'mA') {
            const resultValue = numericValue * 1000 *1000;
            setResult(`${numericValue} Kiloampere (kA) sama dengan ${resultValue} Miliampere (mA)`);
        }else if (selectedSourceUnit === 'mA' && selectedTargetUnit === 'kA') {
            const resultValue = numericValue / 1000 /1000;
            setResult(`${numericValue} Miliampere (mA) sama dengan ${resultValue} Kiloampere (kA)`);
        } else {
          setResult('Konversi tidak didukung');
        }
      } else if (selectedMetric === 'suhu') {
        if (selectedSourceUnit === 'C' && selectedTargetUnit === 'F') {
          const resultValue = (numericValue * 9/5) + 32;
          setResult(`${numericValue} derajat Celsius sama dengan ${resultValue} derajat Fahrenheit`);
        } else if (selectedSourceUnit === 'F' && selectedTargetUnit === 'C') {
          const resultValue = (numericValue - 32) * 5/9;
          setResult(`${numericValue} derajat Fahrenheit sama dengan ${resultValue} derajat Celsius`);
        } else {
          setResult('Konversi tidak didukung');
        }
      }else if (selectedMetric === 'intensitas-cahaya') {
        if (selectedSourceUnit === 'lux' && selectedTargetUnit === 'k-lux') {
          const resultValue = numericValue / 1000;
          setResult(`${numericValue} Lux (lx) sama dengan ${resultValue} Kilo Lux (k-lx)`);
        }
        else if (selectedSourceUnit === 'k-lux' && selectedTargetUnit === 'lux') {
          const resultValue = numericValue * 1000;
          setResult(`${numericValue} Kilo Lux (k-lx) sama dengan ${resultValue} Lux (k-lx)`);
        } else {
          setResult('Konversi tidak didukung');
        }
      } else if (selectedMetric === 'jumlah-zat') {
        if (selectedSourceUnit === 'mol' && selectedTargetUnit === 'kmol') {
          const resultValue = numericValue / 1000;
          setResult(`${numericValue} Mol (mol) sama dengan ${resultValue} Kilo Mol (kmol)`);
        }
        else if (selectedSourceUnit === 'kmol' && selectedTargetUnit === 'mol') {
          const resultValue = numericValue * 1000;
          setResult(`${numericValue} Kilo Mol (kmol) sama dengan ${resultValue} Mol (mol)`);
        }else {
          setResult('Konversi tidak didukung');
        }
    } else {
      setResult('Metrik ini tidak didukung');
    }
  };

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar color={'primary'}>
        <IonButton className='balik' slot='start'>
          <IonBackButton color={'dark'}defaultHref='/'>
          </IonBackButton>
        </IonButton>
        <IonTitle>Metric Converter</IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSelect
          interface="popover"
          placeholder="Pilih Metrik"
          value={selectedMetric}
          onIonChange={(e) => setSelectedMetric(e.detail.value)}
        >
          <IonSelectOption value="panjang">Panjang</IonSelectOption>
          <IonSelectOption value="massa">Massa</IonSelectOption>
          <IonSelectOption value="waktu">Waktu</IonSelectOption>
          <IonSelectOption value="listrik">Arus Listrik</IonSelectOption>
          <IonSelectOption value="suhu">Suhu</IonSelectOption>
          <IonSelectOption value="intensitas-cahaya">Intensitas Cahaya</IonSelectOption>
          <IonSelectOption value="jumlah-zat">Jumlah Zat</IonSelectOption>          
        </IonSelect>

      <IonSelect
        interface="popover"
        placeholder="Pilih Satuan Sumber"
        disabled={!selectedMetric}
        value={selectedSourceUnit}
        onIonChange={(e) => setSelectedSourceUnit(e.detail.value)}
    >   
  {selectedMetric === 'massa' ? (
    <>
      <IonSelectOption value="kg">Kilogram (kg)</IonSelectOption>
      <IonSelectOption value="g">Gram (g)</IonSelectOption>
      <IonSelectOption value="mg">Miligram (mg)</IonSelectOption>
    </>
  ) : selectedMetric === 'panjang' ? (
    <>
      <IonSelectOption value="km">Kilometer (km)</IonSelectOption>
      <IonSelectOption value="m">Meter (m)</IonSelectOption>
      <IonSelectOption value="mm">Milimeter (mm)</IonSelectOption>
    </>

  ) :selectedMetric === 'waktu' ? (
    <>
      <IonSelectOption value="s">Detik (s)</IonSelectOption>
      <IonSelectOption value="min">Menit (min)</IonSelectOption>
      <IonSelectOption value="h">Jam (h)</IonSelectOption>
    </>
  ) : selectedMetric === 'listrik' ? (
    <>
    <IonSelectOption value="A">Ampere (A)</IonSelectOption>
    <IonSelectOption value="mA">Miliampere (mA)</IonSelectOption>
    <IonSelectOption value="kA">Kiloampere (kA)</IonSelectOption>
  </>
  ) : selectedMetric === 'suhu' ? (
    <>
      <IonSelectOption value="C">Celsius (°C)</IonSelectOption>
      <IonSelectOption value="F">Fahrenheit (°F)</IonSelectOption>
    </>
  ) : selectedMetric === 'intensitas-cahaya' ? (
    <>
      <IonSelectOption value="lux">Lux (lx)</IonSelectOption>
      <IonSelectOption value="k-lux">Kilo Lux (k-lx)</IonSelectOption>
    </>
  ) : selectedMetric === 'jumlah-zat' ? (
    <>
      <IonSelectOption value="mol">Mol (mol)</IonSelectOption>
      <IonSelectOption value="kmol">Kilo Mol (kmol)</IonSelectOption>
    </>
  ) : null}
</IonSelect>

<IonSelect
  interface="popover"
  placeholder="Pilih Satuan Hasil"
  disabled={!selectedSourceUnit}
  value={selectedTargetUnit}
  onIonChange={(e) => setSelectedTargetUnit(e.detail.value)}
>
  {selectedMetric === 'massa' ? (
    <>
      <IonSelectOption value="kg">Kilogram (kg)</IonSelectOption>
      <IonSelectOption value="g">Gram (g)</IonSelectOption>
      <IonSelectOption value="mg">Miligram (mg)</IonSelectOption>
    </>
  ) : selectedMetric === 'panjang' ? (
    <>
      <IonSelectOption value="km">Kilometer (km)</IonSelectOption>
      <IonSelectOption value="m">Meter (m)</IonSelectOption>
      <IonSelectOption value="mm">Milimeter (mm)</IonSelectOption>
    </>
  ) : selectedMetric === 'waktu' ? (
    <>
      <IonSelectOption value="s">Detik (s)</IonSelectOption>
      <IonSelectOption value="min">Menit (min)</IonSelectOption>
      <IonSelectOption value="h">Jam (h)</IonSelectOption>
    </>
  ) : selectedMetric === 'listrik' ? (
    <>
    <IonSelectOption value="A">Ampere (A)</IonSelectOption>
    <IonSelectOption value="mA">Miliampere (mA)</IonSelectOption>
    <IonSelectOption value="kA">Kiloampere (kA)</IonSelectOption>
  </>
  ) : selectedMetric === 'suhu' ? (
    <>
      <IonSelectOption value="C">Celsius (°C)</IonSelectOption>
      <IonSelectOption value="F">Fahrenheit (°F)</IonSelectOption>
    </>
  ) : selectedMetric === 'intensitas-cahaya' ? (
    <>
      <IonSelectOption value="lux">Lux (lx)</IonSelectOption>
      <IonSelectOption value="k-lux">Kilo Lux (k-lx)</IonSelectOption>
    </>
  ) : selectedMetric === 'jumlah-zat' ? (
    <>
      <IonSelectOption value="mol">Mol (mol)</IonSelectOption>
      <IonSelectOption value="kmol">Kilo Mol (kmol)</IonSelectOption>
    </>
  ) : null}
</IonSelect>


        <IonInput
          type="number"
          placeholder="Masukkan Angka"
          value={inputValue}
          onIonChange={(e) => setInputValue(e.detail.value!)}
          className='custom-input-tab'
        ></IonInput>

        <IonButton className='Button-Konversi' expand="full" color="secondary" onClick={handleConversion}>
          Konversi
        </IonButton>

        {result && <IonLabel>Hasil: {result}</IonLabel>}
      </IonContent>
    </IonPage>
  );
};

export default MetricConverter;
