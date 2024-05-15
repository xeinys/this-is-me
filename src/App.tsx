import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
    const { t } = useTranslation();

    const now = new Date();

    let age = now.getFullYear() - 2001;

    if (now.getMonth() === 0 && now.getDate() < 18) age--;

    return (
        <>
            <div className='name-container'>
                <h1>LR - {age} {t('age-suffix')}</h1>
            </div>
            <div className='animated-border'></div>
            <div className='animated-border'></div>
            <p></p>
        </>

    );
}

export default App;
